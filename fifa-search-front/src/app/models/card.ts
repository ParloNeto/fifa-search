import { AttributeCard } from "./attributeCard";

export interface Card {
    id: number;
    type: string;
    firstName: string;
    lastName: string;
    nickName: string;
    nationality: string;
    club: string;
    position: string;
    photo: string;
    attributes: AttributeCard[];
  }