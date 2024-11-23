import { ICON, Icon } from "../icons";

const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center p-5 bg-[#131313] mt-8">
      <p className="flex text-xs gap-1">
        <Icon name={ICON.ROCKET} size={{ width: 14, height: 14 }} /> Built By
        <a href={"https://github.com/fadelkaadan"} className="underline">
          Fadel Kaadan
        </a>
      </p>
    </div>
  );
};

export default Footer;
