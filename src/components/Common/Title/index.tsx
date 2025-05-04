type TitleType = {
  label: string;
  semantic?: boolean;
  color?: string;
  type?: "sm" | "lg";
  align?: "left" | "center" | "right";
};

export default function Title({
  label,
  semantic = false,
  color = "#0F172A",
  type = "sm",
  align = "left",
}: TitleType) {
  const styles = {
    color: color,
    textAlign: align,
  };

  const sizeClasses = type === "sm" ? "title-sm" : "title-lg";

  return semantic ? (
    <h1 className={`title ${sizeClasses}`} style={styles}>
      {label}
    </h1>
  ) : (
    <h2 className={`title ${sizeClasses}`} style={styles}>
      {label}
    </h2>
  );
}
