import Link from "next/link";

type pathProps = {
  pathTo: string;
  pageName: string;
};

export default function Path(props: pathProps) {
  return (
    <nav>
      <Link href="/" className="text-halfblack">
        {"Главная / "}
      </Link>
      <Link href={props.pathTo} className="text-white">
        {props.pageName}
      </Link>
    </nav>
  );
}
