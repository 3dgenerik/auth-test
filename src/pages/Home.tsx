import React, { useEffect } from "react";
import { createSelector } from "@reduxjs/toolkit";


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

export const Home = ()=>{

    return <div>Home</div>
}