
import {useLoaderData } from '@remix-run/react';
import {getGuitarras} from '../../app/models/guitarras.server';

export async function loader(){
//   const respuesta=await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//   const resultado= await respuesta.json()
   
// return{}

//segunda forma de hacer el fecth 
 const guitarras = await getGuitarras()

return guitarras
}

function Tienda() {
const guitarras=useLoaderData()
console.log(guitarras)

  return (
    <div>tienda</div>
  )
}

export default Tienda