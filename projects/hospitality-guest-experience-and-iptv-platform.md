# Hospitality Guest Experience & IPTV Platform

## Overview

This project involved developing a comprehensive hospitality platform that transformed in-room televisions into the primary digital touchpoint for hotel guests.

Beyond delivering IPTV services, the platform unified entertainment, hotel operations, guest services, room automation, and tourism experiences within a single ecosystem. It provided guests with seamless access to virtually every hotel service through a television-optimized interface while supporting a wide range of operating systems and hardware platforms.

---

## The Problem

Hotel guests typically relied on multiple disconnected channels to access services during their stay, including television, printed materials, reception staff, and direct phone calls.

This fragmented experience made it difficult for guests to discover available services, while hotels lacked a unified digital platform for delivering information, entertainment, and hospitality services through a familiar in-room device. Rather than serving as a simple television system, there was an opportunity to transform the guest room into a centralized digital experience.

The project aimed to consolidate guest-facing services into a single platform, enabling hotels to deliver entertainment, operational services, and local information through an integrated in-room experience.

---

## Engineering Challenges

- Supporting resource-constrained television hardware where modern frontend frameworks and animation-heavy interfaces were not practical.
- Building a shared web application experience across multiple television platforms without maintaining separate frontend codebases.
- Supporting multiple television platforms through device-specific key mappings without changing the application logic.
- Designing a dynamic remote-control navigation model that adapted to each hotel's enabled services while maintaining a predictable user experience.
- Preventing guests from leaving the hospitality application on Android-based television devices while preserving a seamless in-room experience.

---

## My Contributions

- Conducted business analysis to translate hotel operational requirements into guest-facing digital experiences.
- Designed a television navigation model inspired by the Windows Modern UI experience, optimized for directional remote-control input.
- Built a configurable cross-platform frontend supporting multiple television platforms, selectable interface themes, and hotel-specific deployments.
- Designed user experiences for hospitality services, room automation, and guest interactions while collaborating on backend API integration.

---

## Technical Highlights

- **Cross-Platform Frontend Architecture:** Built a shared frontend architecture that supported Linux-based set-top boxes, Android set-top boxes, Android TV, LG webOS, and Samsung Tizen devices without maintaining separate codebases.

- **Device Abstraction Layer:** Introduced device-specific key mapping that isolated hardware differences from the application logic, enabling the same interface and navigation model to operate consistently across multiple television platforms.

- **Dynamic Television Navigation:** Designed a configurable navigation model that adapted to each hotel's enabled services while preserving a predictable remote-control experience across different deployments.

- **Custom Android TV Launcher:** Replaced the standard Android TV launcher with a custom launcher that prevented guests from leaving the hospitality environment, allowing the television to operate as a dedicated hospitality device while maintaining a seamless guest experience.

---

## Technology Stack

- Vanilla JavaScript
- HTML5
- CSS3
- Hybrid WebView Architecture
