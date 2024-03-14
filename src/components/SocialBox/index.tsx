import * as S from "./styles";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { useGlobalContext } from "@/context/store";

export const SocialBox = () => {
  const { userData } = useGlobalContext();
  return (
    <>
      <S.SocialBox>
        <S.IconBox
          href={`mailto:${userData.emailUrl}`}
          target="_blank"
          rel="noreferrer"
        >
          <MdOutlineEmail />
        </S.IconBox>
        <S.IconBox href={userData.linkedinUrl} target="_blank" rel="noreferrer">
          <FaLinkedin />
        </S.IconBox>
        <S.IconBox href={userData.youtubeUrl} target="_blank" rel="noreferrer">
          <FaYoutube />
        </S.IconBox>
        <S.IconBox href={userData.tiktokUrl} target="_blank" rel="noreferrer">
          <FaTiktok />
        </S.IconBox>
        <S.IconBox href={userData.githubUrl} target="_blank" rel="noreferrer">
          <FaGithub />
        </S.IconBox>
      </S.SocialBox>
    </>
  );
};
