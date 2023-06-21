type CardProps = {
  children: React.ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <div className="bg-purple-200 m-5 rounded p-4 max-w-screen-md md:mx-auto">
      {children}
    </div>
  );
}
