import axiosObject from "../config.service";

type ContactPayload = Record<string, unknown>;

const DEFAULT_SUCCESS_MESSAGE =
  "Your request has been submitted successfully. We will contact you shortly.";

const sendContactEmail = async (payload: ContactPayload) => {
  const response = await fetch("/api/contact-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    throw new Error(body?.message || "Failed to send contact email.");
  }

  return response.json().catch(() => ({ message: DEFAULT_SUCCESS_MESSAGE }));
};

export const ContactWithUs = async (payload: ContactPayload) => {
  try {
    const emailResponse = await sendContactEmail(payload);

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

    return emailResponse || { message: DEFAULT_SUCCESS_MESSAGE };
  } catch (error) {
    return Promise.reject(error);
  }
};
