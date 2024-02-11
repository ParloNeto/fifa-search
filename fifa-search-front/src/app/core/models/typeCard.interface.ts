import { ColorText } from "./colorText.interface";

export interface TypeCard {
  fifaVersion: string;
  cardType: string;
  photoUrl?: string;
  colorText: ColorText;
}