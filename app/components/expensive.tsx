const largeNumber = 112312423543;

export function Expensive(props: { name: string }) {
  const label = annoyinglyLongComputation(props.name);

  return <img alt={label} src="https://loremflickr.com/64/64" />;
}

function annoyinglyLongComputation(name: string): string {
  let magicNumber = recursiveReduction(toProductOfCharCodes(name), 256, 1.1);

  return toCharacters(Math.round(magicNumber).toString());
}

function recursiveReduction(n: number, max: number, reducer: number): number {
  if (n <= max) return n;
  return recursiveReduction(n / reducer, max, reducer);
}

function toProductOfCharCodes(text: string): number {
  let result = 1;
  for (let i = 0; i < text.length; i++) {
    result *= text.charCodeAt(i) * largeNumber;
  }
  return result;
}

function toCharacters(numericString: string): string {
  let result = "";

  for (let i = 0; i < numericString.length; i++) {
    result += String.fromCharCode(
      "a".charCodeAt(0) + parseInt(numericString[i], 10)
    );
  }

  return result;
}
