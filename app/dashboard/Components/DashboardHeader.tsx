import React from "react";
type DashboardHeaderProps = {
  title: string;
};
const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title }) => {
  return (
    <div className="w-full p-4 rounded-md bg-blue-950">
      <h3 className="text-white"> {title}</h3>
    </div>
  );
};

export default DashboardHeader;
