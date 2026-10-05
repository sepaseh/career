# Digital Bank Mellat

## Overview

Bank Mellat's digital banking product includes customer identity-verification and video-banking services, supported by a staff portal for their operation and management. This project covers the frontend applications for these services.

---

## The Problem

Customers needed a digital identity-verification flow during sign-in and a way to access branch services remotely. Bank staff needed operational tools to manage live verification and video-banking workflows, customer requests, and service availability.

---

## Engineering Challenges

- Coordinating separate identity-verification and video-banking workflows with backend services developed in parallel.
- Supporting live customer verification and video sessions, including queues, real-time updates, documents, and media connections.
- Organizing three independently deployable frontend applications around shared packages while preserving clear application boundaries.
- Maintaining a complete development and CI workflow while providing deployment with a lightweight release package.

---

## My Contributions

- Designed and implemented the frontend applications for customer identity verification, video banking, and staff operations.
- Designed the monorepo architecture and shared packages used across the applications.
- Designed the API collection and frontend documentation to guide backend service development, then adapted integrations as service contracts evolved.
- Established application and shared-package tests, GitHub Actions CI, and project-specific instructions for AI coding assistants.
- Automated delivery of a lightweight deployment package after CI passes, excluding tests and development-only files.

---

## Technical Highlights

- **Live Branch Services:** Connected customer-facing video sessions with staff workflows for reviewing customer information and documents and handling requested services during the call.

- **Configurable Identity Verification:** Enabled staff to configure verification profiles, AI decision modes, ordered modules, and confidence thresholds.

- **Operational Visibility:** Provided live queue and session status alongside staff availability, performance, service usage, and queue timing.

---

## Technology Stack

- React
- TypeScript
- Vite
- Turborepo and npm workspaces
- Material UI (MUI)
- Ant Design
- REST APIs and WebSockets
- LiveKit
- Vitest and Playwright
- GitHub Actions
