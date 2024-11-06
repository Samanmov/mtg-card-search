export interface CardsState {
  query: {
    cardName: string;
    cardType: string;
    cardCost: string;
    description: string;
    power: string;
    toughness: string;
  };
  results: any[];
  loading: boolean;
  error: string | null;
}
