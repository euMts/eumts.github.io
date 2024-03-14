import { NextResponse } from "next/server";
import axios from "axios";
import Mailjet from "node-mailjet";
import { validateForm } from "@/utils/validateForm";
import { getDate } from "@/utils/getDate";

export async function POST(request: Request, response: Response, body: Body) {
  const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;
  const mailjetApiKey = process.env.MAILJET_API_KEY;
  const mailjetSecretKey = process.env.MAILJET_SECRET_KEY;

  try {
    const postData = await request.json();
    const { gRecaptchaToken, userName, userEmail, userMessage } = postData;

    if (
      !gRecaptchaToken ||
      validateForm({ userName, userEmail, userMessage }).error
    ) {
      return NextResponse.json({ success: false }, { status: 500 });
    }

    let res;

    const formData = `secret=${recaptchaSecretKey}&response=${gRecaptchaToken}`;

    try {
      res = await axios.post(
        "https://www.google.com/recaptcha/api/siteverify",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
    } catch (e) {
      return NextResponse.json({ success: false }, { status: 500 });
    }

    if (res && res.data?.success && res.data?.score > 0.5) {
      if (
        mailjetApiKey &&
        mailjetSecretKey &&
        userName &&
        userEmail &&
        userMessage
      ) {
        const { day, month, year, hour, minute, second } = getDate();
        const mailjetClient = Mailjet.apiConnect(
          mailjetApiKey,
          mailjetSecretKey
        );
        const request = mailjetClient
          .post("send", { version: "v3.1" })
          .request({
            Messages: [
              {
                From: {
                  Email: "playsmts@hotmail.com",
                  Name: "Matheus",
                },
                To: [
                  {
                    Email: "matheusetp@hotmail.com",
                    Name: "Matheus",
                  },
                ],
                Subject: "Novo Contato matheuspass.dev",
                TextPart: `Nome: ${userName}\nEmail: ${userEmail}\nMensagem: ${userMessage}\nData: ${day}/${month}/${year} - ${hour}:${minute}:${second}`,
              },
            ],
          });
        await request;
        return NextResponse.json({ success: true });
      }
    } else {
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
