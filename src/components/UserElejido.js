import React from 'react'
import { useContext } from 'react'
import UserContext from '../content/UserContext'
import {Link} from "react-router-dom"

const UserElejido = () => {
    const {selectedUser} = useContext(UserContext)
    return (
        <div>
            {selectedUser ? (
            <div className="bg-gray-700 m-auto w-96 shadow-md">
                <img className="rounded border w-36 m-auto" alt="Avatar" src={selectedUser.avatar}/>
                <h1 className="py-2 border text-center text-white">{selectedUser.first_name}</h1>
                <h1 className="py-2 border text-center text-white ">{selectedUser.last_name}</h1>
                <h1 className="py-2 border text-center text-white">{selectedUser.email}</h1>
            </div>) : (<Link exact to="/"><h1 className="text-red-700 text-center font-bold text-xl4">Volver al menu</h1></Link>)}
            <Link exact to="/"><h1 className="text-4xl text-center text-red-900 border shadow-md  mt-10">Ir por Otro Usuario</h1></Link>
        </div>
    )
}

export default UserElejido
