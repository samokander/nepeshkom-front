import Layout from "@/components/Layout";
import Link from "next/link";
import Booking from "../../components/car/Booking";
import { useRouter } from "next/router";

export default function Car() {
  const router = useRouter();
  const { carId } = router.query;

  return (
    <Layout>
      <nav>
        <Link href="/" className="text-halfblack">
          {"Главная / "}
        </Link>
        <Link href="/" className="text-halfblack">
          {"Автопарк / "}
        </Link>
        <Link href="/car" className="text-white">
          {}
        </Link>
      </nav>
      <Booking carId={carId} />
    </Layout>
  );
}
