import React from 'react'
import { useState, useEffect } from 'react'
import Error from './Error';


const Formulario = ({ setPacientes, pacientes, paciente, setPaciente}) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false)

    useEffect(() => {
        console.log('paciente: ',paciente);
        console.log('paciente Keys: ',Object.keys(paciente));

        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
        // console.log(Object.keys(paciente).length > 0);
    }, [paciente])

    // useEffect(() => {
    //     console.log('componente listo');
    // },[])

    const generarId = () => {
        const random = Math.random().toString(36).slice(2, -1)
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmint = (e) => {
        e.preventDefault()
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            console.log('campo vacio');
            setError(true)
            return
        }
        setError(false)
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
            
        }

        if(paciente.id){
            console.log('ajdsnfakjs');
            objetoPaciente.id = paciente.id
            const pacienteActualizado = pacientes.map((pacienteState) => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
            setPacientes(pacienteActualizado)
            setPaciente({})

        } else{
            objetoPaciente.id = generarId()
            setPacientes([...pacientes,objetoPaciente])
        }

        
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
        setError('')
    }

    return (
        <div className='md:w-1/2 lg:w-2/5 mx-5'>
            <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

            <p className='text-lg mt-5 text-center'>
                Añade Pacientes y
                <span className='text-indigo-600 font-bold'> Administralos</span>
            </p>

            <form
                className='bg-white shadow-md rounded-lg py-10 px-5 mt-5 mb-10'
                onSubmit={handleSubmint}>
                {error && <Error>
                    <p>
                        Todos los campos son obligatorios
                    </p>
                </Error>}
                <div>
                    <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
                    <input
                        id='mascota'
                        type="text"
                        placeholder='Nombre de la mascota'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className='mt-5'>
                    <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>Nombre Propietario</label>
                    <input
                        id='propietario'
                        type="text"
                        placeholder='Nombre de la propietario'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className='mt-5'>
                    <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>Email</label>
                    <input
                        id='email'
                        type="email"
                        placeholder='Email contacto Propietario'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='mt-5'>
                    <label htmlFor="date" className='block text-gray-700 uppercase font-bold'>Alta</label>
                    <input
                        id='date'
                        type="date"

                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>
                <div className='mt-5'>
                    <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>Sintomas</label>
                    <textarea
                        id='sintomas'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        placeholder='Describe los Siíntomas'
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />

                </div>

                <input type="submit"
                    className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors mt-5'
                    value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} />
            </form>
        </div>
    )
}

export default Formulario 