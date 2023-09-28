import { httpAxios } from "@/app/helper/httpHelper";
import { toast } from "react-toastify";

export async function addTask(task) {
    try {
        let data = await httpAxios.post("/api/tasks", task)
        toast.success("task has been created!!", {
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