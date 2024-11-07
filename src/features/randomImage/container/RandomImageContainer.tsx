import React, { useEffect } from "react";
import { ButtonToolbar } from "../../../common/ui/component/ButtonToolbar";
import { Button } from "../../../common/ui/component/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { fetchRandomImage } from "../actions/randomImageActions";
import { SimpleSpinner } from "../../../common/ui/component/Spinner";

export const RandomImageContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { imageUrl, loading, error } = useSelector(
    (state: RootState) => state.randomImage,
  );

  useEffect(() => {
    if (!imageUrl) {
      dispatch(fetchRandomImage());
    }
  }, [dispatch, imageUrl]);

  const handleNewImage = () => {
    dispatch(fetchRandomImage());
  };

  return (
    <>
      {loading && <SimpleSpinner />}
      {error && <p>Error: {error}</p>}
      {imageUrl && (
        <ButtonToolbar>
          <img src={imageUrl} alt="Random MTG Card" style={{ width: "50%" }} />
          <Button variant="primary" type="button" onClick={handleNewImage}>
            New Image
          </Button>
        </ButtonToolbar>
      )}
    </>
  );
};
