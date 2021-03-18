export interface SpecialTariffDto {
    name: string,
    url: string,
    imageUrl: string,
    conditionsUrl: string,
    brokerName: string,
    getTextToShow: (userInput: number) => string,
    position: number,
    alertText: string | null,
    isShow: boolean,
    commissionFrequency: string
}
