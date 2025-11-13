# Prisma Setup Guide

This document will help you get Prisma working on your laptop quickly and efficiently. It covers installation steps, configuration tips, and troubleshooting advice for common issues.

Whether you're new to Prisma or setting up a fresh environment, follow these instructions to streamline your development workflow.

Feel free to add your own notes and solutions as you learn!

## Initializing
Paste this into your terminal with your desired directory name:
```bash
mkdir [YOUR-DIRECTORY] && cd [YOUR-DIRECTORY]
npm init -y
npm i @prisma/client
npm i -D prisma typescript ts-node @types/node
npx tsc --init
npx prisma init
```

## Configure Database URL(s)
The basic `.env` file will have a `DATABASE_URL` variable, set to an example. For Azure SQL, follow the example below to make your connection string - Replace everything in ALL CAPS:
```env
DATABASE_URL="sqlserver://YOURSERVER.database.windows.net;user=USERNAME;password=PASSWORD;database=YOURDATABASE;encrypt=true;trustServerCertificate=true"
```

## File Templates
Paste the following into the appropriate generated files

### tsconfig.json
```
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "moduleResolution": "node",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "types": ["node"],
    "verbatimModuleSyntax": false
  }
}
```

### schema.prisma
```prisma
generator client {
  provider = "prisma-client-js"
  output   = "./generated/prisma"
  binaryTargets = ["native", "linux-arm64-openssl-1.1.x"]
}

datasource db {
  provider = "sqlserver"
  url      = env("DATABASE_URL")
}
```

## Essential Commands
To test the connection to the database run:
```bash
npx prisma db pull
```

To generate new/update prisma models:
```bash
npx prisma generate
```

To see the tables in a helpful browser view:
```bash
npx prisma studio
```

To push schema changes to the database:
```bash
npx prisma db push
```

To create and run migrations:
```bash
npx prisma migrate dev --name init
```

## Troubleshooting

### Common Issues
- **Connection errors**: Double-check your `DATABASE_URL` format and credentials
- **SSL errors**: For Azure SQL, ensure `encrypt=true` and `trustServerCertificate=false`
- **Generation fails**: Run `npx prisma generate` after any schema changes

### Additional Dependencies
You may need to install the following for different project types:

#### Express App
```bash
npm i express cors helmet
npm i --save-dev @types/cors @types/express
```

#### Environment Variables
```bash
npm i dotenv
npm i --save-dev @types/dotenv
```