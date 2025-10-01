# ---- Base ----
    FROM node:20-slim AS base
    WORKDIR /app

    # Install dependencies required for native modules
    RUN apt-get update && apt-get install -y \
        python3 \
        make \
        g++ \
        && rm -rf /var/lib/apt/lists/*
    
    # ---- Dependencies ----
    FROM base AS deps
    COPY package*.json ./
    # Install all dependencies including devDependencies
    RUN npm install --include=dev
    
    # ---- Builder ----
    FROM base AS builder
    ENV NEXT_TELEMETRY_DISABLED 1
    ENV NODE_ENV=production
    
    # Copy package files and dependencies
    COPY --from=deps /app/node_modules ./node_modules
    
    # Copy the rest of the application
    COPY . .
    
    # Build the application
    RUN npm run build
    
    # Prune dev dependencies after build
    RUN npm prune --omit=dev --production
    
    # ---- Runner ----
    FROM base AS runner
    ENV NODE_ENV=production
    ENV NEXT_TELEMETRY_DISABLED 1
    COPY --from=builder /app/public ./public
    COPY --from=builder /app/.next ./.next
    COPY --from=builder /app/node_modules ./node_modules
    COPY --from=builder /app/package.json ./package.json
    
    EXPOSE 9002
    ENV PORT 9002
    
    CMD ["npm", "start", "--", "-p", "9002"]
    