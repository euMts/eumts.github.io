import { Suspense } from "react";
import { AboutSection } from "../AboutSection";
import { ContactSection } from "../ContactSection";
import { FloatingBtn } from "../FloatingBtn";
import { Footer } from "../Footer";
import { HeadSection } from "../HeadSection";
import { ProjectsSection } from "../ProjectsSection";
import * as S from "./styles";

export const HomePage = () => {
  return (
    <>
      <S.Container>
        <HeadSection />
        <Suspense>
          <AboutSection />
        </Suspense>
        <ProjectsSection />
        <ContactSection />
        <Footer />
        {/* <FloatingBtn /> */}
      </S.Container>
    </>
  );
};
