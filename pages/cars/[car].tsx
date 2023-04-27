import Layout from "@/components/Layout";
import Link from "next/link";
import Booking from "../booking";

export default function Car() {
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
      <Booking />
    </Layout>
  );
}
