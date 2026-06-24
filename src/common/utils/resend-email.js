import { Resend } from "resend";
import "dotenv/config";

const resend = new Resend(process.env.RESEND_API_KEY?.toString());

export const sendEmail = async ({ imageUrl }) => {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: [process.env.MY_EMAIL?.toString()],
    subject: "Hello World",
    html: `"<strong>It works!</strong>"
      <p>Here is the uploaded image:</p>
      <img src="${imageUrl}" alt="Uploaded image" style="max-width:100%; height:auto;" />
    `,
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
};
