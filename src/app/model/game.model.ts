import { Review } from "./review.model";

export interface Game {

  barcode: string;
  title: string;
  subtitle: string;
  descriptione: string;
  genre: string;
  minPlayers: number;
  maxPlayers: number;
  minAge: number;
  duration: Date;
  hasBoard: boolean;
  hasCards: boolean;
  hasDice: boolean;
  hasPieces: boolean;
  copies: number;
  expansionOf: Game;
  expansions: Game[];
  reviews: Review[];

}
