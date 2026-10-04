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
if (!['all','en','fa'].includes(language)) throw Error('Language must be all, en, or fa.');
if (!['all','public','private'].includes(mode)) throw Error('Use all, public, or private.');
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
 const chunks=source.replace(/\r/g,'').split(/^## /m);const header=chunks.shift();
 const sections=chunks.map(chunk=>{const [title,...lines]=chunk.trim().split('\n');return {title,lines};});
 return {header,sections};
}
function paragraphs(lines) {
 let html='', list=false;
 for(const line of lines){if(!line.trim()||line==='---'){if(list){html+='</ul>';list=false;}continue;}
 if(line.startsWith('- ')){if(!list){html+='<ul>';list=true;}html+=`<li>${inline(line.slice(2))}</li>`;continue;}
 if(list){html+='</ul>';list=false;}html+=`<p>${inline(line)}</p>`;}
 if(list)html+='</ul>';return html;
}
function documentHTML(source,fa,phone){
 const font=fontSettings(fa);
 const {header,sections}=parse(source);const lines=header.split('\n').filter(x=>x.trim()&&x!=='---');
 const name=lines[0].replace(/^# /,'');const role=lines[1];const specialty=lines[2];const location=lines[3];
 const contacts=lines.slice(4).map(x=>inline(x.replace(/^(Email|ایمیل|LinkedIn|GitHub|لینکدین|گیت‌هاب):\s*/,'')));
 if(phone)contacts.splice(1,0,`<a dir="ltr" href="tel:${escape(phone.replace(/\s/g,''))}">${escape(phone)}</a>`);
 const top=`<header><h1>${inline(name)}</h1><p class="role">${inline(role)}</p><p>${inline(specialty)}</p><div class="contacts"><span>${inline(location)}</span>${contacts.map(x=>`<span dir="ltr">${x}</span>`).join('')}</div></header>`;
 const experience=sections.find(s=>/^(Professional Experience|تجربه‌های حرفه‌ای)$/.test(s.title));
 const expIndex=sections.indexOf(experience);
 const jobs=experience.lines.join('\n').split(/^### /m).slice(1).map(job=>{const [title,...content]=job.trim().split('\n');return `<article><h3>${inline(title)}</h3>${paragraphs(content)}</article>`;});
 const section=s=>`<section><h2>${inline(s.title)}</h2>${paragraphs(s.lines)}</section>`;
 const before=top+sections.slice(0,expIndex).map(section).join('')+`<h2>${inline(experience.title)}</h2>`;
 const after=sections.slice(expIndex+1).map(section).join('');
 const html=`<!doctype html><html lang="${fa?'fa':'en'}" dir="${fa?'rtl':'ltr'}"><head><meta charset="utf-8"><title>Mahdi Sepaseh - ATS Resume</title><style>
 ${fontCSS(font)}
 @page{size:A4;margin:12mm 14mm}body{margin:0;color:#151515;font-family:${JSON.stringify(font.family)},sans-serif;font-size:11pt;line-height:${fa?'1.38':'1.16'}}
 h1{font-size:24pt;margin:0 0 2pt}header{text-align:center;margin-bottom:7pt}header p{margin:0 0 2pt}.contacts{display:flex;justify-content:center;flex-wrap:wrap;gap:2pt 8pt;font-size:9pt;line-height:1.35;margin-top:3pt}.contacts span{white-space:nowrap}
 h2{font-size:12pt;margin:8pt 0 4pt;border-bottom:.6pt solid #888;padding-bottom:2pt}h3{font-size:11pt;margin:6pt 0 2pt}p{margin:0 0 3pt}ul{margin:2pt 0 4pt;padding-inline-start:14pt}li{margin:0 0 1pt}article{break-inside:avoid}article>p:first-of-type{margin-bottom:3pt}a{color:inherit;text-decoration:none}.sheet{break-after:page}.sheet:last-child{break-after:auto}strong{font-weight:700}
 </style></head><body><div class="sheet" id="first"></div><div class="sheet" id="second"></div></body></html>`;
 return {html,before,after,jobs};
}
(async()=>{
 const options={headless:true};if(config.browserExecutable)options.executablePath=config.browserExecutable;
 const browser=await chromium.launch(options);
 try{for(const fa of (language==='all'?[false,true]:[language==='fa']))for(const isPrivate of (mode==='all'?[false,true]:[mode==='private'])){
  const source=fs.readFileSync(path.join(root,fa?'fa/resume.md':'resume.md'),'utf8');
  const document=documentHTML(source,fa,isPrivate?config.phone:null);const page=await browser.newPage({viewport:{width:Math.floor((210-28)*96/25.4),height:1100}});
  await page.setContent(document.html);await page.evaluate(()=>document.fonts.ready);
  const result=await page.evaluate(({before,after,jobs,fa})=>{
   const first=document.getElementById('first'),second=document.getElementById('second');
   const limit=(297-24)*96/25.4-45;
   for(let size=fa?11:11.5;size>=10;size-=.25){document.body.style.fontSize=`${size}pt`;let best;
    for(const split of [3,4,5]){first.innerHTML=before+jobs.slice(0,split).join('');second.innerHTML=jobs.slice(split).join('')+after;
     const height=Math.max(first.getBoundingClientRect().height,second.getBoundingClientRect().height);
     if(!best||height<best.height)best={height,split};}
    if(best.height<=limit){first.innerHTML=before+jobs.slice(0,best.split).join('');second.innerHTML=jobs.slice(best.split).join('')+after;return {size,split:best.split};}
   }throw Error('Cannot fit intact content into two pages at a readable font size.');
  },{...document,fa});
  const directory=path.join(root,isPrivate?'private/pdf':'output/pdf');fs.mkdirSync(directory,{recursive:true});
  const destination=path.join(directory,`mahdi-sepaseh-resume-ats-${fa?'fa':'en'}.pdf`);
  await page.pdf({path:destination,preferCSSPageSize:true,printBackground:true,tagged:true});
  console.log(`${isPrivate?'Private':'Public'} ${fa?'Persian':'English'}: ${result.size}pt, page two after ${result.split} roles.`);await page.close();
 }}finally{await browser.close();}
})().catch(error=>{console.error(error.message);process.exitCode=1;});
