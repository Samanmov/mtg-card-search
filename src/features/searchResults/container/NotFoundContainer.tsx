import { FC } from "react";
import { Button } from "../../../common/ui/component/Button";
import { CardContainer } from "../../../common/ui/container/CardContainer";
import { MainContainer } from "../../../common/ui/container/MainContainer";

type Props = {
  onEditSearch: () => void;
  error?: string | null;
};

export const NotFoundContainer: FC<Props> = ({ onEditSearch, error }) => {
  return (
    <MainContainer>
      <CardContainer centerAlign>
        <h2>{error ? `Error: ${error}` : "No Cards Found!"}</h2>
        <Button variant="primary" onClick={onEditSearch}>
          Edit Search
        </Button>
      </CardContainer>
    </MainContainer>
  );
};
