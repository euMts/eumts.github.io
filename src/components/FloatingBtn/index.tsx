import { Link } from "react-scroll";
import * as S from "./styles";
import { useEffect, useState } from "react";

export const FloatingBtn = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollY(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY >= 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <>
      <S.Container $visible={visible}>
        <Link
          activeClass="active"
          to="head"
          spy={true}
          smooth={true}
          duration={500}
        >
          <S.Wrapper $visible={visible}>
            <S.Arrow />
          </S.Wrapper>
        </Link>
      </S.Container>
    </>
  );
};
