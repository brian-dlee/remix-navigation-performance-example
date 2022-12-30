import { useLocation } from "@remix-run/react";
import { range } from "~/utils";
import { LocationDisplay } from "./location-display";
import { Expensive } from "./expensive";
import { Inner } from "./inner";

interface Props {
  count: number;
}

export function Bad(props: Props) {
  const location = useLocation();

  console.timeLog("render", "bad");

  return (
    <div>
      <LocationDisplay location={location} />
      {range(props.count).map((i) => (
        <Expensive key={i} name={i.toString()} />
      ))}
      <Inner />
    </div>
  );
}
