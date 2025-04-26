## About Prisma Model Design

This template provides only the minimal setup required for database operations with Prisma.  
When proceeding with development, please follow the steps below to define models and perform migrations as needed.

1. Define your data models in the `src/service/prisma/schema.prisma` file.
2. After defining your models, run the following commands to apply migrations and generate the Prisma Client.

```bash
cd src/service
pnpm prisma:migrate
pnpm prisma:generate
```

※ Make sure that the PostgreSQL container is running before executing Prisma-related commands.
