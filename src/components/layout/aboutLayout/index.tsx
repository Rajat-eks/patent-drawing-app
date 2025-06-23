import { ReactNode } from "react";
import PageLayout from "../pageLayout";

interface DashboardRoutesProps {
  children: ReactNode;
}
const links: any = [
  {
    name: "Our Company",
    path: "/our-company",
  },
  {
    name: "Mission & Vision",
    path: "/our-mission",
  },
  {
    name: "Leadership Team",
    path: "/leadership-team",
  },
  {
    name: "Awards & Recoginitions",
    path: "/awards-recoginitions",
  },

  {
    name: "Our Engagement Models",
    path: "/our-engagement-model",
  },
];
const AboutLayout: React.FC<DashboardRoutesProps> = ({ children }) => {
  interface LINKS {
    name: string;
    path: string;
  }

  interface IndexProps {}

  return (
    <PageLayout links={links} pageName="ABOUT US">
      {children}
    </PageLayout>
  );
};

export default AboutLayout;
