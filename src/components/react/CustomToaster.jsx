import { Toaster } from "sonner"

export default function CustomToaster() {
    return (
        <Toaster theme="dark" richColors position="bottom-left" visibleToasts={1} toastOptions={{ style: { background: "rgb(17 24 39)" } }} />
    )
}
