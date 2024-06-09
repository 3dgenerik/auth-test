
export interface IRegisterUser{
    name: string,
    email: string,
    password: string
}


export interface IRegisterUserRes extends IRegisterUser{
    _id: string,
    __v: number
}



export interface IRegisterUserInput {
    url: string,
    data: IRegisterUser
} 

export interface ILoginUserInput {
    url: string,
    data: ILoginUser
} 

export interface ILoginUser{
    email: string,
    password: string
}

//initial
export const registerInitalValue: IRegisterUser = {
    name:'',
    email:'',
    password:''
}

export const loginInitalValue: ILoginUser = {
    email:'',
    password:''
}

export const registerInitalValueRes: IRegisterUserRes = {
    name:'',
    email:'',
    password:'',
    _id:'',
    __v: 0
}

export interface IRegisterResponseGenerator{
    config?:string,
    data: IRegisterUserRes,
    headers?: string,
    request?: string,
    status?: string,
    statusText: string,
}

export interface ILoginResponse {
    token: string,
    user: IRegisterUserRes
}

export interface ILoginResponseGenerator{
    config?:string,
    data: ILoginResponse,
    headers?: string,
    request?: string,
    status?: string,
    statusText: string,
}