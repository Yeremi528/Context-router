import React, { useEffect } from 'react'
import { useContext } from 'react'
import UserContext from './../content/UserContext';
import { Link } from 'react-router-dom';
const UserList = () => {
    useEffect(() => {
        getUsers()
    }, [])
    const { getUsers, users, getProfile } = useContext(UserContext)
    return (
        <div>
            <h1 className="text-center text-3xl text-black font-bold mb-10">Mis Usuarios </h1>
            {!users ? ("Cargando...") : (
                users.map(user => {
                    return (
                        <div >

                            <Link exact to="/profile" onClick={() => getProfile(user.id)} className="shadow-md w-80 h-20 flex m-auto" key={user.id}>

                                <img className=" rounded-xl3 border w-36" alt="Avatar" src={user.avatar} />
                                <h1 className="py-2  font-bold text-xl2 text-center">{`${user.first_name} ${user.last_name}`}</h1>


                            </Link>
                        </div>
                    )
                })
            )}
        </div>
    )
}

export default UserList
