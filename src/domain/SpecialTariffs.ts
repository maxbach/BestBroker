import { SpecialTariffDto } from "./SpecialTariffDto";

export let specialTariffs: SpecialTariffDto[] = [
  {
    name: "Начинающий",
    url: "https://unitedtraders.com/?campaignId=420317",
    imageUrl: require("../assets/UT.svg"),
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
