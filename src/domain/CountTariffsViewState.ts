import { TariffDto } from "./TariffDto";
import { TariffViewState } from "../components/viewstate/TariffViewState";
import { tariffs } from "./Tariffs";
import { SpecialTariffDto } from "./SpecialTariffDto";
import { specialTariffs } from "./SpecialTariffs";

export function countTariffs(monthSum: number): TariffViewState[] {
  let tariffViewStates = tariffs
  .filter(function(tariff) {
    return tariff.isShow
  })
  .map(function(tariff) {
    return buildViewStateForTariff(tariff, countCommission(tariff, monthSum), monthSum);
  }).sort(function(a, b) {
      return Number.parseFloat(a.commission) - Number.parseFloat(b.commission)
  });

  specialTariffs.forEach(function(tariff: SpecialTariffDto) {
    let viewState = buildViewStateForSpecialTariff(tariff, monthSum)

    tariffViewStates.splice(tariff.position, 0, viewState)
  })

  return tariffViewStates;
}

function countCommission(tariff: TariffDto, monthSum: number): number {
  return Math.max(
    tariff.depositoryFee + tariff.minMonthCommission,
    monthSum * tariff.commissionProcent +
      tariff.subscriptionFee +
      tariff.depositoryFee
  );
}

function buildViewStateForTariff(dto: TariffDto, commission: number, monthSum: number): TariffViewState {
  return {
    commission: formatCommission(commission, dto.depositoryCommissionProcent),
    imageUrl: dto.imageUrl,
    name: dto.name,
    url: dto.url,
    conditionsUrl: dto.conditionsUrl,
    broker: dto.brokerName,
    userInput: monthSum,
    alertInfo: fillAlert(dto),
    commissionFrequency: null
  };
}

function buildViewStateForSpecialTariff(dto: SpecialTariffDto, monthSum: number): TariffViewState {
  return {
    commission: dto.getTextToShow(monthSum),
    imageUrl: dto.imageUrl,
    name: dto.name,
    url: dto.url,
    conditionsUrl: dto.conditionsUrl,
    broker: dto.brokerName,
    userInput: monthSum,
    alertInfo: dto.alertText,
    commissionFrequency: dto.commissionFrequency
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
