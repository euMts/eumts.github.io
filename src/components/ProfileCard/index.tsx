import { calcAge } from "@/utils/calcAge";
import * as S from "./styles";
import Image from "next/image";
import { primaryBlack } from "@/styles/colors";
import { SocialBox } from "../SocialBox";
import { useGlobalContext } from "@/context/store";

export const ProfileCard = () => {
  const { userData } = useGlobalContext();
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Picture>
            <Image
              priority
              src={userData.profilePicUrl}
              alt="Matheus Eduardo"
              width={250}
              height={250}
              style={{
                borderRadius: "2rem 0px 2rem 0px",
                backgroundColor: primaryBlack,
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                pointerEvents: "none",
              }}
            />
          </S.Picture>
          <S.OuterBox>
            <S.InfoBox>
              <S.Title>{userData.name}</S.Title>
              <S.SubTitle>{userData.role}</S.SubTitle>
              <S.SubSubTitle>
                {calcAge()} {userData.age}
              </S.SubSubTitle>
            </S.InfoBox>
          </S.OuterBox>
          <SocialBox />
        </S.Wrapper>
      </S.Container>
    </>
  );
};
