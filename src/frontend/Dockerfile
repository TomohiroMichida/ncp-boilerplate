FROM node:20-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

CMD ["pnpm", "dev"]