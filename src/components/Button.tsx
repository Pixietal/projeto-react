type ButtonProps = {
  type?: "submit" | "button" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export function Button({
  type,
  children,
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-purple-800 hover:bg-purple-600 text-slate-50 font-bold uppercase py-1 px-3 rounded-sm ${className}`}
    >
      {children}
    </button>
  );
}
