type carInfoProps = {
  features: featuresType;
  equipment: equipmentType;
};

type featuresType = {
  [key: string]: defaultField;
  brand: defaultField;
  model: defaultField;
  year_of_manufacture: defaultField;
  color: defaultField;
  body: defaultField;
  drive: defaultField;
  engine_displacementd: defaultField;
  gearbox: defaultField;
  engine_power: defaultField;
  fuel: defaultField;
  steering_wheel: defaultField;
  insurance: defaultField;
};

type equipmentType = {
  [key: string]: defaultField;
  conditioner: defaultField;
  alarm_and_autorun: defaultField;
  multimedia: defaultField;
  tires: defaultField;
  tinting: defaultField;
};

type defaultField = {
  title: string;
  data: string;
};

type accordionProps = {
  header: string;
  faq?: defaultField[];
};

type bookingProps = {
  carId: string | string[] | undefined;
};
