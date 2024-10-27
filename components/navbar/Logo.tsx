import Link from "next/link";
import { LuTent } from "react-icons/lu";
import { Button } from "../ui/button";

function Logo() {
  return (
    <Button
      asChild
      size="icon">
      <Link href="/">
        <LuTent className="w-8 h-8" />
      </Link>
    </Button>
  );
}

export default Logo;
