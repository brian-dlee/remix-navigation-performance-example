import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link to="/versions/bad">Bad</Link>
        </li>
        <li>
          <Link to="/versions/good">Good</Link>
        </li>
      </ul>
    </div>
  );
}
