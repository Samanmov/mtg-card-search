import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { setQuery } from "../../cardSearch/actions/cardsActions";
import { Path } from "../../../Path";
import { Card } from "../../cardSearch/model/Card";

type Out = {
  handleEditSearch: () => void;
  generatedCard: Card | undefined;
  colorPercentages: Record<string, number> | null;
  similarCards: Card[];
  loading: boolean;
  error: string | null;
};

export const useSearchResults = (): Out => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const {
    generatedCard,
    similarCards,
    loading,
    error,
    query,
    colorPercentages,
  } = useSelector((state: RootState) => state.cards);
  const memoizedQuery = useMemo(() => query, [query]);

  const handleEditSearch = () => {
    dispatch(setQuery(memoizedQuery));
    navigate(Path.SEARCH, { state: { ...memoizedQuery } });
  };
  return {
    handleEditSearch,
    generatedCard,
    colorPercentages,
    similarCards,
    loading,
    error,
  };
};
