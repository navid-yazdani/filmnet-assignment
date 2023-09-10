export interface axiosHeader {
  "content-type"?: string;
  Accept?: string;
  "Accept-Language"?: string;
}

export interface ContentParamsInterface {
  offset: number;
  count?: number;
  order?: string;
  types?: string;
}
