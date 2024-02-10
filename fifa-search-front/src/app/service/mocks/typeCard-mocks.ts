
import { TypeCard } from 'src/app/core/models/typeCard';
import { COLOR_TEXT_BLACK, COLOR_TEXT_FUTTIES_FIFA_17, COLOR_TEXT_FUT_CHAMPIONS_REWARD, COLOR_TEXT_LEGEND, COLOR_TEXT_MOTM, COLOR_TEXT_SILVER, COLOR_TEXT_TOTW, COLOR_TEXT_TOTY, COLOR_TEXT_WHITE, COLOR_TEXT_YELLOW } from './colorText';
import { FIFA_16, FIFA_17, NATIONS } from './utils';

export const typeCardsMockService: TypeCard[] = [
  {
    fifaVersion: FIFA_16,
    cardType: NATIONS.FUTTIES,
    colorText: COLOR_TEXT_BLACK,
  },
  {
    fifaVersion: FIFA_16,
    cardType: NATIONS.TOTS,
    colorText: COLOR_TEXT_YELLOW,
  },
  {
    fifaVersion: FIFA_16,
    cardType: NATIONS.LEGEND,
    colorText: COLOR_TEXT_LEGEND,
  },
  {
    fifaVersion: FIFA_16,
    cardType: NATIONS.SILVER_RARE,
    colorText: COLOR_TEXT_SILVER,
  },
  {
    fifaVersion: FIFA_16,
    cardType: NATIONS.BRONZE_RARE,
    colorText: COLOR_TEXT_BLACK,
  },
  {
    fifaVersion: FIFA_16,
    cardType: NATIONS.GOLD_RARE,
    colorText: COLOR_TEXT_BLACK,
  },
  {
    fifaVersion: FIFA_16,
    cardType: NATIONS.TOTY,
    colorText: COLOR_TEXT_TOTY,
  },
  {
    fifaVersion: FIFA_16,
    cardType: NATIONS.RECORD_BREAKER,
    colorText: COLOR_TEXT_WHITE,
  },
  {
    fifaVersion: FIFA_16,
    cardType: NATIONS.MOTM,
    colorText: COLOR_TEXT_MOTM,
  },
  {
    fifaVersion: FIFA_16,
    cardType: NATIONS.TOTW,
    colorText: COLOR_TEXT_TOTW,
  },
  {
    fifaVersion: FIFA_17,
    cardType: NATIONS.FUT_CHAMPIONS_REWARD,
    colorText: COLOR_TEXT_FUT_CHAMPIONS_REWARD,
  },
  {
    fifaVersion: FIFA_17,
    cardType: NATIONS.FUTTIES,
    colorText: COLOR_TEXT_FUTTIES_FIFA_17,
  },
];
