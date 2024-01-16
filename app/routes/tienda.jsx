
import {useLoaderData } from '@remix-run/react';
import {getGuitarras} from '../../app/models/guitarras.server';
import Guitarra from '../components/guitarra';
import styles from '../Styles/guitarras.css'

export function meta(){
  return[
  {
   title:'GuitarLa-Tienda'

  }

  ]

}


export function links(){

return[
{
 rel:'stylesheet',
 href:styles


}

]

}


export async function loader(){
//   const respuesta=await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//   const resultado= await respuesta.json()
   
// return{}

//segunda forma de hacer el fecth 
 const guitarras = await getGuitarras()

return guitarras.data
}

function Tienda() {
const guitarras=useLoaderData()
  return (
    <main className='contenedor'>
      <h2 className=' heading'>Nuestra Coleccion</h2>

      {guitarras.length &&(
        <div className='guitarras-grid'>
           {guitarras.map(guitarra=>(
             <Guitarra
             key={guitarra?.id}
             guitarra={guitarra?.attributes}
             
             />


           ))}
        </div>
      )}
    </main>
  )
}

export default Tienda