import { AttributeCard } from '../attributeCard.interface';
import { Card } from '../card.interface';
import { Club } from '../club';
import { Nation } from '../nation';
import { TypeCard } from '../typeCard.interface';

export const cardMock: Card = {
  id: '1111',
  versionFifa: 'fifa-17',
  typeCard: 'futties',
  firstName: 'Neymar',
  lastName: 'Jr',
  nickName: '',
  nationality: 'Brazil',
  club: {
    id: '1111',
    name: 'Santos',
    clubUrl: 'https://example.com/club',
  },
  position: 'LW',
  photo: 'https://example.com/player.jpg',
  attributeCard: {
    overall: 89,
    pace: 90,
    shooting: 86,
    passing: 84,
    dribbling: 94,
    defending: 34,
    physicality: 67,
  },
};

export const cardsMock: Card[] = [
  {
    id: '1111',
    versionFifa: 'fifa-16',
    typeCard: 'futties',
    firstName: 'Neymar',
    lastName: 'Jr',
    nickName: '',
    nationality: 'Brazil',
    club: {
      id: '1111',
      name: 'Santos',
      clubUrl: 'https://example.com/club',
    },
    position: 'LW',
    photo: 'https://example.com/player.jpg',
    attributeCard: {
      overall: 89,
      pace: 90,
      shooting: 86,
      passing: 84,
      dribbling: 94,
      defending: 34,
      physicality: 67,
    },
  },
  {
    id: '2222',
    versionFifa: 'fifa-17',
    typeCard: 'futties',
    firstName: 'Gabriel',
    lastName: 'Jesus',
    nickName: '',
    nationality: 'Brazil',
    club: {
      id: '2222',
      name: 'Palmeiras',
      clubUrl: 'https://example.com/club',
    },
    position: 'ST',
    photo: 'https://example.com/player.jpg',
    attributeCard: {
      overall: 84,
      pace: 88,
      shooting: 82,
      passing: 78,
      dribbling: 87,
      defending: 49,
      physicality: 73,
    },
  },
  {
    id: '3333',
    versionFifa: 'fifa-16',
    typeCard: 'futties',
    firstName: 'Yerry',
    lastName: 'Mina',
    nickName: '',
    nationality: 'Colombia',
    club: {
      id: '3333',
      name: 'Everton',
      clubUrl: 'https://example.com/club',
    },
    position: 'CB',
    photo: 'https://example.com/player.jpg',
    attributeCard: {
      overall: 83,
      pace: 67,
      shooting: 61,
      passing: 66,
      dribbling: 71,
      defending: 87,
      physicality: 85,
    },
  },
];

export const clubMock: Club = {
  id: '1111',
  name: 'Palmeiras',
  clubUrl: 'https://example.com/palmeiras',
};

export const clubsMock: Club[] = [
  {
    id: '1111',
    name: 'Palmeiras',
    clubUrl: 'https://example.com/palmeiras',
  },
  {
    id: '2222',
    name: 'Internacional',
    clubUrl: 'https://example.com/internacional',
  },
  {
    id: '3333',
    name: 'Real Madrid',
    clubUrl: 'https://example.com/realmadrid',
  },
];
export const attributesMock: AttributeCard = {
  overall: 89,
  pace: 90,
  shooting: 86,
  passing: 84,
  dribbling: 94,
  defending: 34,
  physicality: 67,
};

export const mockTypeCard: TypeCard = {
  fifaVersion: 'fifa-17',
  cardType: 'futties',
  photoUrl: 'url/photo/futties',
  colorText: {
    colorOverall: '#FFFFFF',
    colorFontName: '#FFFFFF',
    colorPosition: '#FFFFFF',
    colorAttributes: '#FFFFFF',
  },
};

export const mockListTypeCard: TypeCard[] = [
  {
    fifaVersion: 'fifa-16',
    cardType: 'futties',
    photoUrl: 'url/photo/futties',
    colorText: {
      colorOverall: '#FFFFFF',
      colorFontName: '#FFFFFF',
      colorPosition: '#FFFFFF',
      colorAttributes: '#FFFFFF',
    },
  },
  {
    fifaVersion: 'fifa-17',
    cardType: 'futties',
    photoUrl: 'url/photo/futties',
    colorText: {
      colorOverall: '#FFFFFF',
      colorFontName: '#FFFFFF',
      colorPosition: '#FFFFFF',
      colorAttributes: '#FFFFFF',
    },
  },
  {
    fifaVersion: 'fifa-18',
    cardType: 'futties',
    photoUrl: 'url/photo/futties',
    colorText: {
      colorOverall: '#FFFFFF',
      colorFontName: '#FFFFFF',
      colorPosition: '#FFFFFF',
      colorAttributes: '#FFFFFF',
    },
  },
];

export const mockListNation: Nation[] = [
  {
    nation: 'brazil',
    nationUrl: 'url/brazil',
  },
  {
    nation: 'argentina',
    nationUrl: 'url/argentina',
  },
  {
    nation: 'france',
    nationUrl: 'url/france',
  },
];

export const mockListClub: Club[] = [
  {
    id: '1111',
    name: 'palmeiras',
    clubUrl: 'url/palmeiras',
  },
  {
    id: '2222',
    name: 'real-madrid',
    clubUrl: 'url/real-madrid',
  },
  {
    id: '3333',
    name: 'barcelona',
    clubUrl: 'url/barcelona',
  },
];
