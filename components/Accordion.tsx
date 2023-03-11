import { PropsWithChildren, useState } from "react";

type accordionProps = {
  header: string;
};

export default function Accordion(props: accordionProps & PropsWithChildren) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="w-full rounded-3xl bg-darkgray flex flex-col border border-halfblack">
      <div
        className="w-full h-[100px] rounded-3xl bg-darkgray text-white font-semibold border border-halfblack text-3xl p-8"
        onClick={() => setVisible(!visible)}>
        <h3>{props.header}</h3>
      </div>
      {visible && <p className="block m-8 text-halfblack">{props.children}</p>}
    </div>
  );
}
