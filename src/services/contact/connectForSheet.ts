import axiosObject from "../config.service";

export const RequestForSheet = async (payload: any) => {
  try {
    const uri: string = "contact/sheet-sizes";
    const response = await axiosObject.post(uri, payload);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
export const RequestForUltimateSheet = async (payload: any) => {
  try {
    const uri: string = "contact/ultimate-sheet-sizes";
    const response = await axiosObject.post(uri, payload);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export const RequestForMastering = async (payload: any) => {
  try {
    const uri: string = "contact/master-line-quality";
    const response = await axiosObject.post(uri, payload);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
