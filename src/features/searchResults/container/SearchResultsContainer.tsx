import React, { FC, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Path } from "../../../Path";
import { NotFoundContainer } from "./NotFoundContainer";
import { MainContainer } from "../../../common/ui/container/MainContainer";
import { LoadingSpinner } from "../../../common/ui/container/LoadingSpinner";
import { Button } from "../../../common/ui/component/Button";
import { AppDispatch, RootState } from "../../../store";
import { setQuery } from "../../cardSearch/actions/cardsActions";

export const SearchResultsContainer: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { results, loading, error, query } = useSelector(
    (state: RootState) => state.cards,
  );
  const memoizedQuery = useMemo(() => query, [query]);

  const handleEditSearch = () => {
    dispatch(setQuery(memoizedQuery));
    navigate(Path.SEARCH, { state: { ...memoizedQuery } });
  };

  if (loading) return <LoadingSpinner />;
  if (error || !results || results.length === 0) {
    return <NotFoundContainer onEditSearch={handleEditSearch} error={error} />;
  }

  return (
    <MainContainer>
      <div>
        {results.map((card) => (
          <div key={card.id}>
            <h3>{card.name}</h3>
            <p>{card.type_line}</p>
            {card.image_uris && card.image_uris.normal ? (
              <img
                src={card.image_uris.normal}
                alt={card.name}
                style={{ width: "50%" }}
              />
            ) : (
              <p>No image available</p>
            )}
          </div>
        ))}
        <Button variant="primary" onClick={handleEditSearch}>
          Edit Search
        </Button>
      </div>
    </MainContainer>
  );
};
