const fs = require('node:fs');
const path = require('node:path');
const { createRequire } = require('node:module');
let chromium;
try { ({ chromium } = require('playwright')); }
catch {
  const runtime = path.join(process.env.USERPROFILE, '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/package.json');
  ({ chromium } = createRequire(runtime)('playwright'));
}
const root = path.resolve(__dirname, '..');
const configPath = path.join(root, 'private/contact.json');
const config = fs.existsSync(configPath) ? JSON.parse(fs.readFileSync(configPath, 'utf8')) : {};
const mode = process.argv[2] || 'all';
const language = process.argv[3] || 'all';
const requestedProfile = process.argv[4] || 'frontend-engineer';
const profileAliases = new Map([
  ['ats', 'frontend-engineer'],
  ['ai-developer-experience', 'software-engineer'],
  ['ai-assisted-engineering', 'software-engineer'],
]);
const profile = profileAliases.get(requestedProfile) ?? requestedProfile;
const profiles = new Map([
  ['frontend-engineer', { source: 'resume-frontend-engineer.md', title: 'Frontend Engineer Resume' }],
  ['software-engineer', {
    source: 'resume-software-engineer.md',
    title: 'Software Engineer Resume',
    persianLineHeight: 1.32,
    secondPageHeadings: ['Technical Skills', 'مهارت‌های فنی'],
  }],
]);
const selectedProfile = profiles.get(profile);
const useContentBlocks = profile === 'software-engineer';
if (!['all','en','fa'].includes(language)) throw Error('Language must be all, en, or fa.');
if (!['all','public','private'].includes(mode)) throw Error('Use all, public, or private.');
if (!selectedProfile) throw Error(`Profile must be one of: ${[...profiles.keys()].join(', ')}.`);
if (mode !== 'public' && !config.phone) throw Error('Private export requires private/contact.json with a phone.');
function fontSettings(fa) {
 const settings=config.fonts?.[fa?'fa':'en'];
 if(!settings) throw Error('Configure fonts.en and fonts.fa in private/contact.json.');
 return settings;
}
function fontCSS(settings) {
 return ['regular','bold'].map((weight,i)=>`@font-face{font-family:${JSON.stringify(settings.family)};font-style:normal;font-weight:${i?700:400};src:url(data:${path.extname(settings[weight])==='.woff2'?'font/woff2':'font/ttf'};base64,${fs.readFileSync(settings[weight]).toString('base64')})}`).join('');
}
const escape = value => value.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const inline = value => escape(value).replace(/\[([^\]]+)\]\(([^)]+)\)/g,(_,label,url) => /^(https?:|mailto:)/.test(url) ? `<a href="${url}">${label}</a>` : label).replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>');
function parse(source) {
 const chunks=source.replace(/\r/g,'').split(/^## /m);
 const opening=chunks.shift().split(/^---[ \t]*$/m);const header=opening.shift();
 const introduction=opening.join('\n').trim();
 const sections=chunks.map(chunk=>{const [title,...lines]=chunk.trim().split('\n');return {title,lines};});
 return {header,introduction,sections};
}
function paragraphs(lines) {
 let html='', list=false;
 for(const line of lines){if(!line.trim()||line==='---'){if(list){html+='</ul>';list=false;}continue;}
 if(line.startsWith('- ')){if(!list){html+='<ul>';list=true;}html+=`<li>${inline(line.slice(2))}</li>`;continue;}
 if(list){html+='</ul>';list=false;}html+=`<p>${inline(line)}</p>`;}
 if(list)html+='</ul>';return html;
}
function sectionBlocks(section) {
 const groups=section.lines.join('\n').split(/\n\s*\n/).map(group=>group.split('\n').filter(line=>line.trim()&&line!=='---')).filter(group=>group.length);
 const blocks=[];
 for(let index=0;index<groups.length;index++) {
  const group=groups[index];
  if(/^\[\*\*/.test(group[0])&&index+1<groups.length&&!/^\[\*\*/.test(groups[index+1][0])) group.push(...groups[++index]);
  blocks.push(`<article>${paragraphs(group)}</article>`);
 }
 if(blocks.length) blocks[0]=`<h2>${inline(section.title)}</h2>`+blocks[0];
 return blocks;
}
function documentHTML(source,fa,phone){
 const font=fontSettings(fa);
 const {header,introduction,sections}=parse(source);const lines=header.split('\n').filter(x=>x.trim()&&x!=='---');
 const name=lines[0].replace(/^# /,'');const role=lines[1];const specialty=lines[2];const location=lines[3];
 const contacts=lines.slice(4).map(x=>inline(x.replace(/^(Email|ایمیل|LinkedIn|GitHub|لینکدین|گیت‌هاب|Website|وب‌سایت):\s*/,'')));
 if(phone){
  const compactPhone=escape(phone.replace(/\s+/g,''));
  contacts.splice(1,0,`<a dir="ltr" href="tel:${compactPhone}">${compactPhone}</a>`);
 }
 const top=`<header><h1>${inline(name)}</h1><p class="role">${inline(role)}</p><p dir="${fa?'rtl':'ltr'}">${inline(specialty)}</p><div class="contacts"><span>${inline(location)}</span>${contacts.map(x=>`<span dir="auto">${x}</span>`).join('')}</div></header>`;
 const experience=sections.find(s=>/^(Professional Experience|تجربه‌های حرفه‌ای)$/.test(s.title));
 if(!experience) throw Error('Resume must include a Professional Experience section.');
 const expIndex=sections.indexOf(experience);
 const jobs=experience.lines.join('\n').split(/^### /m).slice(1).map(job=>{const [title,...content]=job.trim().split('\n');return `<article><h3>${inline(title)}</h3>${paragraphs(content)}</article>`;});
 const section=s=>`<section><h2>${inline(s.title)}</h2>${paragraphs(s.lines)}</section>`;
 const before=top+paragraphs(introduction.split('\n'))+sections.slice(0,expIndex).map(section).join('')+`<h2>${inline(experience.title)}</h2>`;
 const after=sections.slice(expIndex+1).map(section).join('');
 const blocks=[top+paragraphs(introduction.split('\n'))];
 let secondPageStart;
 for(const currentSection of sections){
  if(selectedProfile.secondPageHeadings?.includes(currentSection.title)) secondPageStart=blocks.length;
  const content=currentSection===experience
   ? jobs.map((job,index)=>(index===0?`<h2>${inline(experience.title)}</h2>`:'')+job)
   : sectionBlocks(currentSection);
  blocks.push(...content);
 }
 const title=selectedProfile.title;
 const html=`<!doctype html><html lang="${fa?'fa':'en'}" dir="${fa?'rtl':'ltr'}"><head><meta charset="utf-8"><title>${escape(name)} - ${title}</title><style>
 ${fontCSS(font)}
 @page{size:A4;margin:12mm 14mm}body{margin:0;color:#151515;font-family:${JSON.stringify(font.family)},sans-serif;font-size:11pt;line-height:${fa?(selectedProfile.persianLineHeight ?? 1.38):1.16}}
 h1{font-size:24pt;margin:0 0 2pt}header{text-align:center;margin-bottom:7pt}header p{margin:0 0 2pt}
 .contacts{display:flex;justify-content:center;flex-wrap:wrap;gap:2pt 6pt;font-size:9pt;line-height:1.35;margin-top:3pt}
 .contacts span{white-space:nowrap}.contacts a{color:#214a71;text-decoration:underline;text-underline-offset:.14em}
 h2{font-size:12pt;margin:8pt 0 4pt;border-bottom:.6pt solid #888;padding-bottom:2pt}h3{font-size:11pt;margin:6pt 0 2pt}p{margin:0 0 3pt}ul{margin:2pt 0 4pt;padding-inline-start:14pt}li{margin:0 0 1pt}article{break-inside:avoid}article>p:first-of-type{margin-bottom:3pt}a{color:inherit;text-decoration:none}.sheet{break-after:page}.sheet:last-child{break-after:auto}strong{font-weight:700}
 ${secondPageStart ? '#second h2{margin-top:5pt;margin-bottom:3pt}#second p{margin-bottom:2pt}' : ''}
 </style></head><body><div class="sheet" id="first"></div><div class="sheet" id="second"></div></body></html>`;
 return {html,before,after,jobs,blocks,secondPageStart};
}
(async()=>{
 const options={headless:true};if(config.browserExecutable)options.executablePath=config.browserExecutable;
 const browser=await chromium.launch(options);
 try{for(const fa of (language==='all'?[false,true]:[language==='fa']))for(const isPrivate of (mode==='all'?[false,true]:[mode==='private'])){
  const source=fs.readFileSync(path.join(root,fa?'fa':'',selectedProfile.source),'utf8');
  const document=documentHTML(source,fa,isPrivate?config.phone:null);const page=await browser.newPage({viewport:{width:Math.floor((210-28)*96/25.4),height:1100}});
  await page.setContent(document.html);await page.evaluate(()=>document.fonts.ready);
  const result=await page.evaluate(({before,after,jobs,blocks,secondPageStart,fa,useContentBlocks})=>{
   const first=document.getElementById('first'),second=document.getElementById('second');
   const printHeight=(297-24)*96/25.4;
   const limit=printHeight-(secondPageStart?20:45);
   const splits=secondPageStart
    ? [secondPageStart]
    : useContentBlocks ? Array.from({length:blocks.length-1},(_,index)=>index+1) : [3,4,5];
   const fill=split=>{first.innerHTML=useContentBlocks?blocks.slice(0,split).join(''):before+jobs.slice(0,split).join('');second.innerHTML=useContentBlocks?blocks.slice(split).join(''):jobs.slice(split).join('')+after;};
   for(let size=fa?11:11.5;size>=10;size-=.25){document.body.style.fontSize=`${size}pt`;let best;
    for(const split of splits){fill(split);
     const height=Math.max(first.getBoundingClientRect().height,second.getBoundingClientRect().height);
     if(!best||height<best.height)best={height,split};}
    if(best.height<=limit){fill(best.split);return {size,split:best.split};}
   }throw Error('Cannot fit intact content into two pages at a readable font size.');
  },{...document,fa,useContentBlocks});
  const directory=path.join(root,isPrivate?'private/pdf':'output/pdf');fs.mkdirSync(directory,{recursive:true});
  const destination=path.join(directory,`mahdi-sepaseh-resume-${profile}-${fa?'fa':'en'}.pdf`);
  await page.pdf({path:destination,preferCSSPageSize:true,printBackground:true,tagged:true});
  console.log(`${isPrivate?'Private':'Public'} ${fa?'Persian':'English'}: ${result.size}pt, page two after ${result.split} ${useContentBlocks?'content blocks':'roles'}.`);await page.close();
 }}finally{await browser.close();}
})().catch(error=>{console.error(error.message);process.exitCode=1;});
