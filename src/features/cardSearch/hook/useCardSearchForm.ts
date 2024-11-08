import { FormValues } from "../model/FormValues";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { useLocation, useNavigate } from "react-router-dom";
import { FormikErrors, FormikProps, useFormik } from "formik";
import {
  fetchCards,
  fetchRelatedCardsSuccess,
  setQuery,
} from "../actions/cardsActions";
import { Path } from "../../../Path";

export const initialValues: FormValues = {
  cardName: "",
  cardType: "",
  cardCost: "",
  description: "",
  power: "",
  toughness: "",
};

type Out = {
  formik: FormikProps<FormValues>;
};

export const useCardSearchForm = (): Out => {
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
      if (values.description.length > 100) {
        errors.description = "Description must be 100 characters or less";
      }
      return errors;
    },

    onSubmit: (values) => {
      dispatch(setQuery(values));
      dispatch(fetchCards(values));
      dispatch(fetchRelatedCardsSuccess([]));
      navigate(Path.RESULTS);
    },
  });

  return {
    formik,
  };
};
