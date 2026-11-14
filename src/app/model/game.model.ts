import { Review } from "./review.model";

export interface Game {

  barcode: string;
  title: string;
  subtitle: string | undefined;
  descriptione: string | undefined;
  genre: string;
  minPlayers: number;
  maxPlayers: number | undefined;
  minAge: number | undefined;
  duration: Date | undefined;
  hasBoard: boolean;
  hasCards: boolean;
  hasDice: boolean;
  hasPieces: boolean;
  copies: number;
  expansionOf: Game | undefined;
  expansions: Game[] | undefined;
  reviews: Review[] | undefined;

}
