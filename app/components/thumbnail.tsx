export function Thumbnail(props: { name: string }) {
  return <img alt={`${props.name}`} src="https://loremflickr.com/64/64" />;
}
