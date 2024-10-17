import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const submit = handleSubmit(async (data) => {
        toast.loading("Enviando correo");

        const resEmail = await fetch("/api/sendEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                message: data.message
            })
        });

        if (resEmail.status == 500) {
            const error = await resEmail.json();
            console.log(error);

            toast.error("Error al enviar el correo");
        }

        toast.dismiss();
        toast.success("¡Recibido!, contactaré contigo lo antes posible");

        reset({
            "email": "",
            "name": "",
            "message": ""
        });
    });

    return (
        <>
            <form onSubmit={(e) => submit(e)} className="flex flex-col items-start gap-4">
                {/* EMAIL */}
                <input
                    {...register("email", {
                        required: true,
                        pattern: /^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    })}
                    type="text"
                    placeholder="Correo electrónico"
                    className={`${errors.email?.type == "required" && "border-orange-300"} ${errors.email?.type == "pattern" && "border-red-400"} w-full text-sm font-light p-4 border border-gray-500 rounded-lg outline-none bg-gray-700/20`}
                />

                {/* NOMBRE */}
                <input
                    {...register("name", {
                        required: true,
                        validate: (value) => {
                            if (/^\s+$/.test(value)) {
                                return false;
                            } else {
                                return true;
                            }
                        },
                    })}
                    type="text"
                    placeholder="Nombre completo"
                    className={`${errors.name?.type == "required" && "border-orange-300"} ${errors.name?.type == "validate" && "border-red-400"} w-full text-sm font-light p-4 border border-gray-500 rounded-lg outline-none bg-gray-700/20`}
                />

                {/* MESSAGE */}
                <textarea
                    {...register("message", {
                        required: true,
                        validate: (value) => {
                            if (/^\s+$/.test(value)) {
                                return false;
                            } else {
                                return true;
                            }
                        },
                    })}
                    rows={3}
                    placeholder="Describa brevemente la razón para contactar conmigo"
                    className={`${errors.message?.type == "required" && "border-orange-300"} ${errors.message?.type == "validate" && "border-red-400"} w-full text-sm font-light p-4 border border-gray-500 rounded-lg outline-none resize-none bg-gray-700/20`}
                ></textarea>

                <button
                    onClick={submit}
                    type="button"
                    className="font-semibold py-3 px-6 rounded-lg bg-gradient-to-r from-pink-500/85 via-violet-500/85 to-sky-500/85 duration-200 hover:opacity-80"
                >
                    Enviar mensaje
                </button>
            </form>
        </>
    )
}
