export default interface Request {
  Id: number;
  // строковый номер заявки
  Number: string;
  CreationDate: string;
  Service: string;
  //Код типа заявки (который был использован при добавлении заявки)
  DealTypeId: number | string;
  ApprovalStatus: string;
  RequestState: string;
  RequestWorkingState: string | number;
  RejectStatus: string;
  CurrentStep?: string;
  Steps?: object;
  ContractIds: string[];
  AutoId: string | string[];
  RentFromTime: Date | string;
  RentToTime: Date | string;
  RentSum: number | string;
  CurrentPrice: number | string;
  BasePrice: number | string;
  DeliveryAddress: string;
  ReturnAddress: string;
}
