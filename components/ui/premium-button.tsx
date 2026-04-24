type PremiumButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export function PremiumButton({
  href,
  label,
  variant = "primary"
}: PremiumButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`premium-btn ${variant === "secondary" ? "premium-btn-secondary" : "premium-btn-primary"}`}
    >
      <span>{label}</span>
      <i />
    </a>
  );
}
