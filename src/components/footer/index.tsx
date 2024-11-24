import { Icon } from "../icon";

const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center p-7 bg-cardBackground mt-8">
      <p className="flex text-xs gap-1">
        <Icon name={"rocket"} /> Built By
        <a
          href={"https://github.com/fadelkaadan"}
          className="border-b-red-100 border-b no-underline"
        >
          Fadel Kaadan
        </a>
      </p>
    </div>
  );
};

export default Footer;
