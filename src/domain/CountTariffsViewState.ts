import { TariffDto } from "./TariffDto";
import { TariffViewState } from "../components/viewstate/TariffViewState";
import { tariffs } from "./Tariffs";

export function countTariffs(monthSum: number): TariffViewState[] {
  return tariffs.map(function(tariff) {
    return buildViewState(tariff, countCommission(tariff, monthSum), monthSum);
  }).sort(function(a, b) {
      return Number.parseFloat(a.commission) - Number.parseFloat(b.commission)
  });
}

function countCommission(tariff: TariffDto, monthSum: number): number {
  return Math.max(
    tariff.depositoryFee + tariff.minMonthCommission,
    monthSum * tariff.commissionProcent +
      tariff.subscriptionFee +
      tariff.depositoryFee
  );
}

function buildViewState(dto: TariffDto, commission: number, monthSum: number): TariffViewState {
  return {
    commission: formatCommission(commission),
    imageUrl: dto.imageUrl,
    name: dto.name,
    url: dto.url,
    conditionsUrl: dto.conditionsUrl,
    broker: dto.brokerName,
    userInput: monthSum
  };
}

function formatCommission(monthSum: number): string {
  if (isNaN(monthSum)) {
    return "Incorrect input";
  }
  return monthSum.toFixed(1);
}
