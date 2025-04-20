import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";


export default function Home() {
  return (
    <div className="p-4">
<div className="flex flex-col text-6xl gap-y-4">
    <div >
      <Button variant="elevated">I am here</Button>
    </div>
    <div className="text-6xl ">
      <Input placeholder="I am here"/>
    </div>
    <div className="text-6xl ">
      <Progress value={50}/>
    </div>
    <div className="text-6xl ">
      <Textarea placeholder="I am here"/>
    </div>
    <div className="text-6xl ">
      <Checkbox />
    </div>
    </div>
    </div>
  );
}
