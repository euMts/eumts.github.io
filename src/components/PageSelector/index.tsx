import * as S from "./styles";

interface TagProps {
  content?: string[];
}

export const PageSelector = ({ content }: TagProps) => {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Item isSelected={true} />
          <S.Item isSelected={false} />
          <S.Item isSelected={false} />
        </S.Wrapper>
      </S.Container>
    </>
  );
};
