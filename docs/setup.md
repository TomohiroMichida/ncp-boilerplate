## Setup Guide

### 1. Clone the repository

```bash
git clone https://github.com/TomohiroMichida/ncp-boilerplate.git
cd ncp-boilerplate
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Prepare environment variables

Copy the `.env.example` file to `.env` in the following locations:

- Project root
- ./src/frontend
- ./src/backend
- ./src/service

```bash
cp .env.example .env
```

### 4. Start Docker containers

```bash
docker-compose up --build
```
