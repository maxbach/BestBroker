import { SpecialTariffDto } from "./SpecialTariffDto";

export let specialTariffs: SpecialTariffDto[] = [
  {
    name: "Начинающий",
    url: "",
    imageUrl: require("../assets/united_traders.svg"),
    conditionsUrl: "https://unitedtraders.com/trading",
    brokerName: "United Traders",
    getTextToShow: function (userInput: number) {
        return "0.02$"
    },
    alertText: null,
    isShow: true,
    position: 2,
    commissionFrequency: "за акцию"
  },
];
