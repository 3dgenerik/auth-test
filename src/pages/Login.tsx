import React, {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ILoginResponse, ILoginResponseGenerator, ILoginUser } from "../interface/interface";
import axios, { AxiosError } from "axios";
import { jwtDecode } from "jwt-decode";
import { useAppDispatch } from "../redux/hooks";
import { saveToken } from "../features/token.slice";


interface ILogin {
    email: string,
    password: string
}

const initialValues:ILogin = {
    email:'',
    password: ''
}

const initialLoginValue: ILoginResponse = {
    token:'',
    user:{
        name:'',
        email:'',
        password:'',
        _id:'',
        __v:0
    }
}

export const Login = ()=>{
    const navigate = useNavigate();

    const [formData, setFormData] = useState<ILoginUser>(initialValues);
    const [loading, setLoading] = useState<boolean>(false);

    const [responseToken, setResponseToken] = useState<any>();

    const dispatch = useAppDispatch();


    const login = async ()=>{
        setLoading(true);
        try{
            const fetchLoginUser  = await axios.post('/login', formData) as ILoginResponseGenerator;
            const loginResponseData: ILoginResponse = fetchLoginUser.data;
            
            dispatch(saveToken(loginResponseData.token))
            // localStorage.setItem('token', loginResponseData.token)

            toast.success(`User ${loginResponseData.user.name} loged in.`)
            navigate('/')
            setLoading(false);

        }catch(err){
            if(err instanceof AxiosError){
                toast.error(err.response?.data)
            }else{
                toast.error('Problem with register user.')
            }
            setLoading(false);
        }
    }

    const loginUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login();
    };

    const getProfile = async ()=>{
        try{
            const bearerToken = localStorage.getItem('token');
            const response = await axios.get('/profile', {headers:{'Authorization':`Bearer ${bearerToken}`}})
            if(response && response.data){
                toast.success(`Authentification for user ${response.data.name} ok`)
                setResponseToken(response.data)
            }else{
                throw new Error();
            }
        }catch(err){
            if(err instanceof AxiosError){
                toast.error(`ERROR: ${err.response?.data.name}`)
                localStorage.clear()
            }else{
                toast.error(`Something went wrong.`)
            }
        }

    }


    return (
        <div>
            {loading && <div>...LOADING</div>}
            <form onSubmit={loginUser} style={{display:'flex', flexDirection:'column', width:'300px', gap:'.5rem'}}>
                <label htmlFor="email">Email</label>
                <input type='text' placeholder="email" id='email' value={formData.email} onChange={(e)=>setFormData({...formData, email:e.target.value})}/>
                <label htmlFor="password">Password</label>
                <input type='text' placeholder="password" id='password' value={formData.password} onChange={(e)=>setFormData({...formData, password:e.target.value})}/>
                <button type="submit">Login</button>
            </form>
            <button onClick={()=>getProfile()}>GET PROFILE</button>
        </div>
    )
}