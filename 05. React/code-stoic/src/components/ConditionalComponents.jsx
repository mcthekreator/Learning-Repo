import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponents() {
  const display = true;

  if(display){
    return <Welcome/>
  }
  else{
    return <Code/>
  }

}
