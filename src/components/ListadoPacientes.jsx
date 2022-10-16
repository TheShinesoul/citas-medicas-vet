import React, {useEffect} from 'react'
import Paciente from './Paciente'

export const ListadoPacientes = ({ pacientes,setPaciente,eliminarPaciente }) => {

    // useEffect(() => {
    //     if (pacientes.length > 0) {
    //         console.log('nuevo paciente agregado');
    //     }
    // },[pacientes])

    return (
        <div className='md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll'>
            {pacientes && pacientes.length ?
                <>
                    <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
                    <p className='text-xl mt-5 mb-5 text-center'>
                        Administra tus
                        <span className='text-indigo-600 font-bold'> Pacientes y Citas</span>
                    </p>

                </> :
                <>

                    <h2 className='font-black text-3xl text-center'>Aún no hay pacientes</h2>
                    <p className='text-xl mt-5 mb-5 text-center'>
                        Comienza agregando pacientes
                        <span className='text-indigo-600 font-bold'> y apareceran en este lugar</span>
                    </p>
                </>
            }

            {pacientes.map((paciente) => (

                <Paciente
                    key={paciente.id}
                    paciente={paciente}
                    setPaciente = {setPaciente} 
                    eliminarPaciente = {eliminarPaciente}
                    />
            ))}
        </div>
    )
}