import { CardActionTypes } from "../model/CardActionTypes";
import { AppDispatch } from "../../../store";
import { RelatedCard } from "../model/RelatedCard";
import { CardQuery } from "../model/CardQuery";
import { Card } from "../model/Card";

export const setQuery = (query: CardQuery) => ({
  type: CardActionTypes.SET_QUERY,
  payload: query,
});

export const fetchCardsRequest = () => ({
  type: CardActionTypes.FETCH_CARDS_REQUEST,
});

export const fetchCardsSuccess = (generatedCard: Card) => ({
  type: CardActionTypes.FETCH_CARDS_SUCCESS,
  payload: generatedCard,
});

export const fetchRelatedCardsSuccess = (similarCards: Card[]) => ({
  type: CardActionTypes.FETCH_RELATED_CARDS_SUCCESS,
  payload: similarCards,
});

export const fetchCardsFailure = (error: string) => ({
  type: CardActionTypes.FETCH_CARDS_FAILURE,
  payload: error,
});

export const fetchCards =
  (query: CardQuery) => async (dispatch: AppDispatch) => {
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

      const generatedCard = data.data[0];
      dispatch(fetchCardsSuccess(generatedCard));

      if (generatedCard && generatedCard.all_parts) {
        const relatedCardPromises = generatedCard.all_parts.map(
          async (part: RelatedCard) => {
            const relatedResponse = await fetch(part.uri);
            return await relatedResponse.json();
          },
        );
        const similarCards = await Promise.all(relatedCardPromises);

        dispatch(fetchRelatedCardsSuccess(similarCards));
      }
    } catch (error) {
      dispatch(fetchCardsFailure("An error occurred while fetching cards"));
    }
  };
