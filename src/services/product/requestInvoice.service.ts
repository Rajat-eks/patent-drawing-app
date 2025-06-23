import axiosObject from "../config.service";

export const RequestInvoice = async (payload: any) => {
  try {
    const uri: string = "order/requestInvoice";
    const response = await axiosObject.post(uri, payload);
    if (response.status === 201 || response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};
