import express from 'express';
import mysql from 'mysql2/promise';
import dbConfig from './db.config.js';

const app = express();
const port = 3001;

const pool = mysql.createPool(dbConfig);

app.get('/api/products', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM producto');
    const products = rows.map(producto => ({
      id: producto.id,
      name: producto.nombre,
      price: producto.precio_venta,
      image: producto.imagen || 'https://placehold.co/200x150',
      categoryId: producto.categoria_id
    }));
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Error fetching products' });
  }
});

app.get('/api/categories', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT nombre as name, descripcion as description FROM departamento');
    const categories = rows.map(departamento => ({
      name: departamento.name,
      description: departamento.description,
      image: null
    }));
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Error fetching categories' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
