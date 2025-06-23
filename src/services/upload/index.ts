import axiosObject from "../config.service";

export const uploadFile = async (files: FileList) => {
  try {
    const formData = new FormData();

    // Use map to append files directly to FormData
    Array.from(files).map((file) => {
      formData.append("files", file); // Append each file to the FormData object
    });

    // The API endpoint for file uploads
    const uri: string = `upload`;

    const response = await axiosObject.post(uri, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Explicitly set multipart/form-data
      },
    });

    if (response.status === 200) {
      return response.data; // Handle successful response
    }
  } catch (error: any) {
    console.error("Error uploading files:", error);
    throw new Error(error?.response?.data?.message || "File upload failed"); // More specific error messages
  }
};
