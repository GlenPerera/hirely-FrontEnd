import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

function Navigation() {
  return (
    <nav className="flex py-12 justify-between items-center">
      <div>
        <Link
          to={"/"}
          className="text-4xl font-medium text-underlay-1 text-[white]"
        >
          HIRELYAI
        </Link>
      </div>
      <div className="flex justify-center gap-x-8 items-center">
        <div className="flex gap-x-4 items-center">
          <SignedIn>
            <UserButton afterSignOutUrl="/sign-in" />
          </SignedIn>

          <SignedOut>
            <Button className="bg-[yellow] text-[black] hover:text-white">
              <Link to={"/sign-in"}>Sign In</Link>
            </Button>
            <Button className="bg-[yellow] text-[black] hover:text-white">
              <Link to={"/sign-up"}>Sign Up</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
