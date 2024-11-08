import { FC } from "react";
import styled from "styled-components";
import { NotFoundContainer } from "./NotFoundContainer";
import { LoadingSpinner } from "../../../common/ui/container/LoadingSpinner";
import { Button } from "../../../common/ui/component/Button";
import { Colors } from "../../cardSearch/model/Colors";
import { ColorPercentageCircle } from "../../../common/ui/component/ColorPercentageCircle";
import { CardContent } from "../../../common/ui/component/CardContent";
import { CardNavigator } from "../../../common/ui/component/CardNavigator";
import { MainContainer } from "../../../common/ui/container/MainContainer";
import { useSearchResults } from "../hook/useSearchResults";

const CardSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const ColorPercentageSection = styled.div`
  display: flex;
  gap: 10px;
  padding: 30px 0;
  justify-content: center;
  align-items: center;
`;

export const SearchResultsContainer: FC = () => {
  const {
    loading,
    colorPercentages,
    handleEditSearch,
    similarCards,
    generatedCard,
    error,
  } = useSearchResults();

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
