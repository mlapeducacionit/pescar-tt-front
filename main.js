import './style.css'

const endpointProductos = import.meta.env.VITE_ENDPOINT_PRODUCTOS

const getAll = async () => {

    const respuesta = await fetch(endpointProductos)

    console.log(respuesta)

    const data = await respuesta.json()
    console.log(data)

}

getAll()