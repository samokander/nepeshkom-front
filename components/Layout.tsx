import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props: React.PropsWithChildren) {
  return (
    <div className="flex w-full justify-center">
      <div className="w-[1180px] font-raleway">
        <Header />
        <main>{props.children}</main>
        <Footer />
      </div>
    </div>
  );
}
