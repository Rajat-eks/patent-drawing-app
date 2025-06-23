import axiosObject from "../config.service";

export const CreateInvoiceOrder = async (values: any) => {
  try {
    const uri: string = "invoice/pay-invoice";
    const response = await axiosObject.post(uri,values);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};
