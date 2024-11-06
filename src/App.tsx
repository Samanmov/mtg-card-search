import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FC } from "react";
import { Path } from "./Path";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.SEARCH} element={<div>Search form page</div>} />
        <Route path={Path.RESULTS} element={<div>Search results page</div>} />
      </Routes>
    </BrowserRouter>
  );
};
