import React, { useEffect, useState } from 'react';
import { logError } from '../services/logger.service';

const logger = {
  onError: undefined as ((errorInfo: any) => void) | undefined,
  error: (errorInfo: any) => {
    if (logger.onError) {
      logger.onError(errorInfo);
    }
    logError(errorInfo);
  }
};

const ErrorNotification = () => {
  const [errors, setErrors] = useState<Array<{id: string, message: string}>>([]);

  useEffect(() => {
    // Error de prueba
    logger.error(new Error('Este es un error de prueba'));
    
    const errorHandler = (errorInfo: any) => {
      const errorId = Date.now().toString();
      setErrors(prev => [
        ...prev,
        {
          id: errorId,
          message: errorInfo.message || 'Error desconocido'
        }
      ]);
      
      // Eliminar el error después de 10 segundos
      setTimeout(() => {
        setErrors(prev => prev.filter(e => e.id !== errorId));
      }, 10000);
    };

    // Registrar el listener de errores
    logger.onError = errorHandler;

    return () => {
      logger.onError = undefined;
    };
  }, []);

  if (errors.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {errors.map(error => (
        <div key={error.id} className="bg-red-500 text-white px-4 py-2 rounded-md mb-2">
          {error.message}
        </div>
      ))}
    </div>
  );
};

export default ErrorNotification;
