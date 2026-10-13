import Reveal from "./reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
};

export default function SectionHeading({ eyebrow, title, description, align = "center" }: Props) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <span className="eyebrow">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-[3.25rem] lg:leading-[1.08]">{title}</h2>
      {description && <p className="desc mt-5">{description}</p>}
    </Reveal>
  );
}
