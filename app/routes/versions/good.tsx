import { LoaderFunction, json } from "@remix-run/node";
import { Link, useLoaderData, useLocation } from "@remix-run/react";
import { LocationDisplay } from "~/components/location-display";
import { Thumbnail } from "~/components/thumbnail";
import { range } from "~/utils";

export const loader: LoaderFunction = () => {
  return json({ count: 20_000 });
};

function ComponentThatRequiresLocation() {
  const location = useLocation();
  return <LocationDisplay location={location} />;
}

/**
 * This comnponent is structured in such a away that location state changes
 * do not cause a re-render all the Thumbnail components. `useLocation` is
 * used inside a separate component. So when state changes occur there is
 * no reason to render these other elements. Instead, only the element above is
 * recreated based on the new content of location.
 */
export default function Good() {
  const { count } = useLoaderData();

  return (
    <div>
      <h1>Good</h1>
      <div>
        <Link to="/">Go Home</Link> - <Link to="/versions/bad">Go to Bad</Link>
      </div>
      <ComponentThatRequiresLocation />
      <div>
        {range(count).map((i) => (
          <Thumbnail key={i} name={i.toString()} />
        ))}
      </div>
    </div>
  );
}
