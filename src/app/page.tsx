import { TheamToggler } from "@/components/TheamToggler";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center gap-2">
      <Button>Started</Button>
      <TheamToggler />
    </div>
  );
}
