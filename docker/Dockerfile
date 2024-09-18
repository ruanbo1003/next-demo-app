FROM node:22-alpine AS base

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install -g pnpm
RUN pnpm install

ADD . .

EXPOSE 3000

CMD ["pnpm", "dev"]
