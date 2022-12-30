import { memo } from "react";
import { Good } from "./good";
import { Bad } from "./bad";

interface Props {
  count: number;
  version: "good" | "bad";
}

export const Content = memo(function Content(props: Props) {
  console.timeLog("render", `content (${props.version})`);

  return props.version === "good" ? (
    <Good count={props.count} />
  ) : (
    <Bad count={props.count} />
  );
});
