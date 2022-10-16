import React from 'react'

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente')
        if(respuesta){
            eliminarPaciente(paciente.id)
        }
    }
    const { nombre, propietario, email, fecha, sintomas } = paciente
    return (
        <div className='m-5 bg-white px-5 shadow-md py-8 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre:{' '}
                <span className='font-normal normal-case'>{nombre}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario:{' '}
                <span className='font-normal normal-case'>{propietario}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Correo:{' '}
                <span className='font-normal normal-case'>{email}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha alta:{' '}
                <span className='font-normal normal-case'>{fecha}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas:{' '}
                <span className='font-normal normal-case'>{sintomas}</span>
            </p>

            <div className='flex gap-4 mt-5'>
                <button type='button'
                    onClick={() => setPaciente(paciente)}
                    // onClick={setPaciente(paciente)}
                    className='text-white py-2 px-10 bg-indigo-600 hover:bg-indigo-700 font-bold uppercase rounded-lg
                '>Editar</button>
                <button
                    onClick={handleEliminar}
                    type='button'
                    className='text-white py-2 px-10 bg-red-600 hover:bg-red-700 font-bold uppercase rounded-lg'>Eliminar</button>
            </div>


        </div>
    )
}

export default Paciente