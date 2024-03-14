import * as S from "./styles";
import { useEffect, useRef, useState } from "react";

interface MyTextFieldInterface {
  value: string;
  onChange: any;
  isTextArea?: boolean;
  placeholder: string;
  type?: string | undefined;
  maxLength?: number;
}

export const Input = ({
  value,
  onChange,
  placeholder,
  isTextArea = false,
  type,
  maxLength = 100,
}: MyTextFieldInterface) => {
  return (
    <>
      {!isTextArea ? (
        <S.MyInput
          maxLength={maxLength}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          // onKeyDown={handleKeyDown}
        />
      ) : (
        <S.MyTextArea
          maxLength={maxLength}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </>
  );
};
