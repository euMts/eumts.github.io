import Image from "next/image";
import { Tag } from "../Tag";
import * as S from "./styles";

interface ProjectCardProps {
  name: string;
  desc: string;
  content: string[];
  url: string;
  screenshotUrl: string;
}

export const ProjectCard = ({
  name,
  desc,
  content,
  url,
  screenshotUrl,
}: ProjectCardProps) => {
  return (
    <>
      <S.Container href={url} target="_blank" rel="noreferrer">
        <S.Wrapper>
          <S.Screenshot
            src={screenshotUrl}
            bgright={name.includes("ChatGPT")}
          />
          <S.Title>{name}</S.Title>
          <S.Subtitle>{desc}</S.Subtitle>
          <Tag content={content} />
        </S.Wrapper>
      </S.Container>
    </>
  );
};
