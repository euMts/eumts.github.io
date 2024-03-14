import React, { useEffect, useState } from "react";
import { ProfileCard } from "../ProfileCard";
import { Switch } from "../Switch";
import * as S from "./styles";
import { useGlobalContext } from "@/context/store";
import { DonateCard } from "../DonateCard";

export const DonateSection = () => {
  const { donateData, lang, changeLang, setLang } = useGlobalContext();

  const handleChangeLang = () => {
    changeLang();
  };

  useEffect(() => {
    if (window.location.href.includes("?lang=enUs")) {
      setLang("enUs");
    }
    if (window.location.href.includes("?lang=ptBr")) {
      setLang("ptBr");
    }
  }, [window.location.href]);

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <Switch
            $donationPage={true}
            active={!(lang === "ptBr")}
            onClick={handleChangeLang}
          />
          <DonateCard />
          <S.TextBox>
            <S.Title>{donateData.thanks}</S.Title>
            {donateData.description.map((item, index) => {
              const words = item.split(" "); // Separando a string em palavras

              if (index === donateData.description.length - 1) {
                const lastWord = words.pop();
                return (
                  <S.SubTitle key={index}>
                    {words.join(" ")}{" "}
                    <S.ClickableText
                      href={`http://localhost:3000?lang=${lang}#contact`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {lastWord}
                    </S.ClickableText>{" "}
                  </S.SubTitle>
                );
              } else {
                return <S.SubTitle key={index}>{item}</S.SubTitle>;
              }
            })}
          </S.TextBox>
        </S.Wrapper>
      </S.Container>
    </>
  );
};
