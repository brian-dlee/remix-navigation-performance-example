import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData, useLocation } from "@remix-run/react";
import { Content } from "~/components/content";
import { LocationDisplay } from "~/components/location-display";
import { IMAGE_COUNT } from "~/constants";

export const loader: LoaderFunction = () => {
  return json({ count: IMAGE_COUNT });
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

  console.timeLog("render", "good");

  return (
    <div>
      <h1>Good</h1>
      <div>
        <Link to="/">Go Home</Link> - <Link to="/versions/bad">Go to Bad</Link>
      </div>
      <ComponentThatRequiresLocation />
      <Content count={count} />
    </div>
  );
}
