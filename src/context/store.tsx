import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import ptBr from "../utils/pt-br.json";
import enUs from "../utils/en-us.json";

type UserDataType = {
  name: string;
  profilePicUrl: string;
  role: string;
  age: string;
  emailUrl: string;
  linkedinUrl: string;
  youtubeUrl: string;
  tiktokUrl: string;
  githubUrl: string;
};

type AboutDataType = {
  title: string;
  description: string[];
};

type ProjectsDataType = {
  title: string;
  items: ProjectDataType[];
};

type ProjectDataType = {
  screenshotUrl: string;
  url: string;
  name: string;
  desc: string;
  lang: string[];
};

type ContactDataType = {
  title: string;
  description: string[];
  descriptionFinalWords: string[];
  name: FormDataType;
  email: FormDataType;
  message: FormDataType;
  buttonTitle: string;
  alertMessages: AlertMessagesType;
};

type FormDataType = {
  title: string;
  placeholder: string;
};

type AlertMessagesType = {
  success: string;
  loading: string;
  incompleteInfo: string;
  shortInput: string;
  invalidEmail: string;
  defaultError: string;
};

type DonateDataType = {
  makePayment: string;
  choosePlatform: string;
  thanks: string;
  description: string[];
};

interface ContextProps {
  userData: UserDataType;
  aboutData: AboutDataType;
  projectsData: ProjectsDataType;
  contactData: ContactDataType;
  donateData: DonateDataType;
  lang: string;
  changeLang: Dispatch<SetStateAction<void>>;
  setLang: Dispatch<SetStateAction<string>>;
}

const GlobalContext = createContext<ContextProps>({
  userData: ptBr.user,
  aboutData: ptBr.about,
  projectsData: ptBr.projects,
  contactData: ptBr.contact,
  donateData: ptBr.donate,
  lang: "ptBr",
  changeLang: (): void => {},
  setLang: (): void => {},
});

export const GlobalContextProvider = ({ children }: any) => {
  const [lang, setLang] = useState("ptBr");
  const [userData, setUserData] = useState<UserDataType>(ptBr.user);
  const [aboutData, setAboutData] = useState<AboutDataType>(ptBr.about);
  const [projectsData, setProjectsData] = useState<ProjectsDataType>(
    ptBr.projects
  );
  const [contactData, setContactData] = useState<ContactDataType>(ptBr.contact);
  const [donateData, setDonateData] = useState<DonateDataType>(ptBr.donate);

  const getData = () => {
    if (lang === "ptBr") {
      setUserData(ptBr.user);
      setAboutData(ptBr.about);
      setProjectsData(ptBr.projects);
      setContactData(ptBr.contact);
      setDonateData(ptBr.donate);
    } else {
      setUserData(enUs.user);
      setAboutData(enUs.about);
      setProjectsData(enUs.projects);
      setContactData(enUs.contact);
      setDonateData(enUs.donate);
    }
  };

  const changeLang = () => {
    if (lang === "ptBr") {
      setLang("enUs");
    } else {
      setLang("ptBr");
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <GlobalContext.Provider
      value={{
        userData,
        aboutData,
        projectsData,
        contactData,
        donateData,
        lang,
        changeLang,
        setLang
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
