import React, { useState } from "react";
import { IRegisterResponseGenerator, IRegisterUser, registerInitalValue } from "../interface/interface";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

export const Register = () => {
    
    const [formData, setFormData] = useState<IRegisterUser>(registerInitalValue);
    const [loading, setLoading] = useState<boolean>(false);


    const register = async ()=>{
        setLoading(true);
        try{
            const fetchRegisteredUser  = await axios.post('/register', formData) as IRegisterResponseGenerator;
            const data = fetchRegisteredUser.data;
            
            toast.success(`User ${data.name} created.`)
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

    const registerUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        register();

    };


    return (
        <div>
            {loading && <div>...LOADING</div>}
            <form onSubmit={registerUser} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '.5rem' }}>
                <label htmlFor="name">Name</label>
                <input type='text' placeholder="name" id='name' value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <label htmlFor="email">Email</label>
                <input type='text' placeholder="email" id='email' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <label htmlFor="password">Password</label>
                <input type='text' placeholder="password" id='password' value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};
