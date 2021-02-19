export class TariffDto {
    commission: number; 
    url: string;
    name: string;
    imageUrl: string;
    broker: string;

    constructor(commission: number, url: string, name: string, imageUrl: string, broker: string) {
        this.commission = commission
        this.url = url
        this.name = name
        this.imageUrl = imageUrl
        this.broker = broker
    }
}

export function getTariffs(): TariffDto[] {
    return [
        new TariffDto(10.0, 'https://www.tinkoff.ru', "Best", require("../assets/tinkoff-logo.svg"), "Тинькофф"),
        new TariffDto(15.0, "https://www.tinkoff.ru", "Best", "http://toplogos.ru/images/logo-tinkoff-bank.png", "Тинькофф"),
        new TariffDto(20.0, "https://www.tinkoff.ru", "Best", "http://toplogos.ru/images/logo-tinkoff-bank.png", "Тинькофф"),
        new TariffDto(25.0, "https://www.tinkoff.ru", "Best", "http://toplogos.ru/images/logo-tinkoff-bank.png", "Тинькофф"),
        new TariffDto(30.0, "https://www.tinkoff.ru", "Best", "http://toplogos.ru/images/logo-tinkoff-bank.png", "Тинькофф")
    ]
}