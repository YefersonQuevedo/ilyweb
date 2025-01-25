from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="easyerp"
    )

@app.route('/api/products', methods=['GET'])
def obtener_productos():
    try:
        conexion = get_db_connection()
        cursor = conexion.cursor(dictionary=True)
        
        cursor.execute("SELECT * FROM producto")
        productos = cursor.fetchall()
        
        cursor.close()
        conexion.close()
        
        return jsonify(productos)
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
