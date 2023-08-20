import Link from "next/link";

const SnoqualmiePassLogo = () => {
  return (
    <div className="bg-gray-200 rounded-md mr-4 mb-1">
      <Link href="https://summitatsnoqualmie.com/">
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
