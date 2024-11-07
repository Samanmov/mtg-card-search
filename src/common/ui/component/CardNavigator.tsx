import React, { FC, useState } from "react";
import { CardContent } from "./CardContent"; // Adjust imports as necessary
import styled from "styled-components";
import { Button } from "./Button"; // Assuming this is a styled button component
import { Card } from "../../../features/cardSearch/model/Card";

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type Props = {
  similarCards: Card[];
  loading: boolean;
  title: string;
};

export const CardNavigator: FC<Props> = ({ similarCards, loading, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < similarCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (similarCards.length === 0) return null;

  return (
    <Container>
      {similarCards[currentIndex] && (
        <CardContent
          title={title}
          name={similarCards[currentIndex].name}
          type={similarCards[currentIndex].type_line}
          src={similarCards[currentIndex].image_uris?.normal ?? ""}
          isLoading={loading}
          action={
            <NavigationContainer>
              <Button
                variant="primary"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
              >
                {"<"}
              </Button>
              <span style={{ margin: "0 106px" }}>
                {currentIndex + 1} / {similarCards.length}
              </span>
              <Button
                variant="primary"
                onClick={handleNext}
                disabled={currentIndex === similarCards.length - 1}
              >
                {">"}
              </Button>
            </NavigationContainer>
          }
        />
      )}
    </Container>
  );
};
