import UtilityDrawing1 from "../components/assets/img/Samples/Utility Drawings/UD1.jpg";
import UtilityDrawing2 from "../components/assets/img/Samples/Utility Drawings/UD2.jpg";

import DesignDrawing1 from "../components/assets/img/Samples/Design Drawings/DD1.jpg";
import DesignDrawing2 from "../components/assets/img/Samples/Design Drawings/DD2.jpg";

import PatentDrawing1 from "../components/assets/img/Samples/Objected Patent Drawings/OPT1.jpg";
import PatentDrawing2 from "../components/assets/img/Samples/Objected Patent Drawings/OPT2.jpg";

import TrademarkDrawing1 from "../components/assets/img/Samples/Trademark Design/TM1.jpg";
import TrademarkDrawing2 from "../components/assets/img/Samples/Trademark Design/TM2.jpg";

import Other1 from "../components/assets/img/Samples/other/3DModelling.png";
import Other2 from "../components/assets/img/Samples/other/Chemical Structure.png";
import Other3 from "../components/assets/img/Samples/other/Trial Graphics.png";

export interface SERVICE_INTERFACE {
  id: string;
  name: string;
  path: string;
  details: string;
  price: number;
  strikePrice: number;
  samples: any[];
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

export const serviceData: SERVICE_INTERFACE[] = [
  {
    path: "1",
    id: "utility-patent-drawings",
    name: "Utility Patent Drawings",
    details: `Get Professional Utility Patent Drawing for just $28 per sheet! Our high-quality drawings can help
you secure your Utility Patent Drawing. Buy now to take advantage of this exclusive discounted price!`,
    price: 28,
    strikePrice: 39,
    samples: [UtilityDrawing1, UtilityDrawing2],
    seo: {
      title: "Utility Patent Drawings Cost | $28 Per Sheet Pricing",
      description:
        "Order online utility patent drawings starting at $28 per sheet, ensuring high-quality, accurate drawings to secure your utility patent quickly and affordably.",
      keywords: "Order Online Utility Patent Drawings",
    },
  },
  {
    path: " 2",
    id: "design-patent-drawings",
    name: "Design Patent Drawings",
    details: `Get Professional Design Patent Drawing for just $28 per sheet! Our high-quality drawings can help
you secure your Design Patent Drawing. Buy now to take advantage of this exclusive discounted price!`,
    price: 28,
    strikePrice: 49,
    samples: [DesignDrawing1, DesignDrawing2],
    seo: {
      title: "Design Patent Drawings Cost | $28 Per Sheet Pricing",
      description:
        "Order online design patent drawings starting at $28 per sheet; secure your design with our high-quality, affordable drawings, and buy now for exclusive pricing.",
      keywords: "Order Online Design Patent Drawings",
    },
  },
  {
    path: "3",
    id: "objected-patent-drawings",
    name: "Objected Patent Drawings",
    details: `Get Professional Objected Patent Drawing for just $28 per sheet! Our high-quality drawings can help
you secure your Objected Patent Drawing. Buy now to take advantage of this exclusive discounted price!`,
    price: 28,
    strikePrice: 39,
    samples: [PatentDrawing1, PatentDrawing2],
    seo: {
      title: "Objected Patent Drawings Cost | $28 Per Sheet Pricing",
      description:
        "Resolve rejections fast: Order online objected patent drawings for $28/sheet and ensure USPTO compliance with our expert, affordable service.",
      keywords: "Order Online Objected Patent Drawings",
    },
  },
  {
    path: "4",
    id: "trademark-drawings",
    name: "Trademark Drawings",
    details: `Get Professional Trademark Drawings for just $55 per sheet! Our high-quality drawings can help
you secure your Trademark Drawing. Buy now to take advantage of this exclusive discounted price!`,
    price: 55,
    strikePrice: 59,
    samples: [TrademarkDrawing1, TrademarkDrawing2],
    seo: {
      title: "Order Online Trademark Drawings",
      description:
        "Order online trademark drawings for only $55 per sheet and secure your brand with our professional, high-quality, mediatory services.",
      keywords: "Order Online Trademark Drawings",
    },
  },
  {
    path: "5",
    id: "chemical-structure-drawings",
    name: "Chemical Structure Drawings",
    details: `Get Professional Chemical Structure Drawings, Our high-quality drawings can help
you secure your Chemical Structure. Buy now to take advantage of this exclusive discounted price!`,
    price: 0,
    strikePrice: 59,
    samples: [Other2],
    seo: {
      title: "Order Online Chemical Structure Drawings",
      description:
        "Order online chemical structure drawings quickly and easily, with our expert service providing accurate, high-quality visuals to support your research and patents.",
      keywords: "Order Online Chemical Structure Drawings",
    },
  },
  {
    path: "6",
    id: "3d-modeling-drawings",
    name: "3D modeling Drawings",
    details: `Get Professional 3D modeling Drawings, Our high-quality drawings can help
you secure your 3D modeling. Buy now to take advantage of this exclusive discounted price!`,
    price: 0,
    strikePrice: 59,
    samples: [Other1],
    seo: {
      title: "Order Online 3D Modeling Drawings",
      description:
        "Order online 3D modeling drawings with our mediatory services, ensuring professional, high-quality visuals to bring your designs to life effortlessly.",
      keywords: "Order Online 3D Modeling Drawings",
    },
  },
  {
    path: "7",
    id: "trial-graphic-services",
    name: "Trial Graphic Services ",
    details: `Get Professional Trial Graphic Service, Our high-quality drawings can help
you secure your Utility Patent Drawings. Buy now to take advantage of this exclusive discounted price!`,
    price: 0,
    strikePrice: 59,
    samples: [Other3],
    seo: {
      title: "Order Online Trial Graphics",
      description:
        "Order online trial graphics easily and effectively, enhancing your mediatory presentations with impactful visuals, designed for clarity and persuasion.",
      keywords: "Order Online Trial Graphics",
    },
  },
];
