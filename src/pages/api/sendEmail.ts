export const prerender = false;

import { RESEND_KEY } from "astro:env/server";
import type { APIRoute } from "astro";
import { EmailTemplate } from "@components/react/email-template";
import { Resend } from "resend";

const resend = new Resend(RESEND_KEY);

export const POST: APIRoute = async ({ params, request }) => {
    try {
        const { name, email, message } = await request.json();

        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['nizvan.dev@gmail.com'],
            subject: `Solicitud de ${name} desde nizvan dev landing`,
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
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 });
    }
}