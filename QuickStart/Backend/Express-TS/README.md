# Express + TypeScript + Prisma Template

This is a **working template** for an Express.js backend with TypeScript and Prisma ORM.

## What's Included

- Complete TypeScript configuration  
- ESLint setup with TypeScript support  
- Prisma ORM with example schema  
- Winston logger configuration  
- Clean architecture (Controllers → Services → Database)  
- Global error handling  
- Security middleware (Helmet, CORS)  
- Example CRUD operations  
- Development tooling (nodemon)  

## Quick Start

1. **Copy this entire folder** to your new project location
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up environment**:
   ```bash
   cp .env.example .env
   # Edit .env with your database connection string
   ```
4. **Update Prisma schema**:
   - Edit `prisma/schema.prisma` with your models
5. **Generate Prisma Client & Migrate**:
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```
6. **Run development server**:
   ```bash
   npm run dev
   ```

## File Structure

- **`src/server.ts`** - Main application entry point
- **`src/logger.ts`** - Winston logger configuration
- **`src/prisma/client.ts`** - Prisma client singleton
- **`src/controllers/`** - Request handlers
- **`src/services/`** - Business logic
- **`src/routes/`** - API route definitions
- **`src/middleware/`** - Custom middleware (error handling, etc.)
- **`prisma/schema.prisma`** - Database schema

## Customization

1. Replace the example User/Post models in `schema.prisma`
2. Update controllers, services, and routes for your domain
3. Add authentication if needed (JWT, sessions, etc.)
4. Add validation (consider using `zod` or `joi`)
5. Add testing (Jest recommended)

## Learn More

See the parent [Express-TS.md](../Express-TS.md) file for detailed documentation on:
- Dependencies explained
- Architecture patterns
- Best practices
- Additional resources
