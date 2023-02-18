import About from "@/components/About";
import Advantages from "@/components/Advantages";
import Layout from "@/components/Layout";
import Rent from "@/components/Rent";
import Services from "@/components/Services";

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
