import Container from "./container";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <Container>
        <div className="flex flex-col items-center py-28 lg:flex-row">
          <h3 className="mb-10 text-center text-4xl font-bold leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left lg:text-[2.5rem]">
            A travel blog
          </h3>
          <div className="flex flex-col items-center justify-center lg:w-1/2 lg:flex-row lg:pl-4">
            Copyright &copy; 2016 - 2022 <b>Best Seen On Foot</b> All Rights
            Reserved
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
