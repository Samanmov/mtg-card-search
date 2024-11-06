import React from "react";
import { useFormik, FormikErrors } from "formik";
import { useNavigate, useLocation } from "react-router-dom";
import { Path } from "../../../Path";
import { Button } from "../../../common/ui/component/Button";
import { Input } from "../../../common/ui/component/Input";
import { MainContainer } from "../../../common/ui/container/MainContainer";
import { CardContainer } from "../../../common/ui/container/CardContainer";
import { Select } from "../../../common/ui/component/Select";
import { ButtonToolbar } from "../../../common/ui/component/ButtonToolbar";
import { FormValues } from "../model/FormValues";
import { AppDispatch } from "../../../store";
import { useDispatch } from "react-redux";
import { fetchCards, setQuery } from "../actions/cardsActions";

const initialValues: FormValues = {
  cardName: "",
  cardType: "",
  cardCost: "",
  description: "",
  power: "",
  toughness: "",
};

export const CardSearchFormContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();

  const formik = useFormik<FormValues>({
    initialValues: (location.state as FormValues) || initialValues,
    validate: (values) => {
      const errors: FormikErrors<FormValues> = {};
      if (!values.cardName) {
        errors.cardName = "Card name is required";
      }
      return errors;
    },
    onSubmit: (values) => {
      dispatch(setQuery(values));
      dispatch(fetchCards(values));
      navigate(Path.RESULTS);
    },
  });

  return (
    <MainContainer>
      <CardContainer>
        <form onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            name="cardName"
            id="cardName"
            label="Card Name*"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cardName}
            error={formik.errors.cardName}
          />
          <Select
            label="Select Type"
            id="cardType"
            onChange={formik.handleChange}
            value={formik.values.cardType}
            defaultValue=""
          >
            <option disabled value="">
              Select Type
            </option>
            <option value="creature">Creature</option>
            <option value="enchantment">Enchantment</option>
            <option value="instant">Instant</option>
            <option value="sorcery">Sorcery</option>
          </Select>
          <Input
            type="number"
            name="cardCost"
            id="cardCost"
            label="Cost"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cardCost}
          />
          <Input
            type="text"
            name="description"
            id="description"
            label="Description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          <Input
            type="number"
            name="power"
            id="power"
            label="Power"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.power}
          />
          <Input
            type="text"
            name="toughness"
            id="toughness"
            label="Toughness"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.toughness}
          />
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
