declare module '@whalue-design/colors' {
  type ColorPalettes = [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
  ];

  export function generate(color: string): ColorPalettes;
}
