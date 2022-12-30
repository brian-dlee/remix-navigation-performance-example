import { useTransition, useParams } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Content } from "~/components/content";
import { DEFAULT_IMAGE_COUNT } from "~/constants";

export const loader: LoaderFunction = ({ request }) => {
  const countParam = new URL(request.url).searchParams.get("count");
  return json({
    count: countParam ? parseInt(countParam, 10) : DEFAULT_IMAGE_COUNT,
    n: new Date().valueOf(),
  });
};

function TransitionAnimation() {
  const transition = useTransition();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, .75)",
        color: "white",
        display: transition.state === "loading" ? "block" : "none",
      }}
    >
      Loading
    </div>
  );
}

export default function Versions() {
  const { count, n } = useLoaderData();
  const { version } = useParams() as { version: string };
  const other = version === "good" ? "bad" : "good";

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <TransitionAnimation />
      <div>
        <h1>{asTitle(version)}</h1>
        <div>
          <Link to={`/versions/${other}?count=${count}`}>
            Navigate to {asTitle(other)}
          </Link>
        </div>
        <hr />
        <form method="get">
          <label>
            Image Count:{" "}
            <input
              name="count"
              type="number"
              min="1"
              step="1"
              defaultValue={count}
            />
          </label>
          <button type="submit">Update</button>
        </form>
        <hr />
        <Content count={count} n={n} version={version as "good" | "bad"} />
      </div>
    </div>
  );
}

function asTitle(label: string) {
  if (label.length > 0) {
    return label[0].toUpperCase() + label.slice(1).toLowerCase();
  } else {
    return "";
  }
}
