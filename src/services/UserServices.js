import { httpAxios } from "@/app/helper/httpHelper";
import { toast } from "react-toastify";

export async function addUser(user) {
    try {
        console.log('user', user)
        let data = await httpAxios.post("/api/users", user)
        toast.success("user has been created!!", {
            position: "top-center"
        })
        return data.data


    } catch (err) {
        console.log('err', err)
        toast.error("not able to create", {
            position: "top-center"
        })

    }
}