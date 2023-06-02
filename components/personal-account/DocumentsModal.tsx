import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";

type Fields = string[];

type verificationParams = {
  ClientIntegrationId?: string;
  ClientPhone?: string | null;
  RequestSource?: string;
  DocumentsUrls: string[];
  RequestDealTypeId: string | number;
  RequestFilialId: string | number;
};

export default function DocumentsModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  // state

  const [documentInputDatas, setDocumentInputDatas] =
    useState<Fields>([""]);

  //

  const handleSubmitDocuments = () => {
    const baseUrl = process.env
      .NEXT_PUBLIC_ADD_VERIFICATION_ROUTE as string;
    const params: verificationParams = {
      ClientPhone: localStorage.getItem(
        "nepeshkom_phoneNumber"
      ),
      DocumentsUrls: documentInputDatas,
      RequestDealTypeId: 62841,
      RequestFilialId: 62793,
    };
    axios.post(baseUrl, params);
  };

  function handleChangeData(index: number, value: string) {
    const updated = [...documentInputDatas];
    updated[index] = value;
    setDocumentInputDatas(() => updated);
  }

  function handleAddDocument() {
    if (documentInputDatas.length < 3) {
      setDocumentInputDatas((prev) => [...prev, ""]);
    }
  }

  function handleRemoveDocument(id: number) {
    const updated = [...documentInputDatas];
    updated.splice(id, 1);
    setDocumentInputDatas(updated);
  }

  return (
    <div className="fixed w-[40%] h-auto bg-darkgray p-8 rounded-[16px] bottom-2/4">
      <button
        className="absolute top-5 right-5"
        onClick={() => setIsOpen(() => false)}
      >
        <img src="/icons/redcross.svg" />
      </button>
      <div className=" mb-[6.5%]">
        <h1 className=" text-[36px] font-bold text-white">
          Паспортные данные
        </h1>
        <p className=" font-medium text-[16px] text-halfblack">
          Сотрудничая с нами, Вы повышаете качество и
          ценность своей собственности
        </p>
      </div>

      <div className="grid auto-rows-max gap-5 w-[100%] mb-[3.125vw]">
        {documentInputDatas.map((el, index) => {
          if (index === 0) {
            return (
              <div key={index} className="flex flex-row">
                <div className="flex-row w-[95%]">
                  <div className="flex flex-row bg-white h-[52px] w-full rounded-[12px] items-center mr-3">
                    <input
                      placeholder="Ссылка на документ*"
                      type="text"
                      className="w-full h-full rounded-[12px] px-4"
                      onChange={(event) => {
                        handleChangeData(
                          index,
                          event.target.value
                        );
                      }}
                      value={el}
                    />
                  </div>
                </div>
                <button
                  className="ml-2"
                  onClick={() => handleAddDocument()}
                >
                  <div className="flex justify-center items-center bg-white h-full w-[52px] rounded-[14px]">
                    <img src="/icons/redplus.svg" />
                  </div>
                </button>
              </div>
            );
          } else {
            return (
              <div key={index} className="flex flex-row">
                <div className="flex-row w-[95%]">
                  <div className="flex flex-row bg-white h-[52px] w-full rounded-[12px] items-center mr-3">
                    <input
                      placeholder="Ссылка на документ*"
                      type="text"
                      className="w-full h-full rounded-[12px] px-4"
                      onChange={(event) => {
                        handleChangeData(
                          index,
                          event.target.value
                        );
                      }}
                      value={el}
                    />
                  </div>
                </div>
                <button
                  className="ml-2"
                  onClick={() =>
                    handleRemoveDocument(index)
                  }
                >
                  <div className="flex justify-center items-center bg-white h-full w-[52px] rounded-[14px]">
                    <img src="/icons/redminus.svg" />
                  </div>
                </button>
              </div>
            );
          }
        })}
      </div>
      <div className="flex flex-row gap-[1.04vw]">
        {" "}
        <button
          className="w-[7.35vw] py-4 px-7 h-[2.7vw] rounded-[14px] bg-primary 
        text-white font-bold text-[16px] min-w-[140px] min-h-[50px]"
          onClick={() => handleSubmitDocuments()}
        >
          Отправить
        </button>
        <button
          className="w-[7.35vw] py-4 px-7 h-[2.7vw] rounded-[14px] bg-white 
        text-primary font-bold text-[16px] min-w-[140px] min-h-[50px]"
          onClick={() => setIsOpen(() => false)}
        >
          Отмена
        </button>
      </div>
    </div>
  );
}
