# Location-Based Supermarket Retail Platform

## Overview

This project involved developing a location-based supermarket retail platform for online grocery shopping, customer ordering, delivery coordination, and retail operations.

Beyond offering an online supermarket, the platform unified customer ordering, branch selection, inventory integration, delivery management, and in-store operations within a single retail ecosystem. It was designed to support the complete purchasing journey while providing the operational workflows required to manage day-to-day supermarket activities across multiple branches.

---

## The Problem

A group of independently operated supermarkets wanted to expand beyond traditional phone-based ordering by offering a unified online shopping experience.

Rather than maintaining separate websites for each branch, they needed a single platform where customers could browse products and place orders based on their location, while each supermarket continued serving its own delivery area. The challenge was to present the network as one consistent retail experience without exposing its underlying operational structure to customers.

The project aimed to complement the existing ordering process with an integrated online platform that connected multiple supermarkets through a single customer-facing experience while preserving each branch's independent operations.

---

## Engineering Challenges

- Delivering optimized shopping experiences across desktop browsers and installation-ready mobile PWAs through a shared frontend architecture.
- Reproducing the complete customer purchasing workflow inside the administrative panel to support operator-assisted phone orders.
- Coordinating multiple payment workflows within a single checkout experience, including online payment, wallet, cash, and card reader transactions.

---

## My Contributions

- Designed and implemented an operator-assisted ordering workflow, allowing customer service staff to create phone orders through a dedicated interface while assigning purchases to customer accounts.
- Implemented multiple checkout workflows supporting online payment, wallet, cash, and card reader transactions.

---

## Technical Highlights

- **Location-Based Branch Routing:** Orders were automatically assigned to the nearest eligible supermarket branch based on the customer's active delivery address. When branch service areas overlapped, orders could be routed to another branch, while addresses outside supported delivery zones were rejected.

- **Distance-Based Delivery Pricing:** Delivery costs were calculated using configurable geographic distance ranges, allowing pricing rules to scale consistently across multiple branch service areas without manual intervention.

- **Barcode-Centered Product Catalog:** The platform relied on product barcodes as the shared identifier across all supermarket branches, enabling a unified product catalog while allowing each branch to synchronize its own inventory independently.

---

## Technology Stack

- React
- Redux
- Ant Design
- REST APIs
- Progressive Web App (PWA)
