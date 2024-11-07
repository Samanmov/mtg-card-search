import React, { FC, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Path } from "../../../Path";
import { NotFoundContainer } from "./NotFoundContainer";
import { LoadingSpinner } from "../../../common/ui/container/LoadingSpinner";
import { Button } from "../../../common/ui/component/Button";
import { AppDispatch, RootState } from "../../../store";
import { setQuery } from "../../cardSearch/actions/cardsActions";
import { Colors } from "../../cardSearch/model/Colors";
import { ColorPercentageCircle } from "../../../common/ui/component/ColorPercentageCircle";
import { CardContent } from "../../../common/ui/component/CardContent";
import { CardNavigator } from "../../../common/ui/component/CardNavigator";
import { MainContainer } from "../../../common/ui/container/MainContainer";

const CardSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const ColorPercentageSection = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
`;

export const SearchResultsContainer: FC = () => {
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

  if (loading) return <LoadingSpinner />;
  if (error || (!generatedCard && similarCards.length === 0)) {
    return <NotFoundContainer onEditSearch={handleEditSearch} />;
  }

  return (
    <MainContainer flexCenter={false}>
      <CardSection>
        <CardContent
          name={generatedCard?.name}
          isLoading={loading}
          type={generatedCard?.type_line}
          title="Generated Card"
          src={generatedCard?.image_uris?.normal ?? ""}
          action={
            <Button variant="primary" onClick={handleEditSearch}>
              Edit Search
            </Button>
          }
        />

        <CardNavigator
          title="Similar Cards"
          similarCards={similarCards}
          loading={loading}
        />
      </CardSection>

      {colorPercentages && Object.keys(colorPercentages).length > 0 && (
        <ColorPercentageSection>
          {Object.entries(colorPercentages).map(([color, percentage]) => (
            <ColorPercentageCircle
              key={color}
              color={color as Colors}
              percentage={Math.round(percentage)}
            />
          ))}
        </ColorPercentageSection>
      )}
    </MainContainer>
  );
};
