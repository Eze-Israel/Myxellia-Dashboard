import Layout from "@/components/Layout";
import SalesOverview from "@/components/SalesOverView";
import ListingOverView from "@/components/ListingOverView";


export default function Home() {
  return (
    <Layout>
      <div>
      <SalesOverview />
      <ListingOverView/>
      </div>
    </Layout>
  );
}
