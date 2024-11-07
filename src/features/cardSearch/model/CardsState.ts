import { Card } from "./Card";

export interface CardsState {
  query: {
    cardName: string;
    cardType: string;
    cardCost: string;
    description: string;
    power: string;
    toughness: string;
  };
  generatedCard: Card | undefined;
  similarCards: Card[];
  loading: boolean;
  error: string | null;
}
