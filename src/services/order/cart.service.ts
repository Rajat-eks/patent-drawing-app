import axiosObject from "../config.service";

export const addToCart = async (payload: unknown) => {
  try {
    const uri: string = "order/cart";
    const response = await axiosObject.post(uri, payload);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
