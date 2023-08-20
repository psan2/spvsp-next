import Link from "next/link";

const NSPLogo = () => {
  return (
    <Link
      href="https://www.nsp.org/"
      className="flex flex-col items-center text-center"
    >
      <img src="NSP_Logo_WhiteCross.jpg" className="h-10" alt="NSP Logo" />
    </Link>
  );
};

export default NSPLogo;
