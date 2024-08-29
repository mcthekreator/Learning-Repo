import Code from "./Code";
import Fruit from "./Fruit";

export default function ConditionalComponents() {
  const display = true;
  return display ? <Fruit /> : <Code />;
}
