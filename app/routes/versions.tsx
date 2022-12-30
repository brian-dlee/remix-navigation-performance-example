import { useTransition, Outlet } from "@remix-run/react";

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
        display: transition.state === "loading" ? "block" : "none"
      }}
    >
      Loading
    </div>
  );
}

export default function Versions() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <TransitionAnimation />
      <Outlet />
    </div>
  );
}
