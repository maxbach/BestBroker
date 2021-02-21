import { TariffDto } from "../domain/TariffDto";

export let tariffs: TariffDto[] = [
  {
    name: "Инвестор",
    url: "https://www.tinkoff.ru",
    imageUrl: require("../assets/tinkoff-logo.svg"),
    conditionsUrl: "https://acdn.tinkoff.ru/static/documents/invest-tariff-fees.pdf",
    commissionProcent: 0.003,
    minSumToOpen: null,
    subscriptionFee: 0,
    depositoryFee: 0,
    minMonthCommission: 0,
  }
];
