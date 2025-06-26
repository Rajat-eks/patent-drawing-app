import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import { getCountry, getCountryCode } from "@/utils/helper";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { ADDITEM } from "@/store";
import Link from "next/link";
import { addToCart } from "@/services/order/cart.service";
import { uploadFile } from "@/services/upload";
import { DiVim } from "react-icons/di";

const outputFormat = [
  { label: "PDF", value: "PDF" },
  { label: "VSD (Visio)", value: "VSD" },
  { label: "CDR", value: "CDR" },
  { label: "JPEG", value: "JPEG" },
  { label: "PNG", value: "PNG" },
  { label: "Docx (MS Word)", value: "Docx" },
  { label: "PPT (MS Powerpoint)", value: "PPT" },
  { label: "DWG", value: "DWG" },
  { label: "IGES", value: "IGES" },
  { label: "CAT", value: "CAT" },
  { label: "CAD", value: "CAD" },
  { label: "SLD", value: "SLD" },
  { label: "AI", value: "AI" },
  { label: "ASM", value: "ASM" },
  { label: "STL", value: "STL" },
  { label: "EASM", value: "EASM" },
  { label: "STEP", value: "STEP" },
  { label: "Others/More than 1", value: "OTHERS/MORE THAN 1" },
];

const patentDrawings = [
  { label: "US", value: "US" },
  { label: "EP", value: "EP" },
  { label: "WIPO", value: "WIPO" },
  { label: "CA", value: "CA" },
  { label: "UK", value: "UK" },
  { label: "JP", value: "JP" },
  { label: "KR", value: "KR" },
  { label: "AU", value: "AU" },
  { label: "DE", value: "DE" },
  { label: "IL", value: "IL" },
  { label: "SG", value: "SG" },
  { label: "Other", value: "Other" },
];

const OrderForm = ({ serviceId, service }: any) => {
  const navigate = useRouter();
  const dispatch = useDispatch();
  const [countOfItem, setCountOfItem] = useState<number>(1);
  const [files, setFiles] = useState<File[]>([]);

  //ADD ITEM IN CART
  const addItemHandler = () => {};

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      company: "",
      phone: "",
      email: "",
      country: "",
      format: "",
      hearAbout: "",
      ndaSigned: "",
      patentOffice: "",
      docket: "",
      filingDate: "",
      additionalInfo: "",
      countryCode: "",
    },

    onSubmit: async (values) => {
      try {
        const uploadFiles = await uploadFile(files);

        const response = await addToCart({
          ...values,
          phone: values.countryCode + values.phone,
          files: uploadFiles?.data,
          quantity: countOfItem,
          amount: service?.price,
          serviceName: service?.name,
        });

        dispatch(
          ADDITEM({
            itemId: serviceId,
            quantity: countOfItem,
            ...values,
            files: uploadFiles?.data,
            amount: service?.price,
            serviceName: service?.name,
          })
        );
        navigate.push("/cart");
        window.scrollTo({ top: 0, behavior: "smooth" });
        toast.success("Item added Successfully!");
      } catch (error) {
        throw new Error("Error When Submit");
      }
    },
  });
  console.log("for", formik.values);
  return (
    <section className="p-5">
      <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-5">
        <Input
          placeholder="First Name"
          required
          {...formik.getFieldProps("firstName")}
        />
        <Input
          placeholder="Last Name"
          required
          {...formik.getFieldProps("lastName")}
        />
        <Select
          placeholder="Select Country Code"
          options={getCountryCode()}
          {...formik.getFieldProps("countryCode")}
        />
        <Input
          placeholder="Phone Number"
          required
          {...formik.getFieldProps("phone")}
        />
        <Input
          placeholder="Company Name"
          required
          {...formik.getFieldProps("company")}
        />
        <Input
          placeholder="Email"
          required
          {...formik.getFieldProps("email")}
        />

        <Select
          placeholder="Please Select Country"
          required
          options={getCountry()}
          {...formik.getFieldProps("country")}
        />
        <Select
          placeholder="Select Output Format"
          required
          options={outputFormat}
          {...formik.getFieldProps("format")}
        />

        <Select
          placeholder="Already/Previously Signed NDA with us"
          options={[
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" },
          ]}
          {...formik.getFieldProps("ndaSigned")}
        />

        <Select
          placeholder="Select the patent office"
          options={patentDrawings}
          {...formik.getFieldProps("patentOffice")}
        />
        {formik.values.ndaSigned == "No" && (
          <div className="col-span-2 text-[14px] text-gray-700">
            <p>
              Your project details are important to us. To protect your
              confidential information, we require all clients to complete a
              Non-Disclosure Agreement (NDA) prior to sharing project
              specifications.
            </p>
            <br />
            <p className="">
              <input type="checkbox" className="cursor-pointer" />{" "}
              <b>
                <Link href={"/non-disclosure-agreement"} target="_blank">
                  I agree to the confidentiality terms.
                </Link>
              </b>{" "}
              By selecting this checkbox, I acknowledge that: 1) I have reviewed
              and accept the terms of the [Non-Disclosure Agreement], 2) I
              understand this agreement becomes effective upon form submission,
              and 3) The contact information I provide in the billing section is
              accurate and complete.
            </p>
          </div>
        )}
        <div className="col-span-2">
          <Input
            placeholder="Docket Reference Number"
            required
            {...formik.getFieldProps("docket")}
          />
        </div>

        <div className="col-span-2">
          <TextArea
            placeholder="Application filing date, if any"
            note="(This would help to keep the record and to ensure the availability of the draftsperson.)"
            {...formik.getFieldProps("filingDate")}
          />
        </div>

        <div className="col-span-2">
          <TextArea
            placeholder="If you have Additional Information, please share it here."
            note={``}
            {...formik.getFieldProps("additionalInfo")}
          />
        </div>
        <div className="col-span-2">
          <FileUpload files={files} setFiles={setFiles} />
        </div>

        <section className="w-full col-span-2">
          <p className="w-full text-[13px] text-red ">
            Please enter the number of sheets you require and click "Add to
            Cart." Please note that the cost of patent drawings may vary with
            the final sheet count, as per Patent Office standards.
          </p>
          <div className="flex items-center gap-10 py-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="text-3xl "
                onClick={() => setCountOfItem(countOfItem - 1)}
              >
                -
              </button>
              <input
                type="text"
                value={countOfItem}
                disabled
                onChange={(e: any) => setCountOfItem(Number(e.target.value))}
                className="py-[1px] px-[2px] text-center rounded border-2 w-10 border-blue font-semibold"
              />
              <button
                className="text-2xl "
                type="button"
                onClick={() => setCountOfItem(countOfItem + 1)}
              >
                +
              </button>
            </div>
            {service?.price !== 0 ? (
              <button
                onClick={() => addItemHandler()}
                type="submit"
                // disabled={!isAgreementSigned ? true : false}
                className="text-white py-[6px] font-semibold  text-[14px] bg-red rounded px-[10px] disabled:cursor-not-allowed cursor-pointer"
              >
                Add to Cart
              </button>
            ) : (
              <Link
                href={"/contact-us"}
                className="text-white py-[6px] font-semibold  text-[14px] bg-red rounded px-[10px] disabled:cursor-not-allowed"
              >
                Order Now
              </Link>
            )}
          </div>
        </section>
      </form>
    </section>
  );
};

export default OrderForm;

const Input = ({ name, placeholder, required, ...props }: any) => (
  <div className="flex flex-col text-[14px] text-gray-800">
    <label htmlFor="">
      {placeholder} {required && <span className="text-red font-bold">*</span>}
    </label>
    <input
      name={name}
      required={required}
      // placeholder={placeholder}
      {...props}
      className="border border-[#083B95] rounded p-[6px] w-full text-gray-700 text-[16px] focus:outline-red"
    />
  </div>
);

interface SearchableSelectProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** list of {label,value} items */
  options: any[];
  /** placeholder + visual label */
  placeholder?: string;
  /** show * if required (Formik validation still lives in your schema) */
  required?: boolean;
}

const Select: React.FC<SearchableSelectProps> = ({
  name = "",
  value = "",
  onChange,
  onBlur,
  placeholder = "Select…",
  options,
  required = false,
  ...rest
}) => {
  /* local ui state */
  const [query, setQuery]   = useState("");
  const [open, setOpen]     = useState(false);
  const [highlight, setHi]  = useState(0);

  /* sync search box with incoming value (Formik) */
  useEffect(() => {
    const opt = options.find((o) => o.value === value);
    setQuery(opt?.label ?? "");
  }, [value, options]);

  /* filter list */
  const shown = options.filter((o) =>
    o.label.toLowerCase().includes(query.toLowerCase())
  );

  /* send Formik-compatible change event */
  const fireChange = (val: string) => {
    if (onChange) {
      const fake = {
        target: { name, value: val },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      onChange(fake);
    }
  };

  /* pick option */
  const pick = (opt: any) => {
    fireChange(opt.value);
    setQuery(opt.label);
    setOpen(false);
  };

  /* keyboard nav */
  const keyNav: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (!open && ["ArrowDown", "ArrowUp"].includes(e.key)) setOpen(true);

    if (e.key === "ArrowDown" && shown.length) {
      e.preventDefault();
      setHi((h) => (h + 1) % shown.length);
    } else if (e.key === "ArrowUp" && shown.length) {
      e.preventDefault();
      setHi((h) => (h - 1 + shown.length) % shown.length);
    } else if (e.key === "Enter" && open && shown.length) {
      e.preventDefault();
      pick(shown[highlight]);
    }
  };

  /* close on outside click */
  const wrap = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const close = (evt: MouseEvent) => {
      if (!wrap.current?.contains(evt.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={wrap} className="relative flex flex-col text-sm text-gray-800">
      <label className="mb-1">
        {placeholder}
        {required && <span className="text-red-600 font-bold ml-0.5">*</span>}
      </label>

      {/* visible search box */}
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onFocus={() => setOpen(true)}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
          setHi(0);
        }}
        onKeyDown={keyNav}
        onBlur={onBlur}
        autoComplete="off"
        className="border border-[#083B95] rounded p-2 w-full text-base text-gray-700 focus:outline-red"
        required={required && !value}
        {...rest}
      />

      {/* dropdown */}
      {open && (
        <ul className="absolute z-20 mt-16 max-h-48 w-full overflow-y-auto rounded border border-gray-300 bg-white shadow">
          {shown.length ? (
            shown.map((opt, i) => (
              <li
                key={opt.value}
                onMouseDown={() => pick(opt)}
                className={`cursor-pointer p-2 ${
                  i === highlight ? "bg-blue-100" : "hover:bg-blue-50"
                }`}
              >
                {opt.label}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No options found</li>
          )}
        </ul>
      )}
    </div>
  );
};

const TextArea = ({ name, placeholder, note, required, ...props }: any) => (
  <div className="flex flex-col text-[14px] text-gray-800">
    <label htmlFor="">
      {placeholder} {required && <span className="text-red font-bold">*</span>}
    </label>
    {note && (
      <span className="pb-[1px] pl-[2px] text-[12px] text-red">{note}</span>
    )}
    <textarea
      name={name}
      // placeholder={placeholder}
      required={required}
      {...props}
      className="border border-[#083B95] rounded p-[6px] w-full text-gray-700 text-[16px] focus:outline-red"
    />
  </div>
);

const FileUpload = ({ files, setFiles }: any) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFiles([...files, uploadedFile]);
    }
  };

  const removeHandler = (id: number) => {
    setFiles([...files.filter((_: any, index: number) => index + 1 != id)]);
  };

  return (
    <div className="w-full mx-auto mt-4">
      <label htmlFor="" className="text-gray-700 text-[14px] font-semibold">
        Upload Files
      </label>
      <label
        htmlFor="file-upload"
        className="block w-full cursor-pointer rounded-lg border-2 border-dashed border-gray-300 bg-white p-6 text-center text-gray-500 hover:border-blue-500 hover:bg-blue-50 transition"
      >
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16v-8m0 0L8 12m4-4l4 4m1 4a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="mt-2 text-sm">Click to upload or drag and drop</p>
        <p className="text-xs text-gray-400">PNG, JPG, PDF, etc.</p>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {files.length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          <strong>Selected file :</strong>{" "}
          {files?.length > 0 && (
            <div className="mt-6 border-t pt-4">
              <ul className="space-y-2">
                {files.map((file: any, index: number) => (
                  <li
                    key={index}
                    className=" relative grid grid-cols-3 items-center justify-between rounded border p-3 text-sm bg-gray-50 shadow-sm"
                  >
                    <span
                      onClick={() => removeHandler(index + 1)}
                      className="absolute top-0 right-1  h-4 w-4 cursor-pointer text-red pt-1"
                    >
                      X
                    </span>
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-gray-500 text-xs">
                        {(file.size / 1024).toFixed(2)} KB •{" "}
                        {file.type || "Unknown type"}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
