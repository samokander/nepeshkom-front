import {
  Dispatch,
  SetStateAction,
  createContext,
} from "react";
import { PersonalAccountOption } from "../pages/personal-account";
import AutoCard from "@/@types/AutoCard";

export interface PersonalDataContextProps {
  selectedOption: PersonalAccountOption;
  setSelectedOption: Dispatch<
    SetStateAction<PersonalAccountOption>
  >;
  isModalOpen?: boolean;
  setIsModalOpen?: Dispatch<SetStateAction<boolean>>;
  data?: string[];
}

export interface CarInfoContextProps {
  autoInfo: AutoCard;
  setAutoInfo: Dispatch<SetStateAction<AutoCard>>;
}

export const PersonalDataContext =
  createContext<PersonalDataContextProps>({
    selectedOption: 0,
    setSelectedOption: () => undefined,
  });
