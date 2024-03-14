interface FormProps {
  userName: string;
  userEmail: string;
  userMessage: string;
}

export const validateForm = ({
  userName,
  userEmail,
  userMessage,
}: FormProps) => {
  if (!userName.trim() || !userEmail.trim() || !userMessage.trim()) {
    return {
      error: true,
      message: "incomplete info",
    };
  }

  if (userName.length <= 2) {
    return {
      error: true,
      message: "short username",
    };
  }

  if (!userEmail.includes("@")) {
    return {
      error: true,
      message: "invalid email",
    };
  }

  if (userMessage.length <= 2) {
    return {
      error: true,
      message: "short message",
    };
  }

  return {
    error: false,
    message: "",
  };
};
