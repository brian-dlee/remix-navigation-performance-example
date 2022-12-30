import { LoaderFunction, json } from "@remix-run/node";
import { Link, useLoaderData, useLocation } from "@remix-run/react";
import { LocationDisplay } from "~/components/location-display";
import { Thumbnail } from "~/components/thumbnail";
import { range } from "~/utils";

export const loader: LoaderFunction = () => {
  return json({ count: 20_000 });
};

/**
 * What makes this component bad is that it pulls location in at a higher
 * level than is necessary.
 *
 * Location changes on events like navigation. Since the location changes, React
 * has to re-render all the Thumbnail components just to rebuild the
 * LocationDisplay component (the only component that uses location).
 */
export default function Bad() {
  const { count } = useLoaderData();
  const location = useLocation();

  return (
    <div>
      <h1>Bad</h1>
      <div>
        <Link to="/">Go Home</Link> -{" "}
        <Link to="/versions/good">Go to Good</Link>
      </div>
      <LocationDisplay location={location} />
      <div>
        {range(count).map((i) => (
          <Thumbnail key={i} name={i.toString()} />
        ))}
      </div>
    </div>
  );
}
