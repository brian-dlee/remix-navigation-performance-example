import { IMAGE_COUNT } from "~/constants";

export function Expensive(props: { name: string }) {
  const label = annoyinglyLongComputation(props.name);

  return <img alt={label} src="https://loremflickr.com/64/64" />;
}

function annoyinglyLongComputation(name: string): string {
  const codeCount = toSumOfCharCodes(name) % IMAGE_COUNT;

  let result = "";

  for (let i = 0; i < codeCount; i++) {
    result += randomLowercaseLetter();
  }

  return result;
}

function toSumOfCharCodes(text: string): number {
  let result = 0;
  for (let i = 0; i < text.length; i++) {
    result += text.charCodeAt(i);
  }
  return result;
}

function randomLowercaseLetter() {
  const min = "a".charCodeAt(0);
  const max = "z".charCodeAt(0);
  return String.fromCharCode(Math.floor(min + Math.random() * (max - min)));
}
