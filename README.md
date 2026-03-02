# NestJS Notification Gateway 🚀

_🇧🇷 [Ler em Português](README-PTBR.md)_

[![NestJS](https://img.shields.io/badge/framework-NestJS-E0234E?logo=nestjs)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/language-TypeScript-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Jest](https://img.shields.io/badge/testing-Jest-C21325?logo=jest)](https://jestjs.io/)

A provider-agnostic notification service built with **NestJS**. This project demonstrates high-level software engineering patterns to decouple business logic from external communication providers (Email, SMS, etc.).

## 🎯 Architectural Goal

The primary goal of this gateway is to adhere strictly to the **SOLID** principles, specifically the **Open/Closed Principle**. Adding a new notification provider (e.g., WhatsApp, Push, Slack) requires **zero changes** to the existing Controllers or Core Logic.

## 🏗️ Design Patterns Implemented

### 1. Strategy Pattern

All notification methods implement the `INotificationStrategy` interface. This ensures a consistent contract across the application, allowing the system to treat all providers polymorphically.

### 2. Factory Pattern

The `NotificationFactory` centralizes the instantiation logic. It resolves the correct strategy at runtime based on the request type, abstracting the complexity away from the REST layer.

### 3. Dependency Injection (DI)

Leverages NestJS's IoC container to manage the lifecycle of strategies and inject them into the Factory, ensuring the system is modular and highly testable.

## 🛠️ Tech Stack

- **Framework:** NestJS (Node.js)
- **Language:** TypeScript
- **Validation:** Class-validator & Class-transformer
- **Testing:** Jest (Unit & E2E)
- **API Client:** Supertest

## 🚦 Getting Started

### Installation

```bash
npm install
```

### Running the app

```bash
# development
npm run start:dev
```

### Testing

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## 🧪 API Usage

**Endpoint:** `POST /notifications`

**Payload:**

```json
{
  "type": "email",
  "to": "gabriel@mukai.com",
  "message": "Hello from NestJS Gateway!"
}
```

## 🚀 Future Improvements (Roadmap)

As a **Principal Engineer**, I've designed this architecture to be ready for the next scale levels:

1.  **Asynchronous Processing (BullMQ/Redis):** Offload notification sending to background workers to prevent API latency.
2.  **Resilience Patterns:** Implement **Circuit Breaker** and **Retry Logic** (using `rxjs` or `backoff`) for external provider failures.
3.  **Persistence Layer:** Add a database (PostgreSQL/MongoDB) to track notification status and history.
4.  **Provider Failover:** Automatically switch to a secondary provider if the primary one is down.
5.  **Template Engine:** Integrate with Handlebars or EJS to support rich HTML emails.

---

Developed by [Gabriel Mukai](https://github.com/GabrielMarussi)
