type ButtonOutlinedType = {
  label: string;
  link?: string;
  widthFull?: boolean;
  type?: "sm" | "lg";
  colorDefault: string;
};

export default function ButtonOutlined({
  label,
  link = "javascript:;",
  widthFull = true,
  colorDefault,
  type = "sm",
}: ButtonOutlinedType) {
  const styles = {
    color: colorDefault,
    borderColor: colorDefault,
  };

  const sizeClasses = type === "sm" ? "button-sm" : "button-lg";

  return (
    <a
      className={`
        ${sizeClasses}
        ${widthFull && "w-full max-w-full"} 
        button
      `}
      href={link}
      style={styles}
    >
      {label}
    </a>
  );
}
