interface EmailTemplateProps {
    name: string;
    email: string;
    message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    email,
    message
}) => (
    <div>
        <h1>Recibiste un mensaje de {name}!</h1>
        <p>Este es un mensaje desde nizvan.dev</p>

        <p><strong>Nombre:</strong> {name}</p>
        <p><strong>Correo electrónico:</strong> {email}</p>
        <p><strong>Mensaje:</strong> {message}</p>
    </div>
);