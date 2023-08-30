import Link from "next/link";
import { externalURLs } from "../../../constants";

const SnoqualmiePassLogo = () => {
  return (
    <div className="bg-gray-200 rounded-md mr-4 mb-1">
      <Link href={externalURLs.summitAtSnoqualmie}>
        <img
          src="Logo-Summit.svg"
          className="h-6 m-1"
          alt="Summit at Snoqualmie Logo"
        />
      </Link>
    </div>
  );
};

export default SnoqualmiePassLogo;
