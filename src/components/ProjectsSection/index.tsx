import { useGlobalContext } from "@/context/store";
import { Projects } from "../Projects";
import * as S from "./styles";

export const ProjectsSection = () => {
  const { projectsData } = useGlobalContext();
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Title>{projectsData.title}</S.Title>
          <Projects projects={projectsData.items} />
        </S.Wrapper>
      </S.Container>
    </>
  );
};
