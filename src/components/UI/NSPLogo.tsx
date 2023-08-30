import Link from "next/link";
import { externalURLs } from "../../../constants";

const NSPLogo = () => {
  return (
    <Link
      href={externalURLs.nationalSkiPatrol}
      className="flex flex-col items-center text-center"
    >
      <img src="NSP_Logo_WhiteCross.jpg" className="h-10" alt="NSP Logo" />
    </Link>
  );
};

export default NSPLogo;
