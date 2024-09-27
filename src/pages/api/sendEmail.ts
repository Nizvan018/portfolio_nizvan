export const prerender = false;

import type { APIRoute } from "astro";
import { EmailTemplate } from "@components/react/email-template";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_KEY);

export const POST: APIRoute = async ({ params, request }) => {
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['nizvan.dev@gmail.com'],
        subject: 'Hello world',
        react: EmailTemplate({
            name,
            email,
            message
        }),
        text: ""
    });

    if (error) {
        return new Response(JSON.stringify(error), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
}