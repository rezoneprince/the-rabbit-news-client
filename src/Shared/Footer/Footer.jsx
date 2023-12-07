import React from "react";

const Footer = () => {
  const copyright = String.fromCodePoint(0x00a9);
  return (
    <div>
      <p className="text-center">{`${copyright}`} All Rights Reserved</p>
    </div>
  );
};

export default Footer;
