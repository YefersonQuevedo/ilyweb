const API_URL = 'http://localhost:5000/api';

const searchProducts = async (searchTerm) => {
  try {
    const response = await fetch(`${API_URL}/productos`);
    if (!response.ok) {
      throw new Error('Error al obtener productos');
    }
    const productos = await response.json();
    
    // Filtrar localmente por el término de búsqueda
    return productos.filter(producto => 
      producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  } catch (error) {
    console.error('Error en searchProducts:', error);
    throw new Error('Error al buscar productos');
  }
};

const getDepartamentos = async () => {
  try {
    const response = await fetch(`${API_URL}/productos`);
    if (!response.ok) {
      throw new Error('Error al obtener productos');
    }
    const productos = await response.json();
    
    // Obtener departamentos únicos
    const departamentos = [...new Set(
      productos.map(p => p.departamento_nombre)
    )];
    return departamentos;
  } catch (error) {
    console.error('Error en getDepartamentos:', error);
    throw new Error('Error al obtener departamentos');
  }
};

module.exports = {
  searchProducts,
  getDepartamentos
};
