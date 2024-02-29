
import { TypeCard } from 'src/app/core/models/typeCard.interface';
import { COLOR_TEXT_BLACK, COLOR_TEXT_FUTTIES_FIFA_17, COLOR_TEXT_FUT_CHAMPIONS_REWARD_FIFA_17, COLOR_TEXT_HALLOWEEN_FIFA_17, COLOR_TEXT_HERO_FIFA_17, COLOR_TEXT_HERO_FIFA_18, COLOR_TEXT_LEGEND, COLOR_TEXT_LEGEND_FIFA_17, COLOR_TEXT_MOTM, COLOR_TEXT_MOTM_FIFA_17, COLOR_TEXT_MOVEMBER_FIFA_17, COLOR_TEXT_SILVER, COLOR_TEXT_SPD_FIFA_17, COLOR_TEXT_TOTS_BRONZE_FIFA_17, COLOR_TEXT_TOTS_FIFA_17, COLOR_TEXT_TOTS_SILVER_FIFA_17, COLOR_TEXT_TOTW, COLOR_TEXT_TOTW_FIFA_18, COLOR_TEXT_TOTY, COLOR_TEXT_TOTY_FIFA_17, COLOR_TEXT_WHITE, COLOR_TEXT_YELLOW } from './colorText';
import { FIFA_16, FIFA_17, FIFA_18, TYPE } from './utils';

export const typeCardsMockService: TypeCard[] = [
  {
    fifaVersion: FIFA_16,
    cardType: TYPE.FUTTIES,
    colorText: COLOR_TEXT_BLACK,
  },
  {
    fifaVersion: FIFA_16,
    cardType: TYPE.TOTS,
    colorText: COLOR_TEXT_YELLOW,
  },
  {
    fifaVersion: FIFA_16,
    cardType: TYPE.LEGEND,
    colorText: COLOR_TEXT_LEGEND,
  },
  {
    fifaVersion: FIFA_16,
    cardType: TYPE.SILVER_RARE,
    colorText: COLOR_TEXT_SILVER,
  },
  {
    fifaVersion: FIFA_16,
    cardType: TYPE.BRONZE_RARE,
    colorText: COLOR_TEXT_BLACK,
  },
  {
    fifaVersion: FIFA_16,
    cardType: TYPE.GOLD_RARE,
    colorText: COLOR_TEXT_BLACK,
  },
  {
    fifaVersion: FIFA_16,
    cardType: TYPE.TOTY,
    colorText: COLOR_TEXT_TOTY,
  },
  {
    fifaVersion: FIFA_16,
    cardType: TYPE.RECORD_BREAKER,
    colorText: COLOR_TEXT_WHITE,
  },
  {
    fifaVersion: FIFA_16,
    cardType: TYPE.MOTM,
    colorText: COLOR_TEXT_MOTM,
  },
  {
    fifaVersion: FIFA_16,
    cardType: TYPE.TOTW,
    colorText: COLOR_TEXT_TOTW,
  },
  {
    fifaVersion: FIFA_17,
    cardType: TYPE.FUTTIES,
    colorText: COLOR_TEXT_FUTTIES_FIFA_17,
  },
  {
    fifaVersion: FIFA_17,
    cardType: TYPE.GOLD_RARE,
    colorText: COLOR_TEXT_BLACK,
  },
  {
    fifaVersion: FIFA_17,
    cardType: TYPE.HERO,
    colorText: COLOR_TEXT_HERO_FIFA_17,
  },
  {
    fifaVersion: FIFA_17,
    cardType: TYPE.TOTY,
    colorText: COLOR_TEXT_TOTY_FIFA_17,
  },
  {
    fifaVersion: FIFA_17,
    cardType: TYPE.RECORD_BREAKER,
    colorText: COLOR_TEXT_WHITE,
  },
  {
    fifaVersion: FIFA_17,
    cardType: TYPE.SAINT_PATRICKS_DAY,
    colorText: COLOR_TEXT_SPD_FIFA_17,
  },
  {
    fifaVersion: FIFA_17,
    cardType: TYPE.MOTM,
    colorText: COLOR_TEXT_MOTM_FIFA_17,
  },
  {
    fifaVersion: FIFA_17,
    cardType: TYPE.TOTS,
    colorText: COLOR_TEXT_TOTS_FIFA_17,
  },
  {
    fifaVersion: FIFA_17,
    cardType: TYPE.LEGEND,
    colorText: COLOR_TEXT_LEGEND_FIFA_17,
  },
  {
    fifaVersion: FIFA_17,
    cardType: TYPE.FUT_CHAMPIONS_REWARD,
    colorText: COLOR_TEXT_FUT_CHAMPIONS_REWARD_FIFA_17,
  },
  {
    fifaVersion: FIFA_17,
    cardType: TYPE.ONES_TO_WATCH,
    colorText: COLOR_TEXT_WHITE,
  },
  {
    fifaVersion: FIFA_17,
    cardType: TYPE.ULTIMATE_SCREAM,
    colorText: COLOR_TEXT_HALLOWEEN_FIFA_17,
  },
  {
    fifaVersion: FIFA_17,
    cardType: TYPE.MOVEMBER,
    colorText: COLOR_TEXT_MOVEMBER_FIFA_17,
  },
  {
    fifaVersion: FIFA_17,
    cardType: TYPE.SBC_REWARD,
    colorText: COLOR_TEXT_WHITE,
  },
  {
    fifaVersion: FIFA_17,
    cardType: TYPE.PREMIUM_SBC_REWARD,
    colorText: COLOR_TEXT_WHITE,
  },
  {
    fifaVersion: FIFA_17,
    cardType: TYPE.TOTS_SILVER,
    colorText: COLOR_TEXT_TOTS_SILVER_FIFA_17,
  },
  {
    fifaVersion: FIFA_17,
    cardType: TYPE.TOTS_BRONZE,
    colorText: COLOR_TEXT_TOTS_BRONZE_FIFA_17,
  },
  {
    fifaVersion: FIFA_17,
    cardType: TYPE.PLAYER_OF_THE_MONTH
  },
  {
    fifaVersion: FIFA_17,
    cardType: TYPE.FUT_BIRTHDAY
  },
  {
    fifaVersion: FIFA_17,
    cardType: TYPE.TEAM_OF_THE_TOURNAMENTS
  },
  {
    fifaVersion: FIFA_18,
    cardType: TYPE.GOLD_RARE,
    colorText: COLOR_TEXT_BLACK,
  },
  {
    fifaVersion: FIFA_18,
    cardType: TYPE.TOTW,
    colorText: COLOR_TEXT_TOTW_FIFA_18,
  },
  {
    fifaVersion: FIFA_18,
    cardType: TYPE.HERO,
    colorText: COLOR_TEXT_HERO_FIFA_18,
  },
];
