import axiosObject from "../config.service";

export const PaymentCompletionViaRazorpay = async (payload: any) => {
  try {
    const uri: string = "order/payment-razorpay";
    const response = await axiosObject.post(uri, payload);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};
