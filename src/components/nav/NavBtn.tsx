import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { VariantProps } from "class-variance-authority";

interface INavBtnProps {
  title: string;
  link: string;
  isActive: boolean;
}

export default function NavButton({
  title,
  link,
  isActive,
  onClick,
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> &
  INavBtnProps) {
  return (
    <Link href={link}>
      <Button
        variant={isActive ? "default" : "ghost"}
        className="hover: cursor-pointer"
        onClick={onClick}
      >
        {title}
      </Button>
    </Link>
  );
}
