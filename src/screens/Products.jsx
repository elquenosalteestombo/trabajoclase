/* 
-useState([])-> aqui guardaremos los productos
-useEffect([])-> se ejecuta una sola vez al cargar la pagina
-fetch(url)-> llama a la api
-.then()-> se convierte la respuesta a json
-setProducts(data)-> guarda los productos en el estado
*/
import { useState, useEffect } from "react";
export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);


  return (
    <div className="pt-32 px-6">
      <h1 className="text-3xl font-bold mb-6">Productos</h1>
      {/*  GRID RESPONSIVE*/ }
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div 
         key = {product.id}
         className="bg-white shadow rounder-xl p-4 hover:shadow-lg" 
          >
          <img src ={product.image} 
          alt={product.title}
          className="w-full h-48 object-contain mb-4" />
          <h3 className="text-blue-600 font-bold mt-2">{product.title} - {product.category}</h3>
            <p className="text-gray-600 mt-2 line-clamp-2">{product.description}</p>
            puntuacion: {product.rating.rate} ({product.rating.count}  puntuaciones)
            
          <p className="font-semibold mt-3 line-clamp-2">${product.price}{<button className="ml-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Comprar</button>}</p>

          </div>


        ))}
      </div>
    </div>
  );
}
/*
  -map recorre el arreglo de productos 
  -cada producto se pinta dentro de una carpeta 
  -grid-cols-1 /sm /md  Crean un diseñi responsive 
  -line-camp-2 corta textos muy largos ->Ver mas leer mas 
  -gap agrega  espacios a sus hijos 
  -object-contain mantiene la proporción de la imagen


*/