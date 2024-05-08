// EN: Write a function argumentsLength that returns the count of arguments passed to it.
// SV: Skriv en funktion argumentsLength som returnerar antalet argument som skickas till den.

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

export function argumentsLength(...args: JSONValue[]): number {
  return args.length;
}
