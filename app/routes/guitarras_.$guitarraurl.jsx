
import {  useLoaderData } from "@remix-run/react"
import { getGuitarra } from "../models/guitarras.server"
import styles from '../Styles/guitarras.css'

export   function meta({data}){
 
  const nombre=data.data[0].attributes.nombre

  return[
  {
   title:`GuitarLa-${nombre}`,
   descripcion:`Tienda de Guitarras ${nombre}`

  }

  ]

}
export function links(){

  return [
    {
    rel:'stylesheet',
    href: styles
    }

  ]

}

export async function loader({params}){

 const {guitarraurl }= params
 
 const guitarra=await getGuitarra(guitarraurl)
 if(guitarra.data.length===0){
  throw new Response('',{
     status:404,
     statusText:'Guitarra No encontrada'

  })

 }

return guitarra

}


function Guitarra(){
  const guitarra=useLoaderData()
 const {nombre,descripcion,precio,imagen} = guitarra.data[0].attributes

 
  return (
              
       
    <main className="contenedor guitarra">
        <img className="imagen" src={imagen.data.attributes.url} alt={`imagen de la guitarra ${nombre}`}/>
         <div className="contenido">
           <h3>{nombre}</h3>
           <p className="texto">{descripcion}</p>
           <p className="precio">{precio}</p>
         </div>

    </main>
  )
}

export default Guitarra