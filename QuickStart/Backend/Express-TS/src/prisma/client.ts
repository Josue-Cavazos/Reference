import { PrismaClient } from '@prisma/client';
import { PrismaMssql } from '@prisma/adapter-mssql';
import logger from '../logger';

// Validate DATABASE_URL environment variable
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error('DATABASE_URL environment variable is not set.');
}

// Singleton pattern for Prisma Client
class DatabaseClient {
  private static instance: PrismaClient | null = null;

  private constructor() {}

  public static getInstance(): PrismaClient {
    if (!DatabaseClient.instance) {
      // Create MSSQL adapter
      const adapter = new PrismaMssql(databaseUrl);

      // Initialize Prisma Client with MSSQL adapter
      DatabaseClient.instance = new PrismaClient({
        adapter,
        log: [
          { emit: 'event', level: 'query' },
          { emit: 'event', level: 'error' },
          { emit: 'event', level: 'info' },
          { emit: 'event', level: 'warn' },
        ],
      });

      // Log Prisma queries in development
      if (process.env.NODE_ENV === 'development') {
        DatabaseClient.instance.$on('query', (e) => {
          logger.debug(`Query: ${e.query}`);
          logger.debug(`Params: ${e.params}`);
          logger.debug(`Duration: ${e.duration}ms`);
        });
      }

      // Log Prisma errors
      DatabaseClient.instance.$on('error', (e) => {
        logger.error(`Prisma Error: ${e.message}`);
      });

      logger.info('Database connection initialized');
    }

    return DatabaseClient.instance;
  }

  public static async disconnect(): Promise<void> {
    if (DatabaseClient.instance) {
      await DatabaseClient.instance.$disconnect();
      DatabaseClient.instance = null;
      logger.info('Database connection closed');
    }
  }
}

// Export the singleton instance
export const prisma = DatabaseClient.getInstance();
export default DatabaseClient;
