import React from "react";
import { Button } from "../../../common/ui/component/Button";
import { Input } from "../../../common/ui/component/Input";
import { MainContainer } from "../../../common/ui/container/MainContainer";
import { CardContainer } from "../../../common/ui/container/CardContainer";
import { Select } from "../../../common/ui/component/Select";
import { ButtonToolbar } from "../../../common/ui/component/ButtonToolbar";
import { RandomImageContainer } from "../../randomImage/container/RandomImageContainer";
import {
  GridContainer,
  GridItem,
} from "../../../common/ui/container/GridContainer";
import { initialValues, useCardSearchForm } from "../hook/useCardSearchForm";
import { CardType } from "../model/CardType";

export const CardSearchFormContainer: React.FC = () => {
  const { formik } = useCardSearchForm();

  return (
    <MainContainer>
      <CardContainer>
        <form onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            name="cardName"
            id="cardName"
            label="Card Name *"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cardName}
            error={formik.errors.cardName}
          />
          <GridContainer cols={12}>
            <GridItem span={6}>
              <Select
                label="Select Type"
                id="cardType"
                onChange={formik.handleChange}
                value={formik.values.cardType}
              >
                <option value="">No value</option>
                {Object.values(CardType).map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Select>
            </GridItem>
            <GridItem span={6}>
              <Input
                type="number"
                name="cardCost"
                id="cardCost"
                label="Cost"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cardCost}
              />
            </GridItem>
          </GridContainer>
          <RandomImageContainer />
          <Input
            type="text"
            name="description"
            id="description"
            label="Description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            error={formik.errors.description}
          />
          <GridContainer cols={12}>
            <GridItem span={6}>
              <Input
                type="number"
                name="power"
                id="power"
                label="Power"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.power}
              />
            </GridItem>
            <GridItem span={6}>
              <Input
                type="number"
                name="toughness"
                id="toughness"
                label="Toughness"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.toughness}
              />
            </GridItem>
          </GridContainer>
          <ButtonToolbar>
            <Button
              variant="primary"
              type="submit"
              disabled={!formik.values.cardName || formik.isSubmitting}
            >
              Search
            </Button>
            <Button
              variant="secondary"
              type="button"
              onClick={(): void => formik.resetForm({ values: initialValues })}
            >
              Clear
            </Button>
          </ButtonToolbar>
        </form>
      </CardContainer>
    </MainContainer>
  );
};
