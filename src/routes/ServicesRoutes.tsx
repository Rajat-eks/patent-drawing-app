// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import PageTemplate from "../components/template/PageTemplate";
// import UtilityPatent from "../components/organisms/Services/UtilityPatent";
// import DesignPatent from "../components/organisms/Services/DesignPatent";
// import TrademarkDrawing from "../components/organisms/Services/TrademarkDrawing";
// import ChemicalStructure from "../components/organisms/Services/ChemicalStructure";
// import Modeling from "../components/organisms/Services/3DModelling";
// import PatentDrawing from "../components/organisms/Services/PatentDrawing";
// import ObjectedPatent from "../components/organisms/Services/ObjectedPatent";
// import GraphicService from "../components/organisms/Services/GraphicService";

// interface DashboardRoutesProps {
//   // define props here
// }

// const ServicesRoutes: React.FC<DashboardRoutesProps> = (props) => {
//   interface LINKS {
//     name: string;
//     path: string;
//   }

//   const links: any = [
//     {
//       name: "Utility Patent Drawings",
//       path: "/services/utility-patent-drawings",
//     },
//     {
//       name: "Design Patent Drawings",
//       path: "/services/design-patent-drawings",
//     },
//     {
//       name: "Objected Patent Drawings",
//       path: "/services/objected-patent-drawings",
//     },
//     {
//       name: "Trademark Drawings",
//       path: "/services/trademark-drawings",
//     },
//     {
//       name: "Chemical Structure",
//       path: "/services/chemical-structure-drawings",
//     },
//     {
//       name: "3D modeling",
//       path: "/services/3d-modeling-drawings",
//     },
//     {
//       name: "Trial Graphic Services",
//       path: "/services/trial-graphic-services",
//     },
//   ];
//   return (
//     <PageTemplate links={links} pageName="OUR SERVICES" height="240px">
//       <Routes>
//         <Route path="/utility-patent-drawings" element={<UtilityPatent />} />
//         <Route path="/design-patent-drawings" element={<DesignPatent />} />
//         <Route path="/trademark-drawings" element={<TrademarkDrawing />} />
//         <Route
//           path="/chemical-structure-drawings"
//           element={<ChemicalStructure />}
//         />
//         <Route path="/3d-modeling-drawings" element={<Modeling />} />
//         <Route path="/patent_drawing" element={<PatentDrawing />} />
//         <Route path="/objected-patent-drawings" element={<ObjectedPatent />} />
//         <Route path="/trial-graphic-services" element={<GraphicService />} />
//       </Routes>
//     </PageTemplate>
//   );
// };

// export default ServicesRoutes;
