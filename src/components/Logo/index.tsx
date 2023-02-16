import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 select-none cursor-pointer">
      <Image src="/logo/rose.png" alt="Logo" width={48} height={48} />
      <span className="text-[24px] hover:text-rose-600 transition-colors duration-500">
        Martin Code
      </span>
    </div>
  );
};

export default Logo;
