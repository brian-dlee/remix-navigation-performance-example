import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <p>
        Use the links below to get started. The app will give you links to
        navigate between the Good and the Bad pages. These pages intentionally
        have differences in the rendering performance on navigation events. They
        also include a configurable image count so you can increase or decrease
        the load on the render cycle.
      </p>{" "}
      <p>
        You'll start by heading to the Bad page. At the default value you should
        be a slight different between navigations from Bad to Good and Good to
        Bad, but it won't be drastic. A value like 5000 will change those
        effects pretty dramatically.
      </p>
      <Link to="/versions/bad">Get Started</Link>
    </div>
  );
}
