# Enterprise Resource Planning

## Overview

This ongoing project involves rebuilding the frontend of a legacy enterprise resource planning (ERP) system as a React-based management portal. The existing application was built with ASP.NET MVC and jQuery, and the frontend work has required examining its current screens and service contracts because project documentation was not provided.

The work focuses on implementing ERP pages and workflows against the available APIs while coordinating API contract changes with a backend engineer when existing services do not support the required frontend behavior.

---

## Engineering Challenges

- Reconstructing page behavior and integration requirements from a legacy application without a product specification.
- Working with an API surface that initially lacked useful grouping and included endpoints that returned server errors or did not support the needed query parameters and filters.
- Implementing complex ERP forms and workflows while the frontend and backend contracts were being clarified and updated.

---

## My Contributions

- Independently implemented the React frontend for the current set of ERP pages and workflows, using the legacy application and available API behavior to determine requirements.
- Worked with a backend engineer to organize Swagger documentation by ERP module, area, and page, and to establish page keys used by the frontend's route and permission model. Tested the existing services, tracked failures by module in the company's issue tracker, and requested the API contract changes needed by the frontend.
- Simplified form layouts and interaction flows with Ant Design to reduce unnecessary user actions and clicks.
- Set up GitHub Actions CI checks for code quality, unit and API contract tests, production builds, Storybook interactions and accessibility, and Chromium end-to-end scenarios.
- Created project-specific guidance for AI coding assistants, including code and workflow rules, reusable task instructions, and safety and quality hooks.
- Wrote frontend technical documentation and tests.

---

## Technical Highlights

- **Delta-Based Warehouse Assignments:** The warehouse user and item assignment drawers submit only newly added or removed assignment rows, leaving unchanged user and item links out of the request.

- **API Contract Refactoring During Migration:** Identified failing or insufficient legacy API endpoints and coordinated changes to request parameters and filters so the services could support the React pages.

- **Rebuilding from the Existing System:** Derived page requirements and behavior by examining the legacy MVC/jQuery application in the absence of product documentation.

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
