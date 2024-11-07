import { Card } from "../../cardSearch/model/Card";

export interface RandomImageState {
  imageCard: Card | null;
  loading: boolean;
  success: boolean;
  error: string | null;
}
