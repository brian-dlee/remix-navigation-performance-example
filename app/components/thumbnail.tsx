export function Thumbnail(props: { name: string }) {
  const label = annoyinglyLongComputation();

  return (
    <img alt={`${props.name}: ${label}`} src="https://loremflickr.com/64/64" />
  );
}

function annoyinglyLongComputation(): string {
  let result = "";

  for (let i = 0; i < 256; i++) {
    result += randomLowercaseLetter();
  }

  return result;
}

function randomLowercaseLetter() {
  const min = "a".charCodeAt(0);
  const max = "z".charCodeAt(0);
  return String.fromCharCode(Math.floor(min + Math.random() * (max - min)));
}
