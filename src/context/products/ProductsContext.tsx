import { CameraCapturedPicture } from "expo-camera";
import React, { createContext, useEffect, useState } from "react";
import productsApi from "../../api/productsApi";
import { Producto, ProductsResponse } from "../../interface/productsInterfaces";

type ProductsContextProps = {
  products: Producto[];
  loadProducts: () => Promise<void>;
  addProduct: (categoryId: string, productName: string) => Promise<Producto>;
  updateProduct: (
    categoryId: string,
    productName: string,
    productId: string
  ) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  loadProductById: (id: string) => Promise<Producto>;
  uploadImage: (data: any, id: string) => Promise<void>; //todo: cambiar any
};

export const ProductsContext = createContext({} as ProductsContextProps);

export const ProductsProvider = ({ children }: any) => {
  const [products, setProducts] = useState<Producto[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const { data } = await productsApi.get<ProductsResponse>(
      "productos?limite=10"
    );

    setProducts([...data.productos]);
  };

  const addProduct = async (
    categoryId: string,
    productName: string
  ): Promise<Producto> => {
    const { data } = await productsApi.post<Producto>("/productos", {
      nombre: productName,
      categoria: categoryId,
    });
    setProducts([...products, data]);
    return data;
  };

  const updateProduct = async (
    categoryId: string,
    productName: string,
    productId: string
  ) => {
    const { data } = await productsApi.put<Producto>(
      `/productos/${productId}`,
      {
        nombre: productName,
        categoria: categoryId,
      }
    );

    setProducts(products.map((p) => (p._id === productId ? data : p)));
  };

  const deleteProduct = async (id: string) => {};

  const loadProductById = async (id: string): Promise<Producto> => {
    const { data } = await productsApi.get(`/productos/${id}`);
    return data;
  };

  const uploadImage = async (
    file: CameraCapturedPicture,
    productId: string
  ) => {
    console.log("size: ", file.base64?.length);
    try {
      const resp = await productsApi.put(`/uploads/productos/${productId}`, {
        archivo: `data:image/jpg;base64,${file.base64}`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        loadProducts,
        addProduct,
        updateProduct,
        deleteProduct,
        loadProductById,
        uploadImage,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
