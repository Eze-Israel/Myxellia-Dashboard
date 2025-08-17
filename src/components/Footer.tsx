import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="w-full bg-black text-white text-center py-4 mt-8 text-sm">
      © {new Date().getFullYear()} myxellia. All rights reserved.
    </footer>
  );
};

export default Footer;
