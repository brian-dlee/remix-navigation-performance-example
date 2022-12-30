import { memo } from "react";
import { Good } from "./good";
import { Bad } from "./bad";

interface Props {
  count: number;
  n: number;
  version: "good" | "bad";
}

export const Content = memo(function Content(props: Props) {
  console.timeLog("render", `content (${props.version})`);

  return props.version === "good" ? (
    <Good count={props.count} n={props.n} />
  ) : (
    <Bad count={props.count} n={props.n} />
  );
});
