import type { Location } from "history";

export function LocationDisplay(props: { location: Location }) {
  const { pathname, search, hash } = props.location;
  return (
    <div>
      <code>
        Pathname={pathname}, Search={search}, Hash={hash}
      </code>
    </div>
  );
}
