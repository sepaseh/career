# Digital Bank Mellat

**Engagement:** Freelance

**Dates:** Apr 2026 – Sep 2026

**Follow-up:** API documentation and integration-reference maintenance in Oct 2026

---

## Overview

Bank Mellat's digital banking product includes customer identity-verification and video-banking services, supported by a staff portal for their operation and management. This document describes my work in customer discovery, domain analysis, frontend/backend communication design, technical documentation and application development for these services.

---

## The Problem

Customers needed a digital identity-verification flow during sign-in and a way to access branch services remotely. Bank staff needed operational tools to manage live verification and video-banking workflows, customer requests, and service availability.

---

## Collaboration and Design Decisions

Dima delegated the video-banking part of the wider product to our team. In discovery meetings with the customer, we defined the scope and business domains of video banking, then designed communication between backend services and frontend applications and the REST and WebSocket contracts.

The employer initially requested video calls between a customer device and a banker. We identified and tested LiveKit, confirmed its suitability for the video-call requirement, and developed bank-specific capabilities around it: waiting queues, ratings, special customers, available services, and one-time passwords. Most interactions and state changes are managed in real time through sockets.

In subsequent customer meetings, I listed the additional requirements and structured an API collection to coordinate service implementation.

As a shared team decision, we used Clean Architecture for the backend and did not consider Domain-Driven Design necessary at that stage given the scale of the project. At my teammate’s request, the queue component was separated into an independent microservice.

---

## Engineering Challenges

- Coordinating separate identity-verification and video-banking workflows with backend services developed in parallel.
- Supporting live customer verification and video sessions, including queues, real-time updates, documents, and media connections.
- Organizing three independently deployable frontend applications around shared packages while preserving clear application boundaries.
- Maintaining a complete development and CI workflow while providing deployment with a lightweight release package.

---

## My Contributions

- Elicited and listed additional requirements in customer meetings and structured an API collection to coordinate service development.
- Contributed to evaluating and testing LiveKit and to shared solution and architecture decisions.
- Designed and implemented the frontend applications for customer identity verification, video banking, and staff operations.
- Designed the monorepo architecture and shared packages used across the applications.
- Prepared frontend documentation to guide backend service development, then adapted integrations as service contracts evolved.
- Maintained executable Bruno API collections and Swagger-derived references, coordinating contract examples, frontend types and tests as interfaces changed.
- Collaboratively prepared the project's HLD, ERD and UML sequence diagrams; documented frontend interaction sequences and reviewed service integration behavior against the shared models.
- Established application and shared-package tests, GitHub Actions CI, and project-specific instructions for AI coding assistants.
- Automated delivery of a lightweight deployment package after CI passes, excluding tests and development-only files.

---

## Technical Highlights

- **Live Branch Services:** Connected customer-facing video sessions with staff workflows for reviewing customer information and documents and handling requested services during the call.

- **Configurable Identity Verification:** Enabled staff to configure verification profiles, AI decision modes, ordered modules, and confidence thresholds.

- **Operational Visibility:** Provided live queue and session status alongside staff availability, performance, service usage, and queue timing.

---

## Banking Workflows and Delivery Documentation

- Designed workflows for VIP queue priority and staff-managed special-customer lists, configurable banking services and forms, customer call history and post-call feedback.
- Developed a configurable structure for services tailored to different business sectors, standard and VIP queues and dynamic service forms, with live queue and session updates in the management dashboard.
- Connected service selection and data entry with OTP confirmation and recorded customer acknowledgment during the video call.
- Designed and implemented customer and banker interfaces. Delivered the project's HLD, ERD, UML sequence diagrams, API references and executable Bruno collections with the source code as shared engineering deliverables.

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
