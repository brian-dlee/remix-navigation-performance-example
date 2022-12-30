import { useLocation } from "@remix-run/react";
import { range } from "~/utils";
import { LocationDisplay } from "./location-display";
import { Expensive } from "./expensive";
import { Inner } from "./inner";

interface Props {
  count: number;
  n: number;
}

export function Bad(props: Props) {
  const location = useLocation();

  console.timeLog("render", "bad");

  return (
    <div>
      <LocationDisplay location={location} />
      <p>
        This is the Bad component. Depending on the current value of "count",
        you may see some strange behavior when you click the "Go to Good" link.
        Sometimes, the loading screen does not come up at all and sometimes
        there is a noticeable delay before it displays. For low number
        (generally &gt; 200), you probably won't see any difference.
      </p>
      <p>
        Both Good and Bad are memod from top level route changes, but since Bad
        includes "useLocation" in the same render as the Expensive components
        are rendered this component performs a costly rerender when the link is
        changed due to location state being modified by the navigation.
      </p>
      {range(props.count).map((i) => (
        <Expensive key={i} name={`bad${i}${props.n}`} />
      ))}
      <Inner />
    </div>
  );
}
