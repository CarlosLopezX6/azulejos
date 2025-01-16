import { Footer, Sidebar, TopMenu } from "@/components";


export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">

      <TopMenu />

      <Sidebar />
      
      { children }

      <Footer />
      
    </div>
  );
}