> 🇯🇵 日本語版READMEはこちら → [README.ja.md](./README.ja.md)

# NCP Boilerplate

NCP Boilerplate is a monorepo-based microservices development template built with Next.js, Chakra UI, Prisma, and PostgreSQL.  
It focuses on development efficiency and scalability, providing a foundation designed for seamless framework replacement and smooth migration to production environments.

## 📚 Documentation

- [Setup Guide](./docs/setup.md)
- [Prisma Model Design Guide](./docs/prisma.md)

## 🛠️ Project Architecture (Docker Containers + Ports + Protocols)

Each service is managed as an independent Docker container.

- The frontend sends HTTP requests to the backend (Express API server) and handles responses.
- The backend communicates with the service (Prisma ORM service) via HTTP to delegate database operations.
- The service directly interacts with the PostgreSQL database through Prisma for data read/write operations.
- All containers communicate internally over a Docker network.

```
+-------------------------------------------------+
| [Container] frontend (Next.js + Chakra UI)      |
| - Port: 3000                                    |
+-------------------------------------------------+
⇅ (HTTP)
+-------------------------------------------------+
| [Container] backend (Express API server)        |
| - Port: 4000                                    |
+-------------------------------------------------+
⇅ (HTTP)
+-------------------------------------------------+
| [Container] service (Prisma ORM service)        |
| - Port: 5000                                    |
+-------------------------------------------------+
⇅ (PostgreSQL Protocol)
+-------------------------------------------------+
| [Container] postgres (PostgreSQL database)      |
| - Port: 5432                                    |
+-------------------------------------------------+
```

## 🚀 Technologies Used

- **frontend** : Next.js, Chakra UI
- **backend** : Express
- **service** : Prisma (ORM)
- **database** : PostgreSQL

## Features

- **Monorepo Structure**

  - Designed to manage each service (frontend / backend / service) independently within a single repository.  
    Combines the efficiency of monorepo management with the flexibility of a microservices architecture.

- **Dependency Management with pnpm Workspaces**

  - All service dependencies are centrally managed using pnpm workspaces.  
    This enables smoother and faster development, build, and deployment processes, providing a scalable structure.

- **Code Quality Management**

  - Integrated with ESLint v9, Prettier, Husky, and lint-staged to automatically trigger lint checks **before commits**.  
    Potential issues are detected before pushing to remote repositories, maintaining consistently high code quality.

- **High Extensibility**

  - Backend and service layers are built with a super minimal setup, including only the essential features.  
    Designed to allow easy replacement with frameworks like **Hono**, **Fastify**, or **NestJS** if needed.

- **Seamless Transition to Production Environments**
  - Designed to easily switch between development and production environments.  
    `.env` management and Docker containerization enable a smooth workflow from local development to production release.

## 📜 License

This project is licensed under the MIT License.  
Feel free to use it as a foundation for your own development!

© 2025 TomohiroMichida. All rights reserved.
