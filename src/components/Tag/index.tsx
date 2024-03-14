import * as S from "./styles";

interface TagProps {
  content: string[];
}

export const Tag = ({ content }: TagProps) => {
  return (
    <>
      <S.Container>
        {content.map((item, index) => (
          <S.Wrapper key={index}>
            <S.Title>{item}</S.Title>
          </S.Wrapper>
        ))}
      </S.Container>
    </>
  );
};
