# Multi-Vendor Tour & Travel Reservation Platform

## Overview

This project focused on developing a marketplace platform for discovering, organizing, and booking tours and accommodations.

Rather than serving as a simple booking website, the platform brought together tour organizers, accommodation owners, and travelers through a unified ecosystem that combined service discovery, verified profiles, online reservations, payments, and operational management. The long-term vision extended beyond tour booking toward a broader travel platform, although the implemented product primarily centered around tour organization and reservation workflows.

---

## The Problem

Tour organizers and accommodation providers often operated through social media, making it difficult for travelers to evaluate their identity, credibility, and available services before making a reservation.

The objective was to transform these fragmented interactions into a structured marketplace where service providers could establish trusted profiles while travelers could discover, compare, and book travel services through a consistent digital experience.

---

## Engineering Challenges

- Integrating authenticated workflows directly into the public website.
- Implementing separate mobile and desktop experiences in a Next.js application while handling server-side device detection.
- Preventing duplicated business logic across device-specific interfaces.
- Developing multi-step workflows with draft persistence and resumable progress.
- Building a custom reservation calendar around booking availability and real-world reservation rules.
- Supporting room-level accommodation management with independent pricing and availability.

---

## My Contributions

- Developed the frontend of the tourism marketplace.
- Participated in frontend architecture discussions, API integration, and user workflow design.
- Built public-facing pages for tours, accommodations, attractions, booking flows, and marketplace features.
- Contributed to rebuilding the product around a unified website experience.
- Developed multi-step tour management workflows and the accommodation reservation experience.
- Implemented configurable homepage templates and content management features.
- Collaborated closely with backend engineers throughout frontend integration and product development.

---

## Technical Highlights

- **Rebuilding the Product Around a Unified User Experience:** The initial product separated the public website from the authenticated management experience, forcing users to move between different domains with inconsistent interfaces. The frontend was later redesigned so authenticated workflows became part of the main website, providing a more consistent and mobile-friendly user experience.

- **Device-Specific User Interfaces with Shared Business Logic:** Rather than relying solely on responsive layouts, the platform introduced dedicated mobile and desktop interfaces for complex data-heavy workflows. Presentation components were separated where different interactions were required, while business logic, validation, API integration, and shared application behavior remained reusable across both experiences.

- **Resumable Multi-Step Tour Creation:** Tour creation was designed as a long-running workflow where each step was validated and saved independently. Draft progress was restored using backend-provided completion data, allowing organizers to continue from the first incomplete step instead of restarting the entire process.

- **Room-Level Availability and Reservation Modeling:** Accommodation management operated at the room level rather than the property level. Each room maintained its own availability, pricing, booking rules, and reservations, while the reservation calendar handled real-world scenarios such as allowing same-day check-out and check-in without creating scheduling conflicts.

---

## Technology Stack

- Next.js
- React
- Redux
- Ant Design
- Vite
- REST APIs
