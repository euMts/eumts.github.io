import Image from "next/image";
import * as S from "./styles";
import { SlPaypal } from "react-icons/sl";

interface TagProps {
  type: string;
  href: string;
}

export const PaymentButton = ({ type, href }: TagProps) => {
  return (
    <>
      <S.Container href={href} target="_blank" rel="noreferrer">
        <S.Wrapper $paypal={type === "Paypal"}>
          {type === "Paypal" ? (
            <SlPaypal
              style={{ width: "30px", height: "25px", color: "white" }}
            />
          ) : (
            <Image
              src={"/images/png/mercadoPago.png"}
              alt={"icone mercado pago"}
              width={30}
              height={25}
              style={{ pointerEvents: "none" }}
            />
          )}
          <S.Title>{type}</S.Title>
        </S.Wrapper>
      </S.Container>
    </>
  );
};
