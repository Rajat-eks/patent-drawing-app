import axiosObject from "../config.service";

export const CreateOrderPaypal = async (amount: number) => {
  try {
    const uri: string = `order/create-paypal?amount=${amount}`;
    const response = await axiosObject.get(uri);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};