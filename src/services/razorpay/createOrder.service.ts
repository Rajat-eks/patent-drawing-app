import axiosObject from "../config.service";

export const CreateOrder = async (amount: number) => {
  try {
    const uri: string = `order/create-razorpay-order?amount=${amount}`;
    const response = await axiosObject.get(uri);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};
