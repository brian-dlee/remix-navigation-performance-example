import { Location } from "history";

export function LocationDisplay(props: { location: Location }) {
  const { pathname, search, hash, key } = props.location;
  return (
    <div>
      <code>
        Pathname={pathname}, Search={search}, Hash={hash} ({key})
      </code>
    </div>
  );
}
