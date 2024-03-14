"use client";
import { useRouter } from "next/navigation";

export default function WorkWithMe() {
  const router = useRouter();
  router.push("https://www.linkedin.com/in/matheusetp/");
  return <></>;
}
