import { TariffDto } from "./TariffDto";
import { TariffViewState } from "../components/viewstate/TariffViewState";
import { tariffs } from "./Tariffs";

export function countTariffs(monthSum: number): TariffViewState[] {
  return tariffs
  .filter(function(tariff) {
    return tariff.isShow
  })
  .map(function(tariff) {
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
    commission: formatCommission(commission, dto.depositoryCommissionProcent),
    imageUrl: dto.imageUrl,
    name: dto.name,
    url: dto.url,
    conditionsUrl: dto.conditionsUrl,
    broker: dto.brokerName,
    userInput: monthSum,
    alertInfo: fillAlert(dto)
  };
}

function formatCommission(monthSum: number, depositoryCommissionProcent: number): string {
  if (isNaN(monthSum)) {
    return "Incorrect input";
  }
  let mainCommission = monthSum.toFixed(0) + " ₽"
  if (depositoryCommissionProcent > 0) {
    return mainCommission + " + " + depositoryCommissionProcent + "%"
  } else {
    return mainCommission
  }
}

function fillAlert(dto: TariffDto): string | null {
  if (dto.depositoryCommissionProcent > 0) {
    return "Депозитарная комиссия, в процентах годовых. Брокер берет процент за хранение акций на счету."
  } else {
    return null
  }
}
