export default interface Client {
  Name: {
    FirstName: string;
    LastName: string;
    Patronimic: string;
    Result: string;
  };
  Phones: string[];
  BirthDate: string;
  IntegrationId: string;
  Gender: 1 | 2 | 0;
}
