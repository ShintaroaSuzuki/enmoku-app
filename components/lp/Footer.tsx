import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-y-2 my-10">
      <Link href="https://nonab.super.site">
        <div className="flex flex-col items-center">
          <Image
            src="/nonab_logo_transparent_gray.png"
            alt="home footer image"
            width={1892 / 24}
            height={566 / 24}
          />
        </div>
      </Link>
      <Link href="https://nonab.super.site">
        <a className="text-neutral-400 text-[9px]">nonab合同会社(予定)</a>
      </Link>
    </footer>
  );
};

export default Footer;
