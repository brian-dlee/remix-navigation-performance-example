import { useLocation } from "@remix-run/react";
import { range } from "~/utils";
import { LocationDisplay } from "./location-display";
import { Expensive } from "./expensive";
import { Inner } from "./inner";

interface Props {
  count: number;
}

export function Good(props: Props) {
  console.timeLog("render", "good");

  return (
    <div>
      <IsolatedLocationDisplay />
      {range(props.count).map((i) => (
        <Expensive key={i} name={i.toString()} />
      ))}
      <Inner />
    </div>
  );
}

function IsolatedLocationDisplay() {
  const location = useLocation();
  return <LocationDisplay location={location} />;
}
