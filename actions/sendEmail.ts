"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const sendEmail = async (formData: FormData) => {
  // Honeypot — bots fill hidden fields, humans don't
  if (formData.get("website")) {
    return { data: { id: "noop" } };
  }

  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }

  if (!EMAIL_REGEX.test(senderEmail)) {
    return { error: "Invalid sender email" };
  }

  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  // ⚠️ Before going to production: verify your domain in the Resend dashboard
  // and replace CONTACT_FROM_EMAIL with an address on that domain,
  // e.g. "Contact Form <contact@yourdomain.com>"
  const fromAddress =
    process.env.CONTACT_FROM_EMAIL ?? "Contact Form <onboarding@resend.dev>";
  const toAddress =
    process.env.CONTACT_TO_EMAIL ?? "usman.data002@gmail.com";

  let data;
  try {
    data = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }

  return { data };
};
