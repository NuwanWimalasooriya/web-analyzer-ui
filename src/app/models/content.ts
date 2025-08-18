export interface Heading {
  level: string;
  text: string;
}

export interface Content {
  title: string;
  htmlVersion:string;
  headings: Heading[];
  links: string[];
    internal_links: number;
    external_links: number;
    inaccessible_links: number;
  login_detected: boolean;
  login_indicators: string[];
}

export interface Error {
    message:string
}