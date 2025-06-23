import axiosObject from "../config.service";

export const GetArticleBySlug = async (slug: string) => {
  try {
    const uri: string = `article/get-by-slug/${slug}`;
    const response = await axiosObject.get(uri);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
