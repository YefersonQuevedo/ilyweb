# Proyecto Web con React y Tailwind CSS

Este proyecto es una aplicación web moderna creada utilizando:

- **Frontend**: React + TypeScript + Vite
- **Estilos**: Tailwind CSS
- **Backend**: Python (Flask)
- **Base de datos**: MySQL

## Características principales

- Interfaz de usuario moderna y responsiva
- Búsqueda de productos
- Sistema de notificaciones de errores
- Integración con base de datos MySQL
- API REST con Python Flask

## Estructura del proyecto

```
.
├── backend/            # Código del servidor Python
│   ├── app.py          # Aplicación Flask principal
│   └── requirements.txt
├── src/                # Código fuente del frontend
│   ├── components/     # Componentes React
│   ├── services/       # Servicios y API calls
│   ├── types/          # Definiciones TypeScript
│   ├── App.tsx         # Componente principal
│   └── main.tsx        # Punto de entrada
├── public/             # Assets estáticos
├── package.json        # Dependencias frontend
├── vite.config.js      # Configuración Vite
└── tailwind.config.js  # Configuración Tailwind
```

## Cómo ejecutar el proyecto

### Requisitos previos

- Node.js (v18+)
- Python (3.9+)
- MySQL

### Frontend

1. Instalar dependencias:

    ```bash
    npm install
    ```

2. Iniciar servidor de desarrollo:

    ```bash
    npm run dev
    ```

3. Abrir en el navegador: `http://localhost:5173`

### Backend

1. Crear entorno virtual:

    ```bash
    python -m venv venv
    ```

2. Activar entorno virtual:

    - Windows: `venv\Scripts\activate`
    - Linux/Mac: `source venv/bin/activate`

3. Instalar dependencias:

    ```bash
    pip install -r backend/requirements.txt
    ```

4. Configurar base de datos en `db.config.js`

5. Iniciar servidor:

    ```bash
    python backend/app.py
    ```

## Configuraciones adicionales

- **Variables de entorno**: Crear archivo `.env` en la raíz del proyecto
- **Linter**: ESLint y Prettier configurados
- **Formato**: Ejecutar `npm run format` para formatear código

## Contribución

1. Haz un fork del proyecto
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`)
3. Haz commit de tus cambios (`git commit -m 'Añade nueva funcionalidad'`)
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)
