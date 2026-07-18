# Multi-Signature Crypto Wallet Ecosystem

## Overview

This project involved developing a browser extension-based cryptocurrency wallet ecosystem supporting multiple blockchain networks.

Beyond the wallet itself, the ecosystem expanded into a broader suite of products, including developer-facing tools, an application marketplace, and supporting web applications. Rather than treating the wallet as a standalone product, the platform was designed as the foundation of an integrated blockchain ecosystem that enabled users, developers, and partner applications to interact through a consistent frontend experience.

---

## The Problem

Managing digital assets requires balancing strong security with an experience that remains practical for everyday users. Conventional wallet models often relied on a single point of authorization, increasing the impact of compromised credentials or devices.

The initial objective was to build a multi-signature wallet that provided stronger protection without making asset management unnecessarily complex. As the product matured, it became clear that long-term adoption would depend not only on the wallet itself, but also on the surrounding ecosystem that could reinforce trust, usability, and developer engagement.

The project therefore evolved from building a secure wallet into establishing the foundation for a broader blockchain ecosystem centered around that product.

---

## Engineering Challenges

- Designing a browser extension architecture that could support product requirements beyond the constraints of existing extension-focused tooling.
- Managing communication between isolated browser extension contexts, including injected scripts, background processes, and user-facing extension interfaces.
- Injecting a compatible Ethereum provider into web pages while maintaining compatibility with existing dApp expectations.
- Defining clear boundaries between React Query caching and browser persistence to avoid storing unnecessary or sensitive wallet data.

---

## My Contributions

- Developed frontend features for the browser extension wallet.
- Designed and implemented a custom browser extension architecture after identifying limitations in the initial development tooling.
- Built and maintained the browser extension build pipeline for multiple extension entry points.
- Contributed to developer-facing web applications and ecosystem services.

---

## Technical Highlights

- **Replacing Plasmo with a Custom Extension Architecture:** Replaced the initial Plasmo-based implementation after identifying limitations in cross-context communication and page management as the product grew. Designed a custom extension architecture tailored to the project's long-term scalability instead of relying on framework abstractions.

- **Multi-Entry Build and Development Pipeline:** Designed the extension around separate runtime contexts for the application UI, background service worker, content script, and inpage script. Built an independent multi-entry build pipeline and supporting development workflow, allowing each runtime to be built and updated independently while maintaining a cohesive extension.

- **Concurrent Request-Response Messaging Across Extension Contexts:** Designed an asynchronous messaging protocol between web pages and the extension using unique request identifiers. Multiple requests could be processed concurrently across isolated runtime contexts while ensuring every response was correctly correlated with its originating request.

- **Provider Isolation for Incremental Wallet Compatibility:** Established a class-based integration pattern as the extension expanded beyond its initial MetaMask integration. Isolating provider implementations allowed additional wallet interfaces to be introduced without concentrating chain-specific behavior in a single shared layer.

---

## Technology Stack

- React
- TypeScript
- Chrome Extension APIs
- Vite
- Rollup
- React Query
- React Hook Form
- Styled Components
- Zod
