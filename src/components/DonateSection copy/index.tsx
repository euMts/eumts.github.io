import { DonateCard } from "../DonateCard";
import { Switch } from "../Switch";
import * as S from "./styles";
import { useGlobalContext } from "@/context/store";

export const DonateSection = () => {
  const { aboutData, lang, changeLang } = useGlobalContext();

  const handleChangeLang = () => {
    changeLang();
  };

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <div>
            <Switch
              $donationPage={true}
              active={!(lang === "ptBr")}
              onClick={handleChangeLang}
            />
            <DonateCard />
          </div>
          <S.TextBox>
            <S.Title>Lorem ipsum lorem ipsum lorem ipsum</S.Title>
            <S.SubTitle>
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum{" "}
            </S.SubTitle>
            <S.SubTitle>
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum{" "}
            </S.SubTitle>
          </S.TextBox>
        </S.Wrapper>
      </S.Container>
    </>
  );
};
