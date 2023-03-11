import Layout from "@/components/Layout";
import Path from "@/components/Path";
import Faq from "@/components/terms/FAQ";
import Minimal from "@/components/terms/Minimal";
import Time from "@/components/terms/Time";

export default function Terms() {
  return (
    <Layout>
      <Path pageName="Условия аренды" pathTo="/terms" />
      <Minimal />
      <Time />
      <Faq />
    </Layout>
  );
}
