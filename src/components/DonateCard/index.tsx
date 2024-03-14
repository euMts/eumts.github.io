import { calcAge } from "@/utils/calcAge";
import * as S from "./styles";
import Image from "next/image";
import { primaryBlack } from "@/styles/colors";
import { SocialBox } from "../SocialBox";
import { useGlobalContext } from "@/context/store";
import { PaymentButton } from "../PaymentButton";

export const DonateCard = () => {
  const { userData, donateData, lang } = useGlobalContext();
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
              <S.Title>{donateData.makePayment}</S.Title>
            </S.InfoBox>
            <S.SubTitle>{donateData.choosePlatform}</S.SubTitle>
          </S.OuterBox>
          <S.ButtonArea>
            {/* https://www.paypal.com/donate/?business=9JLBAMGH5985E&no_recurring=0&item_name=Thank+you%21&currency_code=USD */}
            <PaymentButton
              type={"Mercado Pago"}
              href={"https://link.mercadopago.com.br/matheusetp"}
            />
            <PaymentButton
              type={"Paypal"}
              href={
                lang === "ptBr"
                  ? "https://www.paypal.com/donate/?business=9JLBAMGH5985E&no_recurring=0&item_name=Obrigado%21&currency_code=BRL"
                  : "https://www.paypal.com/donate/?business=9JLBAMGH5985E&no_recurring=0&item_name=Thank+you%21&currency_code=USD"
              }
            />
          </S.ButtonArea>
        </S.Wrapper>
      </S.Container>
    </>
  );
};
