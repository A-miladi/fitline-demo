import Image from "next/image";

export default function LogoSection() {
  return (
    <div className="text-center mb-4 md:mb-8 flex flex-col items-center justify-center w-full">
      <div className="w-full flex items-center justify-center font-bold text-white mb-2 font-morabba">
        <Image
          src="/images/logo2.png"
          alt=""
          width={150}
          height={200}
          className="md:w-1/2"
        />
      </div>
      <p className="text-blue-200 md:text-xl">
        مرکز تخصصی فیزیوتراپی و توانبخشی
      </p>
    </div>
  );
}
