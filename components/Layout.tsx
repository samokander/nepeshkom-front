import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props: React.PropsWithChildren) {
  return (
    <div className="mx-36 font-raleway">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
