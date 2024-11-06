import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FC } from "react";
import { Path } from "./Path";
import { CardSearchFormContainer } from "./features/cards/container/CardSearchFormContainer";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.SEARCH} element={<CardSearchFormContainer />} />
        <Route path={Path.RESULTS} element={<div>Search results page</div>} />
      </Routes>
    </BrowserRouter>
  );
};
