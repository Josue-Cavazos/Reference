# Express + TypeScript + Prisma Backend

A production-ready backend setup using Express.js with TypeScript, Prisma ORM for database management, and enterprise-grade security, logging, and error handling.

## What You'll Build

A scalable REST API backend with:
- **Type-safe** TypeScript throughout
- **Database ORM** with Prisma (supports PostgreSQL, MySQL, SQL Server, SQLite)
- **Security** with Helmet and CORS
- **Logging** with Winston
- **Clean Architecture** with controllers, services, routes, and middleware
- **Development Tools** with ESLint, nodemon, and hot reload

## Quick Start

```bash
mkdir backend && cd backend
npm init -y
npm i @prisma/client express cors helmet winston dotenv
npm i -D prisma typescript ts-node @types/node @prisma/adapter-mssql @types/tedious eslint @eslint/js typescript-eslint eslint-config-prettier globals nodemon prettier @types/cors @types/express @types/winston @types/dotenv
npx tsc --init
npx prisma init
```

## Project Structure

```
backend/
├── src/
│   ├── controllers/       # Request handlers
│   │   └── example.controller.ts
│   ├── routes/           # API route definitions
│   │   └── example.routes.ts
│   ├── services/         # Business logic
│   │   └── example.service.ts
│   ├── middleware/       # Custom middleware
│   │   ├── auth.middleware.ts
│   │   └── error.handler.ts
│   ├── prisma/          # Prisma client instance
│   │   └── client.ts
│   ├── logger.ts        # Winston logger configuration
│   └── server.ts        # Application entry point
├── prisma/
│   ├── schema.prisma    # Database schema
│   └── migrations/      # Database migrations (auto-generated)
├── .env                 # Environment variables (DO NOT COMMIT)
├── .env.example         # Environment template
├── .prettierrc          # Prettier formatting configuration
├── .prettierignore      # Files to exclude from formatting
├── nodemon.json         # Nodemon configuration
├── tsconfig.json        # TypeScript configuration
├── eslint.config.mjs    # ESLint configuration
├── prisma.config.ts     # Prisma configuration
├── package.json
└── .gitignore
```

## Dependencies Explained

### Core Framework
- **express** - Fast, minimalist web framework for Node.js. Handles HTTP requests, routing, and middleware.
- **typescript** - Adds static typing to JavaScript, catching errors at compile time and improving code quality.

### Database & ORM
- **@prisma/client** - Auto-generated type-safe database client based on your schema.
- **prisma** - Next-generation ORM for TypeScript/Node.js. Simplifies database migrations and queries.
- **@prisma/adapter-mssql** - Adapter for connecting Prisma to Microsoft SQL Server databases.

### Security
- **cors** - Middleware to enable Cross-Origin Resource Sharing, controlling which domains can access your API.
- **helmet** - Secures Express apps by setting various HTTP headers (XSS protection, content security policy, etc.).
- **dotenv** - Loads environment variables from .env files, keeping secrets out of your code.

### Logging
- **winston** - Flexible logging library with support for multiple transports (file, console, external services).

### Development Tools
- **ts-node** - Runs TypeScript directly in Node.js without pre-compilation, essential for development.
- **nodemon** - Auto-restarts your server when file changes are detected, speeding up development.
- **eslint** - Linting tool to enforce code quality and style standards.
- **@eslint/js** & **globals** - ESLint configuration and global variable definitions.
- **typescript-eslint** - TypeScript-specific ESLint rules and parser.
- **prettier** - Opinionated code formatter for consistent style across the entire codebase.
- **eslint-config-prettier** - Disables ESLint formatting rules that conflict with Prettier.

### TypeScript Type Definitions
These provide TypeScript type information for JavaScript libraries:
- **@types/node** - Node.js core modules
- **@types/tedious** - TDS protocol (used by SQL Server adapter)
- **@types/cors** - CORS middleware
- **@types/express** - Express framework
- **@types/winston** - Winston logger
- **@types/dotenv** - Dotenv configuration

---

## Configuration Files

### TypeScript Configuration
See [tsconfig.json](Express-TS/tsconfig.json) for the complete TypeScript compiler configuration.

Key settings:
- Target: ES2022
- Module: CommonJS
- Strict type checking enabled
- Output directory: `./dist`

### ESLint Configuration  
See [eslint.config.mjs](Express-TS/eslint.config.mjs) for linting rules.

Configured to work with Prettier - ESLint handles code quality, Prettier handles formatting.

### Prettier Configuration
See [.prettierrc](Express-TS/.prettierrc) for code formatting rules.

Key settings:
- Single quotes
- Semicolons required
- 100 character line width
- 2-space indentation

### Prisma Configuration
See [prisma.config.ts](Express-TS/prisma.config.ts) for Prisma setup with environment variables.

### Environment Variables
Create a `.env` file in your project root:
```env
DATABASE_URL="sqlserver://localhost:1433;database=mydb;user=sa;password=YourPassword;encrypt=true;trustServerCertificate=true"
PORT=3000
NODE_ENV=development
```

---

## Starter Code

### Main Server ([server.ts](Express-TS/src/server.ts))
The application entry point that sets up Express, middleware, and routes.

### Logger ([logger.ts](Express-TS/src/logger.ts))
Winston logger configured for console and file output with different log levels.

### Database Client ([prisma/client.ts](Express-TS/src/prisma/client.ts))
Singleton Prisma client instance for database operations.

### Example Architecture
- **Controller** ([exampleController.ts](Express-TS/src/controllers/exampleController.ts)) - Handles HTTP requests
- **Service** ([exampleService.ts](Express-TS/src/services/exampleService.ts)) - Business logic layer
- **Routes** ([exampleRoutes.ts](Express-TS/src/routes/exampleRoutes.ts)) - API endpoint definitions
- **Middleware** ([errorHandler.ts](Express-TS/src/middleware/errorHandler.ts)) - Global error handling

### Prisma Schema ([schema.prisma](Express-TS/prisma/schema.prisma))
Example database schema with SQL Server configuration.

---

## Running the Application

### Development Mode
```bash
npm run dev
```

Add this script to your `package.json`:
```json
{
  "scripts": {
    "dev": "nodemon --exec ts-node src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "lint": "eslint . --ext .ts",
    "lint:fix": "eslint . --ext .ts --fix",
    "format": "prettier --write \"src/**/*.{ts,json}\"",
    "format:check": "prettier --check \"src/**/*.{ts,json}\"",
    "prisma:generate": "prisma generate",
    "prisma:migrate": "prisma migrate dev",
    "prisma:studio": "prisma studio"
  }
}
```

### Code Quality
```bash
# Check code formatting
npm run format:check

# Auto-fix code formatting
npm run format

# Lint for errors
npm run lint

# Auto-fix linting issues
npm run lint:fix
```

### Database Setup
```bash
# Generate Prisma Client
npm run prisma:generate

# Create and run migrations
npm run prisma:migrate

# Open Prisma Studio (GUI for your database)
npm run prisma:studio
```

---

## Next Steps

1. **Define your schema** - Edit `prisma/schema.prisma` with your data models
2. **Run migration** - `npm run prisma:migrate` to create database tables
3. **Build your API** - Add controllers, services, and routes following the example pattern
4. **Add authentication** - Consider adding JWT or session-based auth
5. **Add validation** - Use libraries like `zod` or `joi` for request validation
6. **Add testing** - Set up Jest for unit and integration tests

---

## Additional Resources

- [Express Documentation](https://expressjs.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Prisma Guides](https://www.prisma.io/docs/)
- [Winston Logging](https://github.com/winstonjs/winston)