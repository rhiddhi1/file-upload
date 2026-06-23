import { Resend } from "resend";
import "dotenv/config";

const resend = new Resend(process.env.RESEND_API_KEY?.toString());

export const sendEmail = async () => {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: [process.env.MY_EMAIL?.toString()],
    subject: "Hello World",
    html: "<strong>It works!</strong>",
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
};
