import { useEffect } from "react";
import { ProfileCard } from "../ProfileCard";
import { Switch } from "../Switch";
import * as S from "./styles";
import { useGlobalContext } from "@/context/store";
import { useSearchParams } from "next/navigation";

export const AboutSection = () => {
  const { aboutData, lang, changeLang, setLang } = useGlobalContext();

  const handleChangeLang = () => {
    changeLang();
  };

  const searchParams = useSearchParams();
  let paramLang = searchParams.get("lang");

  useEffect(() => {
    if (paramLang) {
      setLang(paramLang);
    }
  }, [paramLang, setLang]);

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
