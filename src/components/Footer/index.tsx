import { Link } from "react-scroll";
import { SocialBox } from "../SocialBox";
import * as S from "./styles";

export const Footer = () => {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <Link
            activeClass="active"
            to="head"
            spy={true}
            smooth={true}
            duration={500}
          >
            <S.Title>MTS</S.Title>
          </Link>
          <SocialBox />
        </S.Wrapper>
      </S.Container>
    </>
  );
};
