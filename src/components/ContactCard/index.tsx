"use client";
import { useEffect, useState } from "react";
import { Input } from "../Input";
import * as S from "./styles";
import { Button } from "../Button";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";
import { validateForm } from "@/utils/validateForm";

interface ContactCardProps {
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  message: string;
  messagePlaceholder: string;
  buttonTitle: string;
  alertMessages: AlertMessagesType;
}

interface AlertMessagesType {
  success: string;
  loading: string;
  incompleteInfo: string;
  shortInput: string;
  invalidEmail: string;
  defaultError: string;
}

export const ContactCard = ({
  name,
  namePlaceholder,
  email,
  emailPlaceholder,
  message,
  messagePlaceholder,
  buttonTitle,
  alertMessages,
}: ContactCardProps) => {
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userMessage, setUserMessage] = useState<string>("");
  const [messageType, setMessageType] = useState<string>("");
  const [alertMessage, setAlertMessage] = useState("");
  const [submitError, setSubmitError] = useState("false");
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleChangeName = (event: any) => {
    setUserName(event.target.value);
  };

  const handleChangeEmail = (event: any) => {
    setUserEmail(event.target.value);
  };

  const handleChangeMessage = (event: any) => {
    setUserMessage(event.target.value);
  };

  const isFormValid = () => {
    const formValid = validateForm({ userName, userEmail, userMessage });

    if (!formValid.error) {
      return true;
    }

    if (formValid.message === "incomplete info") {
      setSubmitError("true");
      setMessageType("incompleteInfo");
      return false;
    }
    if (formValid.message === "short username") {
      setSubmitError("true");
      setMessageType("shortName");
      return false;
    }

    if (formValid.message === "short message") {
      setSubmitError("true");
      setMessageType("shortMessage");
      return false;
    }

    if (formValid.message === "invalid email") {
      setSubmitError("true");
      setMessageType("invalidEmail");
      return false;
    }
  };

  const handleStart = async () => {
    setAlertMessage("");
    setMessageType("");
    setSubmitError("false");

    if (!executeRecaptcha) {
      console.log("not available to execute recaptcha");
      return;
    }

    if (!isFormValid()) {
      return;
    }

    setMessageType("loading");

    const gRecaptchaToken = await executeRecaptcha("inquirySubmit");

    try {
      const response = await axios({
        method: "post",
        url: "/api/email",
        data: { gRecaptchaToken, userName, userEmail, userMessage },
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });

      if (response?.data?.success === true) {
        setSubmitError("false");
        setMessageType("success");
        setUserName("");
        setUserEmail("");
        setUserMessage("");
      } else {
        setSubmitError("true");
        setMessageType("defaultError");
      }
    } catch {
      setSubmitError("true");
      setMessageType("defaultError");
    }
  };

  useEffect(() => {
    if (messageType === "incompleteInfo") {
      setAlertMessage(alertMessages.incompleteInfo);
    }
    if (messageType === "shortName") {
      setAlertMessage(`${name} ${alertMessages.shortInput}`);
    }
    if (messageType === "shortMessage") {
      setAlertMessage(`${message} ${alertMessages.shortInput}`);
    }
    if (messageType === "invalidEmail") {
      setAlertMessage(alertMessages.invalidEmail);
    }
    if (messageType === "loading") {
      setAlertMessage(alertMessages.loading);
    }
    if (messageType === "success") {
      setAlertMessage(alertMessages.success);
    }
    if (messageType === "defaultError") {
      setAlertMessage(alertMessages.defaultError);
    }
    if (messageType === "") {
      setAlertMessage("");
    }
  }, [messageType, alertMessages, alertMessage, message, name]);

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Box>
            <S.Title>{name}</S.Title>
            <Input
              type={"text"}
              value={userName}
              placeholder={namePlaceholder}
              onChange={handleChangeName}
            />
          </S.Box>
          <S.Box>
            <S.Title>{email}</S.Title>
            <Input
              type={"email"}
              value={userEmail}
              placeholder={emailPlaceholder}
              onChange={handleChangeEmail}
            />
          </S.Box>
          <S.Box>
            <S.Title>{message}</S.Title>
            <Input
              maxLength={2500}
              value={userMessage}
              placeholder={messagePlaceholder}
              onChange={handleChangeMessage}
              isTextArea={true}
            />
          </S.Box>
          <S.Box>
            <Button label={buttonTitle} onClick={handleStart} />
            <S.UnderMessage $isRed={submitError}>{alertMessage}</S.UnderMessage>
          </S.Box>
        </S.Wrapper>
      </S.Container>
    </>
  );
};
