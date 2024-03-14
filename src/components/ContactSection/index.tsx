import { useGlobalContext } from "@/context/store";
import { ContactCard } from "../ContactCard";
import * as S from "./styles";
import TypewriterComponent from "typewriter-effect";
import { useEffect, useRef } from "react";

export const ContactSection = () => {
  const { contactData } = useGlobalContext();

  const sectionRef = useRef<HTMLDivElement>(null);

  const route = window.location.href;

  useEffect(() => {
    if (route.includes("#")) {
      const sectionId = route.split("#")[1];
      const sectionElement = document.getElementById(sectionId);

      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [route]);
  return (
    <>
      <S.Container ref={sectionRef} id="contact">
        <S.Title>{contactData.title}</S.Title>
        <S.Wrapper>
          <S.Box $isSecond={true}>
            <S.SubTitle>{contactData.description[0]}</S.SubTitle>
            <S.SubTitle>
              {contactData.description[1]}{" "}
              <TypewriterComponent
                component={"span"}
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: contactData.descriptionFinalWords,
                }}
              />
            </S.SubTitle>
          </S.Box>
          <S.Divider />
          <S.Box>
            <ContactCard
              name={contactData.name.title}
              namePlaceholder={contactData.name.placeholder}
              email={contactData.email.title}
              emailPlaceholder={contactData.email.placeholder}
              message={contactData.message.title}
              messagePlaceholder={contactData.message.placeholder}
              buttonTitle={contactData.buttonTitle}
              alertMessages={contactData.alertMessages}
            />
          </S.Box>
        </S.Wrapper>
      </S.Container>
    </>
  );
};