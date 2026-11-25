# Enterprise Resource Planning

**Engagement:** Freelance

**Dates:** Aug 2026 – Nov 2026

---

## Overview

This project involved rebuilding the frontend of a legacy enterprise resource planning (ERP) system as a React-based management portal. The existing application was built with ASP.NET MVC and jQuery, and the frontend work required examining its current screens and service contracts because project documentation was not provided.

The backend architecture was already in place. The work involved examining the undocumented system, reorganizing the API collection, agreeing request and response structures with the backend team, and documenting the frontend/backend integration before implementing and testing the new portal.

---

## Engineering Challenges

- Reconstructing page behavior and integration requirements from a legacy application without a product specification.
- Working with APIs that initially lacked useful grouping and consistent REST conventions, included hardcoded inputs, and returned server errors or lacked the needed query parameters and filters.
- Coordinating service-contract changes, backend fixes and tests, and the implementation and testing of complex ERP forms and workflows.

---

## My Contributions

- Independently implemented the React frontend for the current set of ERP pages and workflows, using the legacy application and available API behavior to determine requirements.
- Worked with the backend team to set up Swagger, reorganize the API collection by ERP module, area and page, and standardize and document request and response structures. Established page keys used by the frontend's route and permission model.
- Tested existing services and designed a workflow in the company's repository platform for reporting service issues and tracing backend fixes through the related issues and pull requests.
- Simplified form layouts and interaction flows with Ant Design to reduce unnecessary user actions and clicks.
- Set up GitHub Actions CI checks for code quality, unit and API contract tests, production builds, Storybook interactions and accessibility, and Chromium end-to-end scenarios.
- Created development and testing guidance for AI coding assistants, covering API contract consistency, issue and pull-request traceability, reusable task instructions and quality checks.
- Wrote frontend technical documentation and tests.

---

## Technical Highlights

- **Delta-Based Warehouse Assignments:** The warehouse user and item assignment drawers submit only newly added or removed assignment rows, leaving unchanged user and item links out of the request.

- **API Contract Refactoring During Migration:** Identified failing or insufficient legacy API endpoints and coordinated changes to request parameters and filters so the services could support the React pages.

- **Rebuilding from the Existing System:** Derived page requirements and behavior by examining the legacy MVC/jQuery application in the absence of product documentation.

---

## Requirements and Migration Approach

- Started with the existing application and services because product documentation was unavailable. Initial Swagger setup exposed ungrouped APIs, inconsistent REST conventions and hardcoded inputs; request and response structures were reviewed with the analysis and backend teams and documented as integration contracts.
- Backend service fixes and tests preceded implementation and testing of the new portal. Prepared frontend technical documentation and development and testing guidance for AI coding assistants alongside the implementation.
- Completed the new version within two to three months and brought it into operational use.

---

## Technology Stack

- React
- TypeScript
- Ant Design
- Vite
- React Router
- Axios
- REST APIs
- Swagger / OpenAPI
- Vitest and React Testing Library
