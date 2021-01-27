export interface IWord {
  id: string;
  date: string;
  word: string;
  url: string;
  partOfSpeech: string;
  pronunciation: string;
  audioPath: string;
  didYouKnow: string;
  definitionShort: string;
  definitions: string[];
  examples: string[];
}

export interface IIdiom {
  term: string;
  definition: string;
}

export interface IFunFact {
  id: number;
  fact: string;
  category: string[];
}

export interface IQuote {
  quote: string;
  author: string;
}

export interface ICharity {
  name: string;
  mission: string;
  tagline: string;
  category: string;
  cause: string;
  url: string;
  urlCharNav: string;
}

export interface IWiki {
  date: string;
  url: string;
  name: string;
  summary: string;
}

export interface IPerson {
  id: string;
  name: string;
  dates: string | null;
  itemCount: number;
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
  charity?: ICharity;
  event: IEvent;
  funFacts: IFunFact[];
  holidays: IHolidays;
  idiom?: IIdiom;
  person: IPerson;
  quote?: IQuote;
  wiki: IWiki;
  word: IWord;
};
