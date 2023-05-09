import {
  Dispatch,
  SetStateAction,
  createContext,
} from "react";
import { PersonalAccountOption } from "../pages/personal-account";

export interface PersonalDataContextProps {
  selectedOption: PersonalAccountOption;
  setSelectedOption: Dispatch<
    SetStateAction<PersonalAccountOption>
  >;
}

const PersonalDataContext =
  createContext<PersonalDataContextProps>({
    selectedOption: 0,
    setSelectedOption: () => undefined,
  });

export default PersonalDataContext;
