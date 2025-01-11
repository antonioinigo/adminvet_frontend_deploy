import { useEffect, useState } from "react"
import AdminNav from "../components/AdminNav"
import useAuth from '../hooks/useAuth.jsx'
import Alerta from "../components/Alerta.jsx"

const EditarPerfil = () => {
    
    const { auth, actualizarPerfil } = useAuth()
    const [perfil, setPerfil] = useState({})
    const [alerta, setAlerta] = useState({})


    useEffect(() => {
        setPerfil(auth)

    }, [auth])

    const handleSubmit = async e => {
        e.preventDefault()
        const { nombre, email } = perfil
        if([nombre, email].includes('')) {
            setAlerta({
                msg: 'Email y Nombre son obligatorios',
                error: true
            })
            return
        }

        const resultado = await actualizarPerfil(perfil)
        setAlerta(resultado)
    }

    const { msg } = alerta
  return (
    <>
        <AdminNav />

        <h2 className="font-black text-3xl text-center mot-10">Editar Perfil</h2>
        <p className="text-xl mt-5 mb-10 text-center">Modifica tu {""}
            <span className="font-bold text-indigo-600">Información aquí</span>
        </p>
        
         <div className="flex justify-center">
            <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">

            { msg && <Alerta 
                      alerta={alerta}
                  />}

                <form
                    onSubmit={handleSubmit}
                >
                    <div className="my-3">
                        <label className="uppercase text-gray-600 font-bold">Nombre</label>
                        <input 
                        type="text" 
                        className="boder bg-gray-50 w-full mt-5 p-2 rounded-lg"
                        name="nombre" 
                        placeholder="Nombre" 
                        value={perfil.nombre || ''}
                        onChange={(e) => setPerfil({...perfil, [e.target.name]: e.target.value})}
                        />
                    </div>
                    <div className="my-3">
                        <label className="uppercase text-gray-600 font-bold">Web</label>
                        <input 
                        type="text" 
                        className="boder bg-gray-50 w-full mt-5 p-2 rounded-lg"
                        name="web" 
                        placeholder="Web" 
                        value={perfil.web || ''}
                        onChange={(e) => setPerfil({...perfil, [e.target.name]: e.target.value})}
                        />
                    </div>
                    <div className="my-3">
                        <label className="uppercase text-gray-600 font-bold">Teléfono</label>
                        <input 
                        type="text" 
                        className="boder bg-gray-50 w-full mt-5 p-2 rounded-lg"
                        name="telefono" 
                        placeholder="Teléfono" 
                        value={perfil.telefono || ''}
                        onChange={(e) => setPerfil({...perfil, [e.target.name]: e.target.value})}
                        />
                    </div>
                    <div className="my-3">
                        <label className="uppercase text-gray-600 font-bold">Email</label>
                        <input 
                        type="email" 
                        className="boder bg-gray-50 w-full mt-5 p-2 rounded-lg"
                        name="email" 
                        placeholder="Email" 
                        value={perfil.email || ''}
                        onChange={(e) => setPerfil({...perfil, [e.target.name]: e.target.value})}
                        />
                    </div>
                    <input
                        type="submit" 
                        value="Guardar Cambios"
                        className="bg-indigo-600 px-10 py-3 font-bold text-white rounded-lg w-full mt-5 uppercase"


                    />
                </form>
                
            </div>
        </div>
    
    </>
  )
}

export default EditarPerfil