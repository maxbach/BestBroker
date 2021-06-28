import { TariffDto } from "./TariffDto";

export let tariffs: TariffDto[] = [
  {
    name: "S",
    url: "https://www.alfadirect.ru/?platform=id246",
    imageUrl: require("../assets/alfa.svg"),
    conditionsUrl: "https://www.alfadirect.ru/uploads/%D0%A2%D0%B0%D1%80%D0%B8%D1%84%D0%BD%D1%8B%D0%B9%20%D0%BF%D0%BB%D0%B0%D0%BD%20S.pdf",
    commissionProcent: 0.003,
    depositoryCommissionProcent: 0,
    minSumToOpen: null,
    subscriptionFee: 0,
    depositoryFee: 0,
    minMonthCommission: 0,
    brokerName: "Альфа-Банк",
    isShow: true
  },
  {
    name: "Альфа-Трейдер",
    url: "https://www.alfadirect.ru/?platform=id246",
    imageUrl: require("../assets/alfa.svg"),
    conditionsUrl: "https://www.alfadirect.ru/uploads/%D0%A2%D0%9F%20%D0%90%D0%BB%D1%8C%D1%84%D0%B0-%D0%A2%D1%80%D0%B5%D0%B9%D0%B4%D0%B5%D1%80.pdf",
    commissionProcent: 0.00049,
    depositoryCommissionProcent: 0.06,
    minSumToOpen: null,
    subscriptionFee: 0,
    depositoryFee: 0,
    minMonthCommission: 0,
    brokerName: "Альфа-Банк",
    isShow: true
  },
  {
    name: "Инвестор",
    url: "",
    imageUrl: require("../assets/bks.svg"),
    conditionsUrl: "https://broker.ru/f/nbr/tariffs/tariff_investor.pdf?v7",
    commissionProcent: 0.001,
    depositoryCommissionProcent: 0,
    minSumToOpen: null,
    subscriptionFee: 0,
    depositoryFee: 177,
    minMonthCommission: 0,
    brokerName: "БКС",
    isShow: false
  },
  {
    name: "Трейдер",
    url: "",
    imageUrl: require("../assets/bks.svg"),
    conditionsUrl: "https://broker.ru/f/nbr/tariffs/tariff_traider.pdf?v4",
    commissionProcent: 0.0006,
    depositoryCommissionProcent: 0,
    minSumToOpen: null,
    subscriptionFee: 199,
    depositoryFee: 177,
    minMonthCommission: 0,
    brokerName: "БКС",
    isShow: false
  },
  {
    name: "Мой онлайн",
    url: "",
    imageUrl: require("../assets/vtb.svg"),
    conditionsUrl: "https://broker.vtb.ru/tariffs/",
    commissionProcent: 0.0006,
    depositoryCommissionProcent: 0,
    minSumToOpen: null,
    subscriptionFee: 0,
    depositoryFee: 0,
    minMonthCommission: 0,
    brokerName: "ВТБ",
    isShow: false
  },
  {
    name: "Инвестор стандарт",
    url: "",
    imageUrl: require("../assets/vtb.svg"),
    conditionsUrl: "https://broker.vtb.ru/tariffs/",
    commissionProcent: 0.00051,
    depositoryCommissionProcent: 0,
    minSumToOpen: null,
    subscriptionFee: 0,
    depositoryFee: 150,
    minMonthCommission: 0,
    brokerName: "ВТБ",
    isShow: false
  },
  {
    name: "Профессиональный стандарт",
    url: "",
    imageUrl: require("../assets/vtb.svg"),
    conditionsUrl: "https://broker.vtb.ru/tariffs/",
    commissionProcent: 0.00057,
    depositoryCommissionProcent: 0,
    minSumToOpen: null,
    subscriptionFee: 0,
    depositoryFee: 150,
    minMonthCommission: 0,
    brokerName: "ВТБ",
    isShow: false
  },
  {
    name: "FreeTrade",
    url: "https://www.finam.ru/open/order/russia/?AgencyBackOfficeID=1&agent=71d808c6-a9bd-4b01-b0ec-96ab6cc9be24&utm_source=bestbroker",
    imageUrl: require("../assets/finam.png"),
    conditionsUrl: "https://www.finam.ru/commissionrates/unified/freetrade",
    commissionProcent: 0.0001,
    depositoryCommissionProcent: 0,
    minSumToOpen: null,
    subscriptionFee: 0,
    depositoryFee: 0,
    minMonthCommission: 0,
    brokerName: "ФИНАМ",
    isShow: true
  },
  {
    name: "Консультационный",
    url: "https://www.finam.ru/open/order/russia/?AgencyBackOfficeID=1&agent=71d808c6-a9bd-4b01-b0ec-96ab6cc9be24&utm_source=bestbroker",
    imageUrl: require("../assets/finam.png"),
    conditionsUrl: "https://www.finam.ru/commissionrates/unified/consult",
    commissionProcent: 0.00108,
    depositoryCommissionProcent: 0,
    minSumToOpen: 30000,
    subscriptionFee: 0,
    depositoryFee: 177,
    minMonthCommission: 177,
    brokerName: "ФИНАМ",
    isShow: true
  },
  {
    name: "Дневной",
    url: "https://www.finam.ru/open/order/russia/?AgencyBackOfficeID=1&agent=71d808c6-a9bd-4b01-b0ec-96ab6cc9be24&utm_source=bestbroker",
    imageUrl: require("../assets/finam.png"),
    conditionsUrl: "https://www.finam.ru/commissionrates/unified/daily",
    commissionProcent: 0.00035,
    depositoryCommissionProcent: 0,
    minSumToOpen: 30000,
    subscriptionFee: 0,
    depositoryFee: 177,
    minMonthCommission: 177,
    brokerName: "ФИНАМ",
    isShow: true
  },
  {
    name: "Самостоятельный",
    url: "",
    imageUrl: require("../assets/sber.svg"),
    conditionsUrl: "https://www.sberbank.ru/common/img/uploaded/broker/01122020_%D1%81%D0%B0%D0%BC%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9.pdf",
    commissionProcent: 0.0006,
    depositoryCommissionProcent: 0,
    minSumToOpen: null,
    subscriptionFee: 0,
    depositoryFee: 0,
    minMonthCommission: 0,
    brokerName: "Сбербанк",
    isShow: false
  },
  {
    name: "КИТ-Универсал",
    url: "",
    imageUrl: require("../assets/kit.png"),
    conditionsUrl: "https://brokerkf.ru/chastnym_investoram/trading-on-russian-stock-exchanges/rates/rates-broker-in-stock-market/",
    commissionProcent: 0.0005,
    depositoryCommissionProcent: 0,
    minSumToOpen: null,
    subscriptionFee: 0,
    depositoryFee: 0,
    minMonthCommission: 200,
    brokerName: "КИТ Финанс",
    isShow: false
  },
  {
    name: "Стандарт",
    url: "",
    imageUrl: require("../assets/gpb.svg"),
    conditionsUrl: "https://www.gazprombank.ru/personal/brokerage_service/trading_in_markets/41543/",
    commissionProcent: 0.00085,
    depositoryCommissionProcent: 0,
    minSumToOpen: null,
    subscriptionFee: 0,
    depositoryFee: 0,
    minMonthCommission: 0,
    brokerName: "ГазпромБанк",
    isShow: false
  },
  {
    name: "Первый",
    url: "",
    imageUrl: require("../assets/aton.png"),
    conditionsUrl: "https://www.aton.ru/rates/",
    commissionProcent: 0.00035,
    depositoryCommissionProcent: 0,
    minSumToOpen: null,
    subscriptionFee: 0,
    depositoryFee: 150,
    minMonthCommission: 0,
    brokerName: "АТОН",
    isShow: false
  },
  {
    name: "Инвестор",
    url: "",
    imageUrl: require("../assets/psb.svg"),
    conditionsUrl: "https://www.psbank.ru/Personal/Wealth/Markets",
    commissionProcent: 0.0025,
    depositoryCommissionProcent: 0,
    minSumToOpen: null,
    subscriptionFee: 0,
    depositoryFee: 0,
    minMonthCommission: 0,
    brokerName: "ПромСвязьБанк",
    isShow: false
  },
  {
    name: "Профессионал",
    url: "",
    imageUrl: require("../assets/psb.svg"),
    conditionsUrl: "https://www.psbank.ru/Personal/Wealth/Markets",
    commissionProcent: 0.003,
    depositoryCommissionProcent: 0,
    minSumToOpen: null,
    subscriptionFee: 0,
    depositoryFee: 0,
    minMonthCommission: 0,
    brokerName: "ПромСвязьБанк",
    isShow: false
  },
  {
    name: "Всё включено",
    url: "https://open-broker.ru/roa/?aid=40581",
    imageUrl: require("../assets/otkritie.svg"),
    conditionsUrl: "https://open-broker.ru/current_broker_tarif",
    commissionProcent: 0.0005,
    depositoryCommissionProcent: 0,
    minSumToOpen: null,
    subscriptionFee: 0,
    depositoryFee: 0,
    minMonthCommission: 0,
    brokerName: "Открытие",
    isShow: true
  },
  {
    name: "Инвестиционный",
    url: "https://open-broker.ru/roa/?aid=40581",
    imageUrl: require("../assets/otkritie.svg"),
    conditionsUrl: "https://open-broker.ru/current_broker_tarif",
    commissionProcent: 0.00035,
    depositoryCommissionProcent: 0,
    minSumToOpen: null,
    subscriptionFee: 0,
    depositoryFee: 0,
    minMonthCommission: 150,
    brokerName: "Открытие",
    isShow: true
  },
  {
    name: "Активный",
    url: "",
    imageUrl: require("../assets/alor.png"),
    conditionsUrl: "https://www.alorbroker.ru/tariffs/stock",
    commissionProcent: 0.0008,
    depositoryCommissionProcent: 0,
    minSumToOpen: 10000,
    subscriptionFee: 0,
    depositoryFee: 150,
    minMonthCommission: 250,
    brokerName: "АЛОР",
    isShow: false
  },
  {
    name: "Фондовый",
    url: "",
    imageUrl: require("../assets/it-invest.svg"),
    conditionsUrl: "https://iticapital.ru/tariffs/brokerage/stock-market/",
    commissionProcent: 0.00035,
    depositoryCommissionProcent: 0,
    minSumToOpen: 30000,
    subscriptionFee: 0,
    depositoryFee: 300,
    minMonthCommission: 0,
    brokerName: "IT Invest",
    isShow: false
  },
  {
    name: "Стандартный",
    url: "https://freedom24.com/invite/?utm_campaign=pfu1174869",
    imageUrl: require("../assets/freedomfinance.svg"),
    conditionsUrl: "https://ffin.ru/upload/docs/02_tarif.pdf",
    commissionProcent: 0.00120,
    depositoryCommissionProcent: 0,
    minSumToOpen: 0,
    subscriptionFee: 0,
    depositoryFee: 0,
    minMonthCommission: 0,
    brokerName: "Фридом Финанс (РФ)",
    isShow: true
  },
  {
    name: "Все включено",
    url: "https://freedom24.com/invite/?utm_campaign=pfu1174869",
    imageUrl: require("../assets/freedomfinance.svg"),
    conditionsUrl: "https://ffin.ru/upload/docs/02_tarif.pdf",
    commissionProcent: 0,
    depositoryCommissionProcent: 0,
    minSumToOpen: 0,
    subscriptionFee: 600,
    depositoryFee: 0,
    minMonthCommission: 0,
    brokerName: "Фридом Финанс (РФ)",
    isShow: true
  },
  {
    name: "Инвестор",
    url: "https://www.tinkoff.ru/sl/5Q5FyLNBhkY",
    imageUrl: require("../assets/tinkoff.svg"),
    conditionsUrl: "https://acdn.tinkoff.ru/static/documents/invest-tariff-fees.pdf",
    commissionProcent: 0.003,
    depositoryCommissionProcent: 0,
    minSumToOpen: null,
    subscriptionFee: 0,
    depositoryFee: 0,
    minMonthCommission: 0,
    brokerName: "Тинькофф",
    isShow: true
  },
  {
    name: "Трейдер",
    url: "https://www.tinkoff.ru/sl/5Q5FyLNBhkY",
    imageUrl: require("../assets/tinkoff.svg"),
    conditionsUrl: "https://acdn.tinkoff.ru/static/documents/invest-tariff-trader.pdf",
    commissionProcent: 0.0005,
    depositoryCommissionProcent: 0,
    minSumToOpen: 0,
    subscriptionFee: 290,
    depositoryFee: 0,
    minMonthCommission: 0,
    brokerName: "Тинькофф",
    isShow: true
  },
  {
    name: "Премиум",
    url: "https://www.tinkoff.ru/sl/5Q5FyLNBhkY",
    imageUrl: require("../assets/tinkoff.svg"),
    conditionsUrl: "https://acdn.tinkoff.ru/static/documents/invest-tariff-premium.pdf",
    commissionProcent: 0.00025,
    depositoryCommissionProcent: 0,
    minSumToOpen: 0,
    subscriptionFee: 3000,
    depositoryFee: 0,
    minMonthCommission: 0,
    brokerName: "Тинькофф",
    isShow: true
  },
  
];