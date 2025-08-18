export interface Heading {
  level: string;
  text: string;
}

export interface Content {
  title: string;
  htmlVersion:string;
  headings: Heading[];
  links: string[];
  login_detected: boolean;
  login_indicators: string[];
}

export interface Error {
    message:string
}