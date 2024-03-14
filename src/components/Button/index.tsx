"use client";
import * as S from "./styles";

interface MyButtonInterface {
  label: string;
  onClick: () => void;
  type?: any;
  value?: string;
}

export const Button = ({ label, onClick, type, value }: MyButtonInterface) => {
  return (
    <>
      <div>
        <S.MyButton type={type} value={value} onClick={onClick}>
          {label}
        </S.MyButton>
      </div>
    </>
  );
};
