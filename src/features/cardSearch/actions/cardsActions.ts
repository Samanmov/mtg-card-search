import { CardActionTypes } from "../model/CardActionTypes";

export const setQuery = (query: any) => ({
  type: CardActionTypes.SET_QUERY,
  payload: query,
});

export const fetchCardsRequest = () => ({
  type: CardActionTypes.FETCH_CARDS_REQUEST,
});

export const fetchCardsSuccess = (cards: any[]) => ({
  type: CardActionTypes.FETCH_CARDS_SUCCESS,
  payload: cards,
});

export const fetchCardsFailure = (error: string) => ({
  type: CardActionTypes.FETCH_CARDS_FAILURE,
  payload: error,
});

export const fetchCards = (query: any) => async (dispatch: any) => {
  dispatch(fetchCardsRequest());
  try {
    const queryParts = [];
    if (query.cardType) queryParts.push(`t:${query.cardType}`);
    if (query.cardCost) queryParts.push(`cmc:${query.cardCost}`);
    if (query.description) queryParts.push(query.description);
    if (query.power) queryParts.push(`pow:${query.power}`);
    if (query.toughness) queryParts.push(`tou:${query.toughness}`);
    if (query.cardName) queryParts.push(`name:${query.cardName}`);

    const searchQuery = queryParts.join(" ");

    const response = await fetch(
      `https://api.scryfall.com/cards/search?q=${encodeURIComponent(searchQuery)}`,
    );
    const data = await response.json();
    dispatch(fetchCardsSuccess(data.data));
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    dispatch(fetchCardsFailure(errorMessage));
  }
};
