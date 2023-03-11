import About from "@/components/index/About";
import Advantages from "@/components/index/Advantages";
import Layout from "@/components/Layout";
import Rent from "@/components/index/Rent";
import Services from "@/components/index/Services";

export default function Home() {
  return (
    <Layout>
      <Rent />
      <Advantages />
      <Services />
      <About />
    </Layout>
  );
}
