import { range } from "~/utils";
import { Thumbnail } from "./thumbnail";

function Inner() {
  console.timeLog("render", "inner");
  return <div />;
}

export function Content(props: { count: number }) {
  return (
    <div>
      {range(props.count).map((i) => (
        <Thumbnail key={i} name={i.toString()} />
      ))}
      <Inner />
    </div>
  );
}
