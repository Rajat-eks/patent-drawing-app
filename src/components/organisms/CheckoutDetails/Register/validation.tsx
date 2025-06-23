import * as Yup from "yup";

export interface I_INITIALVALUES {
    firstName: string;
    lastName: string;
    phone: string;
    countryCode: string;
    email: string;
    company: string;
    country: string;
    companyType: string;
  }
export const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(
      /^(\+?\d{1,4}[\s-])?(\(?\d{3}\)?[\s-]?)\d{3}[\s-]?\d{4}$/,
      "Phone number is not valid"
    ),
  countryCode: Yup.string().required("Country Code is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  company: Yup.string().required("Company is required"),
  country: Yup.string().required("Country is required"),
  companyType: Yup.string().required("Company Type is required"),
});
