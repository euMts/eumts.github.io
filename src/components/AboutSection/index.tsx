import { useEffect, useState } from "react";
import { ProfileCard } from "../ProfileCard";
import { Switch } from "../Switch";
import * as S from "./styles";
import { useGlobalContext } from "@/context/store";

export const AboutSection = () => {
  const { aboutData, lang, changeLang, setLang } = useGlobalContext();

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
      <S.Container id={"about"}>
        <S.Wrapper>
          <Switch active={!(lang === "ptBr")} onClick={handleChangeLang} />
          <ProfileCard />
          <S.TextBox>
            <S.Title>{aboutData.title}</S.Title>
            {aboutData.description.map((item, index) => (
              <S.SubTitle key={index}>{item}</S.SubTitle>
            ))}
          </S.TextBox>
        </S.Wrapper>
      </S.Container>
    </>
  );
};
