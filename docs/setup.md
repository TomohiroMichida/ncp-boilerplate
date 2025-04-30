## Setup Guide

This repository is provided as a template. You can duplicate it to your own GitHub account and start developing immediately.

### 1. Create a repository from this template

- Click the **"Use this template"** button at the top of the repository page
- On the **"Create a new repository"** screen, enter a name for your new repository and click **"Create repository from template"**

### 2. Clone the newly created repository

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

### 3. Install dependencies

```bash
pnpm install
```

### 4. Prepare environment variables

Copy the `.env.example` file to `.env` in the following locations:

- Project root
- ./src/frontend
- ./src/backend
- ./src/service

```bash
cp .env.example .env
```

### 5. Start Docker containers

```bash
docker-compose up --build
```
