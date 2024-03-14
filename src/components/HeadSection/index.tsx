import * as S from "./styles";
import { Link } from "react-scroll";
import { getDate } from "@/utils/getDate";

export const HeadSection = () => {
  const { day, month, year } = getDate();

  return (
    <>
      <S.Container id="head">
        <S.Wrapper>
          <meta name="format-detection" content="telephone=no" />
          <S.Title>MATHEUS TEM PASS</S.Title>
          <S.SubTitle>{`${day} - ${month} - ${year}`}</S.SubTitle>
          <S.ArrowBox>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={700}
            >
              <S.Arrow />
            </Link>
          </S.ArrowBox>
        </S.Wrapper>
      </S.Container>
    </>
  );
};
