import { CollectionPage } from "@/domains/catalog/ui/collection-page";
import { getCollectionContent } from "@/domains/catalog/data/catalog-content";

export default function MacetasPage() {
  return <CollectionPage content={getCollectionContent("macetas")} />;
}
