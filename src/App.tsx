import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FC } from "react";
import { Path } from "./Path";
import { CardSearchFormContainer } from "./features/cardSearch/container/CardSearchFormContainer";
import { SearchResultsContainer } from "./features/searchResults/container/SearchResultsContainer";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.SEARCH} element={<CardSearchFormContainer />} />
        <Route path={Path.RESULTS} element={<SearchResultsContainer />} />
      </Routes>
    </BrowserRouter>
  );
};
