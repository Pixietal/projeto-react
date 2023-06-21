import { Link } from "react-router-dom";

type BreadcrumbsProps = {
  links: {
    href: string;
    label: React.ReactNode;
  }[];
};

export function Breadcrumbs({ links }: BreadcrumbsProps) {
  return (
    <div className="flex gap-1 items-center p-1">
      {links.map((link, index) => (
        <div key={index} className="flex items-center gap-1">
          <Link
            to={link.href}
            className="text-blue-300 hover:text-blue-600 font-bold hidden md:block"
          >
            {link.label}
          </Link>
          {index < links.length - 1 && <span className="">{">"} </span>}
        </div>
      ))}
    </div>
  );
}
