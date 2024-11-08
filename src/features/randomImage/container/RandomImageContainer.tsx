import { ButtonToolbar } from "../../../common/ui/component/ButtonToolbar";
import { Button } from "../../../common/ui/component/Button";
import { ImageWithLoading } from "../../../common/ui/container/ImageWithPlaceholder";
import { useRandomImage } from "../hook/useRandomImage";
import { FC } from "react";

export const RandomImageContainer: FC = () => {
  const { imageCard, handleNewImage, isLoading, error } = useRandomImage();

  return (
    <>
      {imageCard && (
        <ButtonToolbar>
          <ImageWithLoading
            src={imageCard?.image_uris?.normal}
            alt={imageCard.name}
            width="218px"
            height="303px"
            isLoading={isLoading}
            error={error}
          />

          <Button variant="primary" type="button" onClick={handleNewImage}>
            New Image
          </Button>
        </ButtonToolbar>
      )}
    </>
  );
};
