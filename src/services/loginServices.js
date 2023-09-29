import { httpAxios } from "@/app/helper/httpHelper";
import { toast } from "react-toastify";

export async function Logged(login) {
    try {
        let data = await httpAxios.post("/api/login", login)
        toast.success("logged in!!", {
            position: "top-center"
        })
        return data.data


    } catch (err) {
        console.log('err', err)
        toast.error("not able to login", {
            position: "top-center"
        })

    }
}