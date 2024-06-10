//card.ts
export interface ICardData {
    card_id: string;
    card_name: string;
    card_number: number;
    card_image_url: string;
    card_contents: {
      forward: string;
      reverse: string;
    };
}