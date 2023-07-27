import { AttributeCard } from "./attributeCard";
import { Club } from "./club";

export interface Card {
    id: string;
    versionFifa: string;
    typeCard: string;
    firstName: string;
    lastName: string;
    nickName?: string;
    nationality: string;
    club: Club;
    position: string;
    photo: string;
    attributeCard: AttributeCard;
  }