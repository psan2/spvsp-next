import Link from "next/link";
import { externalURLs } from "../../../constants";

const FacebookLogo = () => {
  return (
    <Link
      href={externalURLs.spvspFacebookPage}
      className="flex gap-2 items-center text-center"
    >
      <p>Find us on</p>
      <img src="Facebook_F_Logo.svg" className="h-10" alt="Facebook F Logo" />
    </Link>
  );
};

export default FacebookLogo;
