export default function WorkWithMe() {
  const router =
    typeof window !== "undefined"
      ? require("next/navigation").useRouter()
      : null;

  if (router) {
    router.push("https://www.linkedin.com/in/matheusetp/");
  }

  return <></>;
}
