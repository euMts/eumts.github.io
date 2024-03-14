import * as S from "./styles";
import { ProjectCard } from "../ProjectCard";

type ProjectsDataType = {
  projects: ProjectDataType[];
};

type ProjectDataType = {
  screenshotUrl: string;
  url: string;
  name: string;
  desc: string;
  lang: string[];
};

export const Projects = ({ projects }: ProjectsDataType) => {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          {projects.map((item, index: number) => (
            <ProjectCard
              key={index}
              url={item.url}
              screenshotUrl={item.screenshotUrl}
              name={item.name}
              desc={item.desc}
              content={item.lang}
            />
          ))}
        </S.Wrapper>
        {/* <PageSelector /> */}
      </S.Container>
    </>
  );
};
