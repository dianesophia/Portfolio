import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY as string);

app.post("/send-email", async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;

    await resend.emails.send({
      from: "Diane Sophia <onboarding@resend.dev>",   
      to: "dianefuentes2002@gmail.com",
      subject: `New message from ${name} via Portfolio Contact Form`,
      html: `
        <h3>New message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `
    });

    res.json({ success: true });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

app.listen(5000, () => console.log("Backend running on port 5000"));
