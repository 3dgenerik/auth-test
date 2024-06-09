import React, { useEffect, useState } from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useAppSelector } from "../redux/hooks";
import { rootState } from "../redux/store";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeToken } from "../features/token.slice";


// interface IUser{
//     id:number,
//     title: string,
//     name:string
// }

// interface IUsers{
//     user:IUser[],
// }

// const state: IUsers = {
//     user:[
//         {id: 0, title: "Electric", name:"Mire"},
//         {id: 1, title: "Mechanic", name:"Bore"},
//         {id: 2, title: "Physic", name:"Pire"},
//         {id: 3, title: "Mathematic", name:"Fore"},
//         {id: 4, title: "History", name:"Ore"},
//     ]  
// }

// const completedTodos = (state: IRootState) =>{
//     console.log('NOT MEMOIZED')
//     return state.todos.filter((todo: {id:number, completed: boolean})=>{
//         return todo.completed === true;
//     })
// }

// interface IFormatUser{
//     [key: string]: {id: number, name: string}
// }

// const memoizedUsersFormat = createSelector(
//     [(state: IUsers) => state.user],
//     (users): IFormatUser => {
//         return users.reduce((acc: any, user: IUser)=>{
//             const {id, title, name} = user;
//             acc[title] = {id, name};
//             return acc;
//         }, {} as IFormatUser)
//     }
// )

interface ITokenDecoded{
    name: string,
    email: string,
    exp:number,
    iat:number
}

export const Home = ()=>{
    const [token, setToken] = useState<ITokenDecoded>();
    const {tokenData} = useAppSelector((state:rootState)=>state.token)

    const dispatch = useDispatch();

    const [expTime, setExpTime] = useState<number>()

    const navigate = useNavigate();

    useEffect(()=>{
        if(tokenData){
            const decoded: ITokenDecoded= jwtDecode(tokenData);
            setToken(decoded);
        }
    },[tokenData])

    useEffect(()=>{
        const exp = token?.exp;
        const currentTime = Math.floor(Date.now() / 1000);
        let timeLeft:number;
        if(exp){
            timeLeft = exp - currentTime;
        }
        
        setTimeout(()=>{
            setExpTime(timeLeft)
        },1000)

        if(expTime && expTime <= 0){

            dispatch(removeToken())

            setExpTime(0)
            navigate('/login')
        }

        
    }, [expTime, token, token?.exp])


    return(
        <div>
            <h1>
                {token?.name} - {token?.email}
            </h1>
            <p>{expTime}</p>
        </div>    
    ) 
    
}