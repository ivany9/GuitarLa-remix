import { Link } from "@remix-run/react"

function Guitarra({guitarra}) {
   
  const {descripcion,nombre,imagen,precio,url}=guitarra  
  const image =imagen.data.attributes.formats.medium.url


  return (
    <div className="guitarra">
         <img src={image}
              alt={`guitar name${nombre}`}/>
        <div className="contenido">
            <h3>{nombre}</h3>
           <p className="descripcion">{descripcion}</p>    
            <p className="precio">${precio}</p>
            <Link className="enlace" to ={`/guitarras/${url}`}>ver producto</Link>
            
            </div>


    </div>
  )
}
export default Guitarra