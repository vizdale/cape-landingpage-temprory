import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-red flex items-center justify-center py-5">
      <Image
        src="https://res.cloudinary.com/dosjh2min/image/upload/v1685511255/cape_agency/main-logo_rlja6s.svg"
        width={100}
        height={100}
        className="w-[70px] h-[32px] md:w-[87px] md:h-[40px]"
        priority
        alt="main-logo"
        title="cape-agency-logo"
      />
    </nav>
  );
};

export default Navbar;
