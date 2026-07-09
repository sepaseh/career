# Multi-Vendor Tour & Travel Reservation Platform

## Overview

This project focused on developing a marketplace platform for discovering, organizing, and booking tours and accommodations.

The platform combined tour listings, eco-lodges, accommodations, attractions, traveler experiences, online reservations, payments, and host management into a unified tourism platform. Although the long-term vision was to expand into a broader travel ecosystem, the implemented product primarily centered around tour organization and reservation workflows.

During development, the product underwent a major redesign. The initial version separated the public website from the authenticated management panel, requiring users to switch to a different application to complete bookings or manage their content. The platform was later rewritten to integrate authenticated workflows directly into the main website, creating a more consistent experience for travelers and service providers.

---

## The Problem

Building a tourism marketplace required much more than publishing tours or accepting reservations.

The platform needed to support multiple travel services while allowing users to participate through verified profiles such as travelers, tour leaders, and accommodation owners. It also had to provide booking workflows, accommodation management, traveler-generated content, and operational tools within a unified product experience.

---

## Engineering Challenges

- Rebuilding a significant portion of the frontend after a major product redesign.
- Integrating authenticated workflows directly into the public website.
- Implementing separate mobile and desktop experiences in a Next.js application while handling server-side device detection.
- Preventing duplicated business logic across device-specific interfaces.
- Developing multi-step workflows with draft persistence and resumable progress.
- Building a custom reservation calendar around booking availability and real-world reservation rules.
- Supporting room-level accommodation management with independent pricing and availability.
- Integrating continuously evolving REST APIs throughout the project lifecycle.

---

## My Contributions

- Developed the frontend of the tourism marketplace.
- Participated in technical discussions where frontend behavior, API integration, and user workflows affected implementation.
- Built public-facing pages for tours, accommodations, attractions, booking flows, traveler experiences, and marketplace features.
- Contributed to integrating authenticated workflows into the main website experience.
- Proposed and implemented separate mobile and desktop experiences during the rewritten version of the project.
- Implemented server-side device-aware rendering in Next.js.
- Built reusable frontend structures to minimize duplicated logic between mobile and desktop implementations.
- Developed multi-step workflows for creating and managing tours with independent validation and persistence.
- Restored draft progress using backend-provided step completion data.
- Developed the reservation calendar and accommodation booking experience.
- Implemented configurable homepage sections using reusable content templates.
- Integrated frontend applications with REST APIs while collaborating closely with backend development.

---

## Technical Highlights

### Unified Website Experience

The rewritten version integrated authenticated workflows directly into the public website instead of redirecting users to a separate management panel.

Menus, available actions, and user workflows adapted dynamically according to verified user profiles, creating a consistent experience across booking, hosting, and travel management features.

### Device-Aware Rendering

Instead of relying solely on responsive layouts, the rewritten version introduced separate mobile and desktop experiences.

Because the public website was built with Next.js, device detection was performed during server-side rendering so the appropriate interface could be rendered from the initial request.

To avoid maintaining two independent applications, shared business logic was separated from presentation-specific components wherever possible.

### Tour Creation Workflow

Creating a tour required a long-running workflow rather than a single form submission.

Each step was validated and saved independently while the tour remained in a draft state until all required information was completed. Progress was restored from backend-provided completion data, allowing organizers to continue from the first incomplete step.

The workflow supported transportation details, departure locations, daily itineraries, accommodation planning, meal planning, capacity management, minimum participant requirements, travel requirements, and publication rules.

### Accommodation & Reservation Management

Accommodation management operated at the room level rather than the property level.

Each room maintained its own availability calendar, pricing, amenities, reservations, and booking rules, allowing different rooms within the same accommodation to be managed independently.

The reservation calendar handled booking availability, date-range selection, reservation boundaries, and edge cases such as allowing a new reservation to begin on the same day another reservation ended because check-out and check-in occurred at different times.

### Configurable Homepage Builder

The homepage was assembled from reusable content sections instead of fixed layouts.

Administrators could select predefined section templates, configure their content, and rearrange sections using drag-and-drop without requiring frontend code changes.

### Community-Driven Travel Content

Travelers could publish ratings, written experiences, and photos after completing trips, helping future travelers make informed booking decisions while strengthening trust across the marketplace.

---

## Technologies

- Next.js
- React
- Ant Design
- REST APIs
- Server-Side Rendering
