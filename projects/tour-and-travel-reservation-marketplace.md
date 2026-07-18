# Multi-Vendor Tour & Travel Reservation Platform

## Overview

This project involved developing a marketplace platform for discovering, organizing, and booking tours and accommodations.

Beyond providing online reservations, the platform brought together tour organizers, accommodation owners, and travelers within a unified travel ecosystem. It combined service discovery, verified provider profiles, booking workflows, payments, and operational management into a single experience, while establishing the foundation for a broader travel platform that could evolve beyond tour reservations.

---

## The Problem

Planning and booking travel services often required users to navigate multiple providers, compare inconsistent information, and complete different parts of the journey through separate systems.

Tour organizers and accommodation providers also lacked a unified platform to present their services, manage reservations, and build credibility with potential customers. As a result, discovering, comparing, and booking travel experiences remained fragmented for both travelers and service providers.

The project aimed to bring these disconnected workflows together within a single marketplace, simplifying the booking experience while providing travel businesses with a centralized platform to manage their services and reach a broader audience.

---

## Engineering Challenges

- Designing an integrated user experience where users could seamlessly manage their own content within the public application.
- Implementing dedicated mobile and desktop interfaces in a Next.js application while keeping business logic shared across both experiences.
- Designing long-running multi-step workflows with draft persistence and resumable progress.
- Modeling room-level reservation availability while supporting real-world booking scenarios without scheduling conflicts.

---

## My Contributions

- Contributed to rebuilding the product around a unified website experience, replacing the previous separation between public and authenticated applications.
- Developed multi-step tour management workflows with draft persistence and resumable progress.
- Implemented the accommodation reservation experience around room-level availability and booking workflows.
- Developed a configurable homepage template system that allowed administrators to compose and manage dynamic landing pages without frontend changes.

---

## Technical Highlights

- **Unified Application Experience:** Rebuilt the product around a single website experience, replacing the separation between public and authenticated applications while preserving existing business workflows.

- **Device-Specific Presentation Architecture:** Built dedicated mobile and desktop interfaces for complex workflows while keeping business logic, validation, and API integration shared across both experiences.

- **Resumable Multi-Step Workflows:** Implemented long-running creation workflows with step-level validation, draft persistence, and resumable progress based on backend completion state.

- **Room-Level Reservation Model:** Designed the reservation experience around room-level availability, supporting independent pricing, booking rules, and conflict-free scheduling.

---

## Technology Stack

- Next.js
- React
- Redux
- Ant Design
- REST APIs
