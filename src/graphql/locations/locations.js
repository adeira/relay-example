// @flow strict

export type Location = {
  +id: string,
  +code: string,
  +name: string,
  +slug: string,
  +timezone: string,
  +type: string,
  +country: { +id: string, +name: string, +slug: string, +code: string },
  +stations: number,
  +airports: number,
  +rank: number,
};

export type LocationInput = {
  +locationId: string,
  +name: string,
  +type: string,
};
