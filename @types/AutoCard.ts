import XImage from "./XImage";

export default interface AutoCard {
  //код авто в базе данных
  ItemID: number;
  //код модели
  ModelId: number;
  //произвольный код для пользовательских значений
  CustomCode1: "";
  //произвольный код для пользовательских значений
  CustomCode2: "";
  //регистрационый знак
  GosNumber: "";
  //марка модель автомобиля
  MarkaModelString: string;
  //год
  AutoYearSt: number;
  //базовая стоимость
  CurrentCost: number;
  DefaultPrice: number;
  //депозит по умолчанию для данного авто
  Deposit: number;
  //текущая скидка на авто
  Discount: number;
  //базовая стоиомсть со скидкой
  DefaultPriceWithDiscountSt: number;
  //лимит пробега
  MileageLimit: number;
  //лимит пробега + (при повыешнном тарифе по лимиту)
  MileageLimitOver: number;
  //стоимость превыешения лимита по пробегу
  ExcessMileageCost: number;
  //стоимость услуги "обнуление отвественности" заданной для авто
  FranchiseZero: number;
  //стоимость услуги "безлимитный пробег"
  UnlimitCost: number;
  //стоимость услуги увеличенного пробега
  UpperLimitCost: number;
  //стоимость полной франшизы
  FranchiseFull: number;
  //стоимость частичной франшизы
  FranchiseLite: number;
  //класс автмобиля
  AutoClassTitle: string;
  //тип шин
  TiresType: string;
  //начало период текущего контракта (фактическое начало аренды) DateTime
  CurrentContractFromTime: string;
  //планирумая дата завершения текущего контакта (завершение аренды) DateTime
  CurrentContractToTime: string;
  NearestReserveTimeStringSt: string;
  MinReservFromFilialTitle: string;
  RequestReservedStringSt: string;
  //ближайшее свободное время DateTime
  NearestFreeTime: string;
  //цвет
  ModInfoColor: string;
  //кузов
  ModInfoBody: string;
  //привоз (передний, задний, полный)
  ModInfoPrivod: string;
  //тип двигателя (бензин, дизель и т.д.)
  ModInfoEngine: string;
  //объем двигателя
  ModInfoV3: string;
  //трансмиссия
  ModInfoTransmission: string;
  //мощность (число, например 143)
  ModInfoPowerLSValue: number;
  //файлы, прикрпеленные к автомобилю
  Files: XImage[];
}
