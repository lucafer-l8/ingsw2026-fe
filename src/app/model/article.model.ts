import { User } from "./user.model";

export interface Article {

  id: number;
  published: Date;
  modified: Date;
  title: string;
  text: string;
  author: User;

}
