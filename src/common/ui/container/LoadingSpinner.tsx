import { SimpleSpinner } from "../component/Spinner";
import React, { FC } from "react";
import { MainContainer } from "./MainContainer";

export const LoadingSpinner: FC = () => (
  <MainContainer>
    <SimpleSpinner />
  </MainContainer>
);
