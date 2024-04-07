import { ModeToggle } from "@/theme/modetoggle";
import { Button } from "../ui/button";

const Navbar = ({ mode, setMode }) => {
  return (
    <nav className="backdrop-blur-sm p-2 xl:mx-auto sticky top-0 z-50 border-b">
      <div className="flex items-center justify-between gap-2 mx-auto md:mx-12 lg:mx-24 xl:mx-44 2xl:mx-60">
        <h1 className="font-bold text-lg">ChomChom</h1>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button
            size="sm"
            variant="outline"
            onClick={() => (mode == "a" ? setMode("b") : setMode("a"))}
          >
            Switch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
