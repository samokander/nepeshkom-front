import Layout from "@/components/Layout";
import PersonalData from "@/components/personal-account/PersonalData";
import DocumentVerification from "@/components/personal-account/DocumentVerification";
import { useState } from "react";
import PersonalDataContext, {
  PersonalDataContextProps,
} from "@/components/Context";
import BookingHistory from "@/components/personal-account/BookingHistory";

export enum PersonalAccountOption {
  PERSONAL_DATA,
  DOCUMENT_VERIFICATION,
  BOOKING_HISTORY,
}

export type PersonalDatatOptionProps = {
  children: React.ReactNode;
  contextValue: PersonalDataContextProps;
};

function PersonalDataContextProvider({
  children,
  contextValue,
}: PersonalDatatOptionProps) {
  return (
    <PersonalDataContext.Provider value={contextValue}>
      {children}
    </PersonalDataContext.Provider>
  );
}

export default function PersonalAccount() {
  const [selectedOption, setSelectedOption] =
    useState<PersonalAccountOption>(1);

  switch (selectedOption) {
    case PersonalAccountOption.PERSONAL_DATA:
      return (
        <Layout>
          <PersonalDataContextProvider
            contextValue={{
              selectedOption,
              setSelectedOption,
            }}
          >
            <PersonalData />
          </PersonalDataContextProvider>
        </Layout>
      );

    case PersonalAccountOption.DOCUMENT_VERIFICATION:
      return (
        <Layout>
          <PersonalDataContextProvider
            contextValue={{
              selectedOption,
              setSelectedOption,
            }}
          >
            <DocumentVerification />
          </PersonalDataContextProvider>
        </Layout>
      );
    case PersonalAccountOption.BOOKING_HISTORY:
      return (
        <Layout>
          <PersonalDataContextProvider
            contextValue={{
              selectedOption,
              setSelectedOption,
            }}
          >
            <BookingHistory />
          </PersonalDataContextProvider>
        </Layout>
      );

    default:
      return <></>;
  }
}
