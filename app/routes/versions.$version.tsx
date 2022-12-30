import { useTransition, useParams } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Content } from "~/components/content";
import { IMAGE_COUNT } from "~/constants";


export const loader: LoaderFunction = () => {
  return json({ count: IMAGE_COUNT });
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
  const { count } = useLoaderData();
  const { version } = useParams() as { version: string };
  const other = version === 'good' ? 'bad' : 'good'

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <TransitionAnimation />
      <div>
        <h1>{asTitle(version)}</h1>
        <div>
          <Link to="/">Go Home</Link> - <Link to={`/versions/${other}`}>Go to {asTitle(other)}</Link>
        </div>
        <Content count={count} version="good" />
      </div>
    </div>
  );
}

function asTitle(label: string) {
  if (label.length > 0) {
    return label[0].toUpperCase() + label.slice(1).toLowerCase()
  } else {
    return ''
  }
}
