export interface IData {
  center: string;
  title: string;
  photographer: string;
  keywords: string[];
  location: string;
  nasa_id: string;
  media_type: string;
  date_created: string;
  description: string;
}

export interface ILink {
  href: string;
  rel: string;
  render: string;
}

export interface IVideoMeta {
  "AVAIL:Album": string;
  "AVAIL:Center": string;
  "AVAIL:Creator": null;
  "AVAIL:DateCreated": string;
  "AVAIL:Description": string;
  "AVAIL:Description508": string;
  "AVAIL:Keywords": string[];
  "AVAIL:Location": string;
  "AVAIL:MediaType": string;
  "AVAIL:NASAID": string;
  "AVAIL:Owner": string;
  "AVAIL:Photographer": string;
  "AVAIL:SecondaryCreator": string;
  "AVAIL:Title": string;
}
