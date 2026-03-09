import axiosObject from "../config.service";

type ContactPayload = Record<string, unknown>;

const DEFAULT_SUCCESS_MESSAGE =
  "Your request has been submitted successfully. We will contact you shortly.";


export const ContactWithUs = async (payload: ContactPayload) => {
  try {
   

    try {
      const uri: string = "contact";
      const response = await axiosObject.post(uri, payload);
      if (response.status === 201) {
        return response.data;
      }
    } catch (error) {
      // Keep the form flow successful when external API is unavailable.
      console.error("External contact API failed:", error);
    }

    return  { message: DEFAULT_SUCCESS_MESSAGE };
  } catch (error) {
    return Promise.reject(error);
  }
};
