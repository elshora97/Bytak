import LoadingCards from "@/components/card/LoadingCards";
import CategoriesList from "@/components/home/CategoriesList";
import PropertiesContainer from "@/components/home/PropertiesContainer";
import { Suspense } from "react";

async function HomePage({
  searchParams,
}: {
  searchParams: { categoty?: string; search?: string };
}) {
  const params = await searchParams;
  return (
    <section>
      <CategoriesList
        category={params?.categoty}
        search={params?.search}
      />
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer
          category={params?.categoty}
          search={params?.search}
        />
      </Suspense>
    </section>
  );
}
export default HomePage;
