import axiosObject from "../config.service";

export const GetAllArticle = async () => {
  try {
    const uri: string = "article/get-all";
    const response = await axiosObject.get(uri);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
