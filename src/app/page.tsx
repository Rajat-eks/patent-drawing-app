import NewHome from "@/components/organisms/NewHome";
import { buildMeta } from "@/lib/seo";

export const metadata = buildMeta({
  description:
    "PatDraw, a leading patent drawing services company, delivers expert and mediatory support, ensuring precise and compliant patent illustrations for your inventions.",
  keywords:
    "PatDraw, Patent Drawing Services, Patent Drawing Company, Effectual Patent Drawings, Professional Patent Drawings, Perfect Patent Drawings, Premium Patent Drawings",
  title: "PatDraw | Patent Drawing Services Company",
  canonical: "",
});

export default function page() {
  return (
    <>
      <NewHome />
    </>
  );
}
