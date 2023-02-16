import React from "react";
import Header from "./Header";

export default function Layout(props: React.PropsWithChildren) {
  return (
    <div className="mx-36">
      <Header />
      {props.children}
    </div>
  );
}
