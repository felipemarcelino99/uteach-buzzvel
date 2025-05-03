type BaseProps = {
  label: string;
  link?: string;
  widthFull?: boolean;
  backgroundColor?: string;
  type?: "sm" | "lg";
};

type WithDefaultColor = BaseProps & {
  colorDefault: string;
  textColor?: never;
  borderColor?: never;
};

type WithoutDefaultColor = BaseProps & {
  colorDefault?: never;
  textColor: string;
  borderColor: string;
};

type ButtonType = WithDefaultColor | WithoutDefaultColor;

export default function Button({
  label,
  link = "javascript:;",
  widthFull = true,
  colorDefault,
  textColor,
  borderColor,
  backgroundColor,
  type = "sm",
}: ButtonType) {
  const hasDefaultColor = !!colorDefault;

  const styles = {
    color: hasDefaultColor ? colorDefault : textColor,
    borderColor: hasDefaultColor ? colorDefault : borderColor,
    backgroundColor: backgroundColor || "transparent",
  };

  const sizeClasses =
    type === "sm" ? "text-base px-7 py-3" : "text-2xl py-5 px-12";

  return (
    <a
      className={`
        ${sizeClasses}
        ${widthFull && "w-full"} 
        border-2 
        rounded-lg 
        block
        capitalize
        text-center
        font-semibold
      `}
      href={link}
      style={styles}
    >
      {label}
    </a>
  );
}
