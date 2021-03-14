export interface TariffDto {
    name: string,
    url: string,
    imageUrl: string,
    conditionsUrl: string,
    minSumToOpen: number | null,
    commissionProcent: number,
    minMonthCommission: number,
    depositoryFee: number,
    subscriptionFee: number,
    brokerName: string,
    isShow: boolean
}
