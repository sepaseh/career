# Location-Based Supermarket Retail Platform

## Overview

This project focused on developing a location-based supermarket retail platform for online grocery shopping, customer ordering, delivery coordination, and store-side management.

Rather than building a traditional online supermarket, the platform unified customer ordering, branch selection, inventory integration, delivery management, and retail operations into a single system.

---

## The Problem

Before the platform, customer orders were handled primarily over the phone, while branch operations were managed separately through internal retail systems with no unified online experience.

A supermarket retail business needs more than a simple online catalog.

Customers expect to browse products quickly, manage their cart, choose delivery information, track orders, and complete payments through a smooth experience across mobile and desktop devices.

At the same time, the business needs operational tools for inventory-oriented product management, order processing, delivery coordination, customer communication, access control, and commercial campaigns such as special offers.

The goal was to build a connected retail platform that supported both customer experience and day-to-day retail operations.

---

## Engineering Challenges

- Building responsive customer-facing shopping experiences across mobile, tablet, laptop, and desktop screens.
- Coordinating complex shopping workflows across product discovery, cart management, checkout, and order tracking.
- Reproducing the customer purchasing workflow inside the administrative panel to support operator-assisted phone orders.

---

## My Contributions

- Developed the frontend applications for both the customer-facing platform and the administrative panel.
- Contributed to backend analysis and workflow design where frontend architecture and business processes overlapped.
- Implemented customer-facing shopping features across the complete purchasing journey, from product discovery to order completion.
- Built an operator-assisted ordering workflow that enabled customer service staff to create and manage phone orders through the administrative panel using the same purchasing process as online customers.
- Developed administrative interfaces supporting day-to-day retail operations across order management, customer services, and platform administration.
- Implemented multiple payment workflows, including online gateway, cash, card reader, and wallet-based payments.

---

## Technical Highlights

- **Location-Based Branch Routing:** Orders were automatically assigned to the nearest eligible supermarket branch based on the customer's active delivery address. When branch service areas overlapped, orders could be routed to another branch, while addresses outside supported delivery zones were rejected.

- **Distance-Based Delivery Pricing:** Delivery costs were calculated using configurable geographic distance ranges, allowing pricing rules to scale consistently across multiple branch service areas without manual intervention.

- **Barcode-Centered Product Catalog:** The platform relied on product barcodes as the shared identifier across all supermarket branches, enabling a unified product catalog while allowing each branch to synchronize its own inventory independently.

- **Adaptive Shopping Experience:** A shared frontend architecture delivered interfaces optimized for different devices, providing a traditional desktop shopping experience alongside an installation-ready Progressive Web App (PWA) tailored for frequent mobile purchases.

---

## Technology Stack

- React
- TypeScript
- Redux
- Ant Design
- Firebase Cloud Messaging (FCM)
- Progressive Web App (PWA)
- REST APIs
