import { AttributeCard } from "./attributeCard.interface";

export interface Card {
    id: string;
    versionFifa: string;
    typeCard: string;
    firstName: string;
    lastName: string;
    nickName?: string;
    nationality: string;
    club: string;
    position: string;
    photo: string;
    attributeCard: AttributeCard;
  }