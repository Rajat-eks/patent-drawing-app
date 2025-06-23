import axiosObject from "../config.service";

export const VerifyPayment = async (
  razorpay_payment_id: string,
  razorpay_order_id: string,
  razorpay_signature: string
) => {
  try {
    const uri: string = "invoice/verify-payment";
    const response = await axiosObject.post(uri, {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};
