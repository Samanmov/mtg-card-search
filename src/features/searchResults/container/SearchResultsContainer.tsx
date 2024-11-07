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
  const { generatedCard, similarCards, loading, error, query } = useSelector(
    (state: RootState) => state.cards,
  );
  const memoizedQuery = useMemo(() => query, [query]);

  const handleEditSearch = () => {
    dispatch(setQuery(memoizedQuery));
    navigate(Path.SEARCH, { state: { ...memoizedQuery } });
  };

  if (loading) return <LoadingSpinner />;
  if (error || (!generatedCard && similarCards.length === 0)) {
    return <NotFoundContainer onEditSearch={handleEditSearch} error={error} />;
  }

  return (
    <MainContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Generated Card</h2>
        <div>
          <h3>{generatedCard?.name}</h3>
          <p>{generatedCard?.type_line}</p>
          {generatedCard?.image_uris?.normal && (
            <img
              src={generatedCard.image_uris.normal}
              alt={generatedCard.name}
              style={{ width: "50%" }}
            />
          )}
        </div>

        {similarCards.length > 0 && (
          <div style={{ marginTop: "20px" }}>
            <h2>Similar Cards</h2>
            {similarCards.map((card) => (
              <div key={card.id} style={{ marginBottom: "10px" }}>
                <h3>{card.name}</h3>
                <p>{card.type_line}</p>
                {card.image_uris?.normal && (
                  <img
                    src={card.image_uris.normal}
                    alt={card.name}
                    style={{ width: "50%" }}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        <Button variant="primary" onClick={handleEditSearch}>
          Edit Search
        </Button>
      </div>
    </MainContainer>
  );
};
