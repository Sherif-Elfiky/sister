import { createRequire } from "node:module";
import { scrapeLikes } from "./scrape.js";


const require = createRequire(import.meta.url);
const nodemailer = require("nodemailer") as typeof import("nodemailer");

function requireEnv(name: string): string {
  const value = process.env[name];
  if (value == null || value === "") {
    throw new Error(`Missing or empty env: ${name}`);
  }
  return value;
}

const email = requireEnv("email");
const password = requireEnv("password");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: password,
  },
});

export async function sendEmail(): Promise<void> {
  const text: string = (await scrapeLikes()) || "there is some error";

  const info = await transporter.sendMail({
    from: `"Sherif Elfiky" <${email}>`,
    to: email,
    subject: "It's Me",
    text,
  });

  console.log("Message sent:", info.messageId);
}
