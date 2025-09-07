import { useRouter } from "next/navigation";
import { CiLogin } from "react-icons/ci";

export default function LoginAction() {
  const navigate = useRouter();
  return (
    <>
      <button
        onClick={() => navigate.push("/Auth")}
        className="px-4 max-lg:hidden cursor-pointer h-10 hover:to-primary hover:from-secondary transition-colors duration-700 pb-1 bg-gradient-to-tr from-primary rounded-lg to-secondary text-sm font-medium text-white"
      >
        ورود و ثبت نام
      </button>
      <button className="lg:hidden" onClick={() => navigate.push("/Auth")}>
        <CiLogin size={24} />
      </button>
    </>
  );
}
