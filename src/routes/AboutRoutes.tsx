// import React from "react";
// import PageTemplate from "../components/template/PageTemplate";
// import { OurMission, OurCompany } from "../components/organisms/AboutUs";
// import Awards from "../components/organisms/AboutUs/Awards";
// import LeadershipTeam from "../components/organisms/AboutUs/LeadershipTeam";
// import EngagemmentModel from "../components/organisms/AboutUs/EngagementModel";

// interface DashboardRoutesProps {
//   // define props here
// }

// const AboutRoutes: React.FC<DashboardRoutesProps> = (props) => {
//   interface LINKS {
//     name: string;
//     path: string;
//   }

//   interface IndexProps {}

//   const links: any = [
//     {
//       name: "Our Company",
//       path: "/our-company",
//     },
//     {
//       name: "Mission & Vision",
//       path: "/our-mission",
//     },
//     {
//       name: "Leadership Team",
//       path: "/leadership-team",
//     },
//     {
//       name: "Awards & Recoginitions",
//       path: "/awards-recoginitions",
//     },

//     {
//       name: "Our Engagement Models",
//       path: "/our-engagement-model",
//     },
//   ];
//   return (
//     <PageTemplate links={links} pageName="ABOUT US">
//       <Routes>
//         <Route path="/our-mission" element={<OurMission />} />
//         <Route path="/leadership-team" element={<LeadershipTeam />} />
//         <Route path="/our-company" element={<OurCompany />} />
//         <Route path="/our_company" element={<OurCompany />} />
//         <Route path="/awards-recoginitions" element={<Awards />} />
//         <Route path="/our-engagement-model" element={<EngagemmentModel />} />
//       </Routes>
//     </PageTemplate>
//   );
// };

// export default AboutRoutes;
