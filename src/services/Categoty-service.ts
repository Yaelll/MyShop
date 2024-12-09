import request from "../utils/axios-interceptors";

const categoriesUrl = "/categories";

export const getCategories = () =>
  request({
    url: categoriesUrl,
  });

export const getCategory = (id: number) =>
  request({
    url: `${categoriesUrl}/${id}`,
  });

