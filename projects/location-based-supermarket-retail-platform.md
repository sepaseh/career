# Location-Based Supermarket Retail Platform

## Overview

This project focused on developing a location-based supermarket retail platform for online grocery shopping, customer ordering, delivery coordination, and store-side management.

The product included customer-facing web and PWA experiences, responsive shopping interfaces, and an administrative panel for managing products, categories, orders, users, couriers, messages, special offers, and platform settings.

---

## The Problem

A supermarket retail business needs more than a simple online catalog.

Customers expect to browse products quickly, manage their cart, choose delivery information, track orders, and complete payments through a smooth experience across mobile and desktop devices.

At the same time, the business needs operational tools for inventory-oriented product management, order processing, delivery coordination, customer communication, access control, and commercial campaigns such as special offers.

The challenge was to build a connected retail platform that supported both customer experience and daily operational workflows.

---

## Engineering Challenges

- Building responsive customer-facing shopping experiences across mobile, tablet, laptop, and desktop screens.
- Supporting both SPA and PWA-oriented frontend experiences.
- Managing shopping cart behavior, product quantities, favorites, customer addresses, and checkout flows.
- Calculating delivery cost based on customer location and selected address.
- Supporting multiple payment methods, including online payment, cash, card reader, and wallet credit.
- Building an administrative panel for products, categories, orders, users, couriers, messages, special offers, and settings.
- Designing role-based access control for operational users in the management panel.
- Supporting Persian-language UI, Jalali dates, and localized retail workflows.

---

## My Contributions

- Developed the frontend applications for the supermarket retail platform.
- Built responsive customer-facing pages for home, categories, product listing, product detail, cart, orders, profile, wallet, favorites, FAQ, and messages.
- Implemented PWA-oriented shopping workflows for mobile users.
- Developed the administrative panel used for managing products, categories, users, orders, phone orders, couriers, messages, special offers, and platform settings.
- Integrated frontend applications with REST APIs for authentication, product data, cart submission, order management, customer information, and platform configuration.
- Implemented address-based checkout behavior, including delivery-cost calculation from customer location data.
- Supported multiple payment workflows, including online gateway redirection, cash, card reader, and wallet-based payment.
- Implemented permission-aware management screens for different operational roles.
- Built Persian, RTL-friendly interfaces using localized resources, Jalali date handling, and custom styling.

---

## Technical Highlights

### Responsive Retail Experience

Developed shopping interfaces that adapted across portrait phones, landscape phones, tablets, laptops, and desktop screens, covering key customer journeys such as browsing, category navigation, product detail, cart, orders, wallet, profile, favorites, authentication, and FAQ pages.

### Customer Shopping Flow

Implemented the customer purchase flow from product discovery to cart management, address selection, delivery calculation, payment type selection, order submission, and payment gateway redirection when required.

### PWA-Oriented Mobile Experience

Built a mobile-focused experience with install-oriented behavior, mobile navigation patterns, persistent shopping actions, and customer account workflows designed for repeated grocery shopping use.

### Administrative Retail Operations

Developed a management panel for daily retail operations, including order processing, phone orders, product and category management, courier management, customer management, messages, special offers, and system settings.

### Location-Based Delivery Logic

Integrated address and map-based workflows to support customer delivery locations, default addresses, latitude and longitude values, and delivery-cost calculation based on the selected address.

### Role-Based Panel Access

Implemented permission-based access control in the administrative panel so operational users could access only the sections and actions relevant to their roles.

---

## Technologies

- React
- JavaScript
- Redux
- React Router
- Ant Design
- LESS
- Axios
- REST APIs
- PWA
- Firebase Messaging
- Leaflet
- React Leaflet
- Moment Jalaali
- React Hook Form
- Swiper
