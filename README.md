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

## 💡 Key Features

- **Monorepo Structure**  
  Manage multiple services (frontend, backend, service) independently while maintaining a single repository for streamlined development.

- **Code Quality Enforcement**  
  Includes ESLint v9, Prettier, Husky, and lint-staged.  
  Lint checks are automatically triggered on commits to ensure code quality before pushing to remote repositories.

- **High Extensibility**  
  Backend and service are implemented with a minimal template approach, making it easy to swap them with frameworks like **Hono**, **Fastify**, or **NestJS**.

## 📜 License

This project is licensed under the MIT License.  
Feel free to use it as a foundation for your own development!

© 2025 TomohiroMichida. All rights reserved.
