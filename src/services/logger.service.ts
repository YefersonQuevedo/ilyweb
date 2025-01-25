import fs from 'fs';
import path from 'path';

const logFilePath = path.join(process.cwd(), 'error_logs/error_logs.txt');

export function logError(error: Error | string): void {
  const timestamp = new Date().toISOString();
  const errorMessage = typeof error === 'string' ? error : error.message;
  const stackTrace = typeof error === 'string' ? '' : error.stack || '';
  
  const logEntry = `[${timestamp}] ERROR: ${errorMessage}\n${stackTrace}\n\n`;

  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error('Error escribiendo en el archivo de logs:', {
        message: err.message,
        code: err.code,
        path: logFilePath,
        stack: err.stack
      });
    }
  });
}
