# Utiliser une image de base officielle de Node.js
FROM node:18-alpine AS base

# Installer les dépendances seulement quand c'est nécessaire
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copier package.json et pnpm-lock.yaml
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm i --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Copier les fichiers de polices et autres fichiers publics
COPY public /app/public

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

# Ajouter l'utilisateur nextjs
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copier les fichiers nécessaires depuis l'étape de construction
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
