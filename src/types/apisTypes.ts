//api/card.ts

export interface ICardContents {
  forward: string;
  reverse: string;
}

export interface ICardData {
  card_id: string;
  card_name: string;
  card_number: number;
  card_image_url: string;
  card_contents: ICardContents;
}

export interface ICardResponse {
  data: ICardData[];
}