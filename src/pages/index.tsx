import Layout from "@/components/Layout";
import SalesOverview from "@/components/SalesOverView";
import ListingOverview from "@/components/ListingOverView";


export default function Home() {
  return (
   <main className="p-6">
      <h1 className="font-bold text-2xl mb-4">Welcome, Ahmed</h1>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="xl:col-span-8">
          <SalesOverview />
        </div>
        <div className="xl:col-span-4">
          <ListingOverview />
        </div>
      </div>
    </main>
  );
}
