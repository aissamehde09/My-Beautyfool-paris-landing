import {
  FontAwesomeIcon,
  FontAwesomeIconName
} from "@/components/font-awesome-icon";

type BenefitItemProps = {
  accent: "navy" | "red";
  description: string;
  icon: FontAwesomeIconName;
  title: string;
  withDivider?: boolean;
};

export function BenefitItem({
  accent,
  description,
  icon,
  title,
  withDivider = false
}: BenefitItemProps) {
  const iconBackground = accent === "red" ? "bg-paris-red" : "bg-navy-900";

  return (
    <article
      className={`flex h-full flex-col items-center px-4 py-2 text-center lg:px-2 ${
        withDivider ? "lg:border-l lg:border-slate-200" : ""
      }`}
    >
      <div
        className={`mb-5 flex h-[74px] w-[74px] items-center justify-center rounded-full text-white ${iconBackground}`}
      >
        <FontAwesomeIcon name={icon} className="h-9 w-9" />
      </div>
      <h3 className="min-h-12 font-display text-[17px] font-bold uppercase leading-6 text-navy-900">
        {title}
      </h3>
      <p className="mt-3 max-w-[180px] text-[13px] leading-6 text-slate-700">
        {description}
      </p>
    </article>
  );
}

