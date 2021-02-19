import { TariffDto } from "./TariffDto";

export function getTariffs(monthSum: string): TariffDto[] {
    let monthSumNum = +monthSum
    return [
        new TariffDto(formatCommission(monthSumNum / 10.0), 'https://www.tinkoff.ru', "Best", require("../assets/tinkoff-logo.svg"), "Тинькофф"),
        new TariffDto(formatCommission(monthSumNum / 15.0), "https://www.tinkoff.ru", "Best", "http://toplogos.ru/images/logo-tinkoff-bank.png", "Тинькофф"),
        new TariffDto(formatCommission(monthSumNum / 20.0), "https://www.tinkoff.ru", "Best", "http://toplogos.ru/images/logo-tinkoff-bank.png", "Тинькофф"),
        new TariffDto(formatCommission(monthSumNum / 25.0), "https://www.tinkoff.ru", "Best", "http://toplogos.ru/images/logo-tinkoff-bank.png", "Тинькофф"),
        new TariffDto(formatCommission(monthSumNum / 30.0), "https://www.tinkoff.ru", "Best", "http://toplogos.ru/images/logo-tinkoff-bank.png", "Тинькофф")
    ]
}

function formatCommission(monthSum: number): string {
    if (isNaN(monthSum)) {
        return "Incorrect input"
    }
    return monthSum.toFixed(1)
}