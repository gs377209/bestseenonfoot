import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 mt-8">
      <div className="flex flex-col items-center py-28 lg:container lg:mx-auto lg:flex-row lg:justify-between  lg:px-5">
        <div className="mb-10 lg:mb-0">
          <h2 className="text-center text-4xl font-bold leading-tight tracking-tighter lg:mb-0 lg:pr-4 lg:text-left">
            Contact Us
          </h2>
          <Link className="underline" href="mailto:bestseenonfoot@gmail.com">
            bestseenonfoot@gmail.com
          </Link>
        </div>
        {/* TODO: email subscribe <h3 className="mb-10 text-center text-4xl font-bold leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left">
            Subscribe to Future Posts!
          </h3> */}
        <div className="text-center">
          <strong>Best Seen On Foot</strong> Copyright &copy; 2016 -{" "}
          {new Date().getFullYear()}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
