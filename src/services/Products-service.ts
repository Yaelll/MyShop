import request from "../utils/axios-interceptors";

const productsUrl = "/products";

export const getProducts = () =>
  request({
    url: productsUrl,
  });

export const getProduct = (id: number) =>
  request({
    url: `${productsUrl}/${id}`,
  });

export const getProductsByCategory = (categoryName: string) =>
  request({
    url: `${productsUrl}/categoty/${categoryName}`,
  });
