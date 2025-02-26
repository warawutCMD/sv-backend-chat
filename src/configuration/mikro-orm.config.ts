import * as fs from 'fs';
import * as path from 'path';
import config from '../configuration'; // หรือ path ที่ถูกต้อง
import readlineSync from 'readline-sync';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Options } from '@mikro-orm/core';
import { MySqlDriver } from '@mikro-orm/mysql';
import * as dotenv from 'dotenv';
dotenv.config(); // โหลดไฟล์ .env ใน root ของโปรเจค

const migrationsPath = path.join(__dirname, '../migrations');
const seedersPath = path.join(__dirname, '../seeders');
/**
 * Asks the user for a short description and increments a counter.
 * Generates file names that follow the following naming structure.
 *
 * `0012-short-description-from-user-input`
 */
const descriptionFileName = (timestamp: string) => {
  const DELIMITER = '-';

  // Get the last migration
  const lastFileName = fs.readdirSync(migrationsPath).pop();
  let counter = 1;

  if (lastFileName && !lastFileName.includes('snapshot')) {
    // Increment the counter based on the last migration
    counter = parseInt(lastFileName.split(DELIMITER)[0], 10) + 1;
  }
  // Ask user for a short description (keep asking until you get something or they quit with ctrl+c)
  let name = '';
  while (!name) {
    name = readlineSync
      .question(
        "\nWhat does this migration do? (Keep it short, it's going in the file name)\n> ",
      )
      .replace(/[^\w\s]/gi, '') // Remove any non-alphanumeric or whitespace characters
      .replace(/\s+/gi, DELIMITER) // Replace any number of whitespace characters with the delimiter
      .toLowerCase();
  }

  // New line to find question in logs easier

  return `${counter.toString().padStart(4, '0')}-${name}-${timestamp}`;
};

console.log('config databaseSQL : ', config().databaseSQL);

export default {
  ...config().databaseSQL,
  driver: MySqlDriver,
  cache: { enabled: false },
  forceUtcTimezone: false,
  highlighter: new SqlHighlighter(),
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  metadataProvider: TsMorphMetadataProvider,
  migrations: {
    path: migrationsPath,
    glob: '!(*.d).{js,ts}',
    fileName: (timestamp) => descriptionFileName(timestamp),
  },
  seeder: {
    path: seedersPath,
    glob: '!(*.d).{js,ts}',
  },
} as Options;
