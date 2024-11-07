import { FC } from "react";
import { Button } from "../../../common/ui/component/Button";
import { CardContainer } from "../../../common/ui/container/CardContainer";
import { MainContainer } from "../../../common/ui/container/MainContainer";

type Props = {
  onEditSearch: () => void;
};

export const NotFoundContainer: FC<Props> = ({ onEditSearch }) => {
  return (
    <MainContainer>
      <CardContainer centerAlign>
        <h2>No Cards Found!</h2>
        <Button variant="primary" onClick={onEditSearch}>
          Edit Search
        </Button>
      </CardContainer>
    </MainContainer>
  );
};
