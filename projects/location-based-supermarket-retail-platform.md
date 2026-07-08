# Location-Based Supermarket Retail Platform

## Overview

This project focused on developing a location-based supermarket retail platform for online grocery shopping, customer ordering, delivery coordination, and store-side management.

Rather than building a traditional online supermarket, the platform unified customer ordering, branch selection, inventory integration, delivery management, and retail operations into a single system.

The product included customer-facing web and PWA experiences, responsive shopping interfaces, and an administrative panel for managing products, categories, orders, users, couriers, messages, special offers, and platform settings.

---

## The Problem

Before the platform, customer orders were handled primarily over the phone, while branch operations were managed separately through internal retail systems with no unified online experience.

A supermarket retail business needs more than a simple online catalog.

Customers expect to browse products quickly, manage their cart, choose delivery information, track orders, and complete payments through a smooth experience across mobile and desktop devices.

At the same time, the business needs operational tools for inventory-oriented product management, order processing, delivery coordination, customer communication, access control, and commercial campaigns such as special offers.

The challenge was to build a connected retail platform that supported both customer experience and daily operational workflows.

---

## Engineering Challenges

- Building responsive customer-facing shopping experiences across mobile, tablet, laptop, and desktop screens.
- Supporting both SPA and PWA-oriented frontend experiences.
- Integrating the platform with inventory and accounting services.
- Managing shopping cart behavior, product quantities, favorites, customer addresses, and checkout flows.
- Calculating delivery cost based on customer location and selected address.
- Supporting multiple payment methods, including online payment, cash, card reader, and wallet credit.
- Building an administrative panel for products, categories, orders, users, couriers, messages, special offers, and settings.
- Designing role-based access control for operational users in the management panel.

---

## My Contributions

- Developed the frontend applications for the supermarket retail platform.
- Contributed to backend analysis and workflow design where frontend architecture and business processes overlapped.
- Built responsive customer-facing pages for home, categories, product listing, product detail, cart, orders, profile, wallet, favorites, FAQ, and messages.
- Implemented PWA-oriented shopping workflows for mobile users.
- Developed the administrative panel used for managing products, categories, users, orders, phone orders, couriers, messages, special offers, and platform settings.
- Integrated frontend applications with REST APIs for authentication, product data, cart submission, order management, customer information, and platform configuration.
- Implemented address-based checkout behavior, including delivery-cost calculation from customer location data.
- Supported multiple payment workflows, including online gateway redirection, cash, card reader, and wallet-based payment.
- Implemented permission-aware management screens for different operational roles.

---

## Technical Highlights

### Responsive Retail Experience

Developed shopping interfaces that adapted across portrait phones, landscape phones, tablets, laptops, and desktop screens, covering key customer journeys such as browsing, category navigation, product detail, cart, orders, wallet, profile, favorites, authentication, and FAQ pages while preserving consistent shopping workflows.

### Customer Shopping Flow

Implemented the customer purchase flow from product discovery to cart management, address selection, delivery calculation, payment type selection, order submission, and payment gateway redirection when required.

### PWA-Oriented Mobile Experience

Built a mobile-focused experience with install-oriented behavior, mobile navigation patterns, persistent shopping actions, and customer account workflows designed for repeated grocery shopping use.

### Multi-Branch Order Routing

Designed branch-aware ordering behavior so customer location and selected address could guide delivery availability and operational order handling.

### Centralized Product Catalog

Built catalog management around shared product data for supermarket operations.

Product identities were standardized using existing retail barcodes, allowing inventory data to remain consistent across different accounting systems while significantly reducing onboarding effort for new supermarket deployments.

### Business-Oriented Administration

Developed a management panel for daily retail operations, including configurable service radius, branch-specific order management, dynamic operational roles, product and category management, courier management, customer management, messages, special offers, and system settings.

### Location-Based Delivery Logic

Integrated address and map-based workflows to support customer delivery locations, default addresses, latitude and longitude values, and delivery-cost calculation based on the selected address.

### Role-Based Panel Access

Implemented permission-based access control in the administrative panel so operational users could access only the sections and actions relevant to their roles.

---

## Technologies

- React
- Redux
- Ant Design
- PWA
- Leaflet
- Firebase Cloud Messaging
- REST APIs
