import { TariffDto } from "./TariffDto";
import { TariffViewState } from "../components/viewstate/TariffViewState";
import { tariffs } from "./GetTariffUseCase";

export function countTariffs(monthSum: number): TariffViewState[] {
  return tariffs.map(function(tariff) {
    return buildViewState(tariff, countCommission(tariff, monthSum));
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

function buildViewState(dto: TariffDto, commission: number): TariffViewState {
  return {
    commission: formatCommission(commission),
    imageUrl: dto.imageUrl,
    name: dto.name,
    url: dto.url,
    conditionsUrl: dto.conditionsUrl
  };
}

function formatCommission(monthSum: number): string {
  if (isNaN(monthSum)) {
    return "Incorrect input";
  }
  return monthSum.toFixed(1);
}
