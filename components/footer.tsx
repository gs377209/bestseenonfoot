import Container from "./container";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <Container>
        <div className="flex flex-col items-center py-28 lg:flex-row">
          <div className="mb-10">
            <h2 className="text-center text-4xl font-bold leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left lg:text-[2.5rem]">
              Contact Us
            </h2>
            <a className="underline" href="mailto:bestseenonfoot@gmail.com">
              bestseenonfoot@gmail.com
            </a>
          </div>
          {/* TODO: email subscribe <h3 className="mb-10 text-center text-4xl font-bold leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left lg:text-[2.5rem]">
            Subscribe to Future Posts!
          </h3> */}
          <div className="flex flex-col items-center justify-center lg:w-1/2 lg:flex-row lg:pl-4">
            <strong>Best Seen On Foot</strong> Copyright &copy; 2016 -{" "}
            {new Date().getFullYear()}. All Rights Reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
