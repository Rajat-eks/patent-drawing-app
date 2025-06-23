import { ReactNode } from "react";
import PageLayout from "../pageLayout";

interface DashboardRoutesProps {
  children: ReactNode;
}

const ServiceLayout: React.FC<DashboardRoutesProps> = ({ children }) => {
  interface LINKS {
    name: string;
    path: string;
  }

  const links: any = [
    {
      name: "Utility Patent Drawings",
      path: "/services/utility-patent-drawings",
    },
    {
      name: "Design Patent Drawings",
      path: "/services/design-patent-drawings",
    },
    {
      name: "Objected Patent Drawings",
      path: "/services/objected-patent-drawings",
    },
    {
      name: "Trademark Drawings",
      path: "/services/trademark-drawings",
    },
    {
      name: "Chemical Structure",
      path: "/services/chemical-structure-drawings",
    },
    {
      name: "3D modeling",
      path: "/services/3d-modeling-drawings",
    },
    {
      name: "Trial Graphic Services",
      path: "/services/trial-graphic-services",
    },
  ];
  return (
    <PageLayout links={links} pageName="OUR SERVICES" height="240px">
      {children}
    </PageLayout>
  );
};

export default ServiceLayout;
