import { join } from 'path';

import { convertFromDirectory } from 'joi-to-typescript';

/**
 * This function converts Joi schemas that validate
 * routes to TypeScript interfaces for a single source of truth
 *
 * Running the command `npm run types` will generate interfaces
 * for any schemas in the target directory
 *
 * https://github.com/mrjono1/joi-to-typescript
 */
(async (): Promise<void> => {
  await convertFromDirectory({
    schemaDirectory: join(__dirname, '../routes/helpers/schemas'),
    typeOutputDirectory: join(__dirname, '../routes/helpers/interfaces'),
    debug: true,
  });
})();