import { useState } from "react";
import { FormProduct } from "./FormProduct/FormProduct";
import { Header } from "./Header/Header";
import { ListProducts } from "./ListProducts/ListProduct";

interface ItemProduct {
  precio: number;
  nombre: string;
  imagen: string;
}

export const AppProduct = () => {
  const [products, setProducts] = useState<ItemProduct[]>([]);

  const handleAddProduct = (product: ItemProduct) => {
    setProducts([...products, product]);
  };
  return (
    <div>
      <Header />
      <h2>Formulario</h2>
      <FormProduct handleAddProduct={handleAddProduct} />
      <h2>Productos</h2>
      {products.length > 0 ? (
        <ListProducts arrItems={products} />
      ) : (
        <h2>No hay productos</h2>
      )}
    </div>
  );
};
