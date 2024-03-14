import * as S from "./styles";

interface SwitchProps {
  active: boolean;
  onClick: () => void;
  $donationPage?: boolean;
}

export const Switch = ({
  active,
  onClick,
  $donationPage = false,
}: SwitchProps) => {
  return (
    <>
      <S.Container $donationPage={$donationPage}>
        <S.Wrapper $isActive={active} onClick={onClick}>
          <S.Ball />
        </S.Wrapper>
        <S.Text>BR - US</S.Text>
      </S.Container>
    </>
  );
};
