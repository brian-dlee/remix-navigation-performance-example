import { useLocation } from "@remix-run/react";
import { range } from "~/utils";
import { LocationDisplay } from "./location-display";
import { Expensive } from "./expensive";
import { Inner } from "./inner";

interface Props {
  count: number;
  n: number;
}

export function Good(props: Props) {
  console.timeLog("render", "good");

  return (
    <div>
      <IsolatedLocationDisplay />
      <p>
        This is the Good component. Notice that the initial render time of this
        page is the same as Bad. Well, that's because of all the Expensive
        components being rendered. They do take a long time to render. What
        makes this component Good is that it does not rerender those components
        when it doesn't need to.
      </p>
      <p>
        As you change the value of "count", you'll notice the initial render
        time respond accordingly, but the navigation back to Bad is always
        consistent. There will be no change in the transition delay since
        location changes do not cause this component's Expensive components to
        rerender.
      </p>
      {range(props.count).map((i) => (
        <Expensive key={i} name={`good${i}${props.n}`} />
      ))}
      <Inner />
    </div>
  );
}

function IsolatedLocationDisplay() {
  const location = useLocation();
  return <LocationDisplay location={location} />;
}
