import { Suspense } from "react";
import { DonateSection } from "../DonateSection";
import * as S from "./styles";

export const DonatePage = () => {
  return (
    <>
      <S.Container>
        <Suspense>
          <DonateSection />
        </Suspense>
      </S.Container>
    </>
  );
};
