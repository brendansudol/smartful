export interface IWord {
  id: string;
  word: string;
  url: string;
  partOfSpeech: string;
  pronunciation: string;
  audioPath: string;
  definitions: string[];
  examples: string[];
  origin: string;
}

export interface IIdiom {
  id: string;
  term: string;
  definition: string;
}

export interface IFunFact {
  id: number;
  fact: string;
  category: string[];
}

export interface IQuote {
  id: string;
  quote: string;
  author: string;
}

export interface IWiki {
  id: string;
  name: string;
  summary: string;
  url: string;
}

export interface IPerson {
  id: string;
  name: string;
  dates: string | null;
  mainImg: string;
  summary: string[];
  quote: string | null;
  urlWiki: string;
  urlGoogle: string;
}

export interface IEvent extends IPerson {}

export interface IArtist extends IPerson {
  artworkImgs: {
    name: string;
    path: string;
    source: string;
  }[];
  movements: string[];
  mediums: string[];
}

export interface IHolidays {
  [date: string]: string[];
}

export type IDayData = {
  artist: IArtist;
  event: IEvent;
  funFacts: IFunFact[];
  holidays: IHolidays;
  idiom?: IIdiom;
  person: IPerson;
  quote?: IQuote;
  wiki: IWiki;
  word: IWord;
};
