import Image from "next/image";
import NotFoundSVG from "../../assets/img/notFoundSVG.svg";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col justify-center items-center pb-10 h-screen ">
      <Image src={NotFoundSVG} alt="Not-found" className=" w-[35%]" />
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-xl font-bold">404 - PAGE NOT FOUND</h1>
        <p className="w-[600px] text-center text-sm font-normal">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <Link
          href={"/"}
          className="bg-customBlue py-2 px-5 rounded text-sm text-red border-red border-[1px] font-semibold hover:text-white hover:bg-red"
        >
          GO TO HOMEPAGE
        </Link>
      </div>
    </main>
  );
}
