import Product from "@/components/organisms/Product";
import { SERVICE_INTERFACE, serviceData } from "@/data/servicesDetails";
import { buildMeta } from "@/lib/seo";
import type { Metadata } from "next";

type RouteParams = { serviceId: string };

type PageProps = {
  params: Promise<RouteParams>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { serviceId } = await params;
  const data: any = serviceData.find(
    (item: SERVICE_INTERFACE) => item?.id == serviceId
  );
  return buildMeta({
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
    canonical: `${serviceId}`,
  });
}

export default async function Page({ params }: PageProps) {
  const { serviceId } = await params;

  return (
    <main>
      <Product serviceId={serviceId} />
    </main>
  );
}
