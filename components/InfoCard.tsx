import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";

type infoCardProps = {
  header: string;
  desc: string;
  imgSrc: StaticImageData;
  dst: string;
};

export default function InfoCard(props: infoCardProps) {
  const router = useRouter();

  function handleRedirect() {
    router.push(props.dst);
  }

  return (
    <section className="bg-white rounded-3xl mb-5 place-self-stretch">
      <div className="relative h-80">
        <Image src={props.imgSrc} alt={props.header} fill />
        <a onClick={handleRedirect} className="absolute bottom-4 right-4">
          <Image src="Arrow.svg" alt="redirect arrow" width={40} height={40} />
        </a>
      </div>
      <div className="p-8">
        <h1 className="font-bold text-3xl mb-2">{props.header}</h1>
        <h2 className="font-medium text-xl text-secondary tracking-wide">{props.desc}</h2>
      </div>
    </section>
  );
}
