import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading = ({ eyebrow, title, description, align = "center", className }: Props) => {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className)}>
      {eyebrow && (
        <span className="inline-block rounded-full bg-primary-soft px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl lg:text-[2.75rem]">{title}</h2>
      {description && <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>}
    </div>
  );
};

export default SectionHeading;
