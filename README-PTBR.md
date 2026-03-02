# NestJS Notification Gateway 🚀

*🇺🇸 [Read in English](README.md)*

[![NestJS](https://img.shields.io/badge/framework-NestJS-E0234E?logo=nestjs)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/language-TypeScript-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Jest](https://img.shields.io/badge/testing-Jest-C21325?logo=jest)](https://jestjs.io/)

Um serviço de notificação agnóstico a provedor construído com **NestJS**. Este projeto demonstra padrões de engenharia de software de alto nível para desacoplar a regra de negócio dos provedores de comunicação externos (E-mail, SMS, etc.).

## 🎯 Objetivo Arquitetural

O objetivo principal deste gateway é aderir estritamente aos princípios **SOLID**, especificamente ao **Open/Closed Principle (Princípio do Aberto/Fechado)**. Adicionar um novo provedor de notificação (ex: WhatsApp, Push, Slack) requer **zero alterações** nos Controllers ou na Lógica Core existente.

## 🏗️ Padrões de Projeto (Design Patterns) Implementados

### 1. Strategy Pattern
Todos os métodos de notificação implementam a interface `INotificationStrategy`. Isso garante um contrato consistente em toda a aplicação, permitindo que o sistema trate todos os provedores de forma polimórfica.

### 2. Factory Pattern
A `NotificationFactory` centraliza a lógica de instanciação. Ela resolve a estratégia correta em tempo de execução com base no tipo de requisição, abstraindo a complexidade da camada REST.

### 3. Injeção de Dependência (DI)
Utiliza o poderoso container IoC do NestJS para gerenciar o ciclo de vida das estratégias e injetá-las na Factory, garantindo que o sistema seja modular e altamente testável.

## 🛠️ Stack Tecnológica

- **Framework:** NestJS (Node.js)
- **Linguagem:** TypeScript
- **Validação:** Class-validator & Class-transformer
- **Testes:** Jest (Unitários & E2E)
- **API Client:** Supertest

## 🚦 Como Executar

### Instalação
```bash
npm install
```

### Rodando a aplicação
```bash
# desenvolvimento
npm run start:dev
```

### Testes
```bash
# testes unitários
npm run test

# testes e2e
npm run test:e2e

# cobertura de testes (coverage)
npm run test:cov
```

## 🧪 Uso da API

**Endpoint:** `POST /notifications`

**Payload:**
```json
{
  "type": "email",
  "to": "gabriel@mukai.com",
  "message": "Olá do NestJS Gateway!"
}
```

## 🚀 Melhorias Futuras (Roadmap)

Como um **Principal Engineer**, projetei esta arquitetura para estar pronta para os próximos níveis de escala:

1.  **Processamento Assíncrono (BullMQ/Redis):** Delegar o envio de notificações para workers em background para evitar latência na API.
2.  **Padrões de Resiliência:** Implementar **Circuit Breaker** e **Retry Logic** (usando `rxjs` ou `backoff`) para lidar com falhas de provedores externos.
3.  **Camada de Persistência:** Adicionar um banco de dados (PostgreSQL/MongoDB) para rastrear o status e o histórico das notificações.
4.  **Failover de Provedor:** Alternar automaticamente para um provedor secundário se o principal estiver fora do ar.
5.  **Template Engine:** Integrar com Handlebars ou EJS para suportar e-mails HTML ricos.

---
Desenvolvido por [Gabriel Mukai](https://github.com/GabrielMarussi)
