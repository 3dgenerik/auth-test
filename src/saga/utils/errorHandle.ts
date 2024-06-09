import { AxiosError } from "axios"

export const errorHandle = (error: unknown):string=>{
    if(error instanceof AxiosError){
        return `${error.response?.data}`
    }

    return `${error}`
}