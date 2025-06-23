import axiosObject from "../config.service";

export const ContactWithUs = async (payload: any) => {
  try {
    const uri: string = "contact";
    const response = await axiosObject.post(uri, payload);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
