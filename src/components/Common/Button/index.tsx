type ButtonType = {
  label: string;
  link?: string;
  widthFull?: boolean;
  textColor: string;
  borderColor: string;
  backgroundColor?: string;
  type?: "sm" | "lg";
};

export default function Button({
  label,
  link = "javascript:;",
  widthFull = false,
  textColor,
  borderColor,
  backgroundColor,
  type = "sm",
}: ButtonType) {
  const styles = {
    color: textColor,
    borderColor: borderColor,
    backgroundColor: backgroundColor || "transparent",
  };

  const sizeClasses = type === "sm" ? "button-sm" : "button-lg";

  return (
    <a
      className={`
        ${sizeClasses}
        ${widthFull ? "w-full max-w-full" : "w-fit"} 
        button
      `}
      href={link}
      style={styles}
    >
      {label}
    </a>
  );
}
