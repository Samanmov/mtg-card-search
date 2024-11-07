import { ImageUris } from "./ImageUris";
import { RelatedCard } from "./RelatedCard";

export interface Card {
  object: string;
  id: string;
  oracle_id: string;
  multiverse_ids: string[];
  name: string;
  lang: string;
  released_at: string;
  uri: string;
  scryfall_uri: string;
  layout: string;
  highres_image: boolean;
  image_status: string;
  image_uris: ImageUris;
  mana_cost: string;
  cmc: number;
  type_line: string;
  oracle_text: string;
  colors: string[];
  color_identity: string[];
  keywords: string[];
  produced_mana: string[];
  all_parts: RelatedCard[];
}
