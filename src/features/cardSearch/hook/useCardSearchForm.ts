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
import { useEffect, useState } from "react";
import { isObjectsEqual } from "../../../common/util/isObjectsEqual";

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
  isModified: boolean;
};

export const useCardSearchForm = (): Out => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();
  const [isModified, setIsModified] = useState(false);

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

  useEffect(() => {
    setIsModified(!isObjectsEqual(formik.values, initialValues));
  }, [formik.values, initialValues]);

  return {
    formik,
    isModified,
  };
};
