import Layout from "@/components/Layout";
import PersonalData from "@/components/personal-account/PersonalData";
import DocumentVerification from "@/components/personal-account/DocumentVerification";
import { useState } from "react";
import {
  PersonalDataContext,
  PersonalDataContextProps,
} from "@/components/Context";
import BookingHistory from "@/components/personal-account/BookingHistory";

export enum PersonalAccountOption {
  PERSONALDATA,
  DOCUMENTVERIFICATION,
  BOOKINGHISTORY,
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

  // if (!localStorage.getItem('nepeshkom_cliendId') || !localStorage.getItem('nepeshkom_phoneNumber'))
  //   return (
  //     <Layout>
  //         <p>asdasdasd</p>
  //       </Layout>
  //   )

  switch (selectedOption) {
    case PersonalAccountOption.PERSONALDATA:
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

    case PersonalAccountOption.DOCUMENTVERIFICATION:
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
    case PersonalAccountOption.BOOKINGHISTORY:
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
