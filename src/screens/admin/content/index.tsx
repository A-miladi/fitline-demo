import { FC } from "react";
import { AdminAccess } from "..";
import BackgroundEffects from "@/components/BackgroundEffects";
import AdminContent from "./AdminContent";
import SpecialistContent from "./SpecialistContent";

interface IContentProps {
  content: AdminAccess;
  setCurrentContent: (content: AdminAccess) => void;
}
const Content: FC<IContentProps> = ({ content, setCurrentContent }) => {
  const Dashboard = {
    ADMIN: <AdminContent />,
    SPECIALIST: <SpecialistContent />,
    APPOINTMENTS: <p className="text-white">APPOINTMENTS</p>,
  };

  const CurrentContent = Dashboard[content];
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center relative">
      <BackgroundEffects />
      {CurrentContent}
    </div>
  );
};

export default Content;
