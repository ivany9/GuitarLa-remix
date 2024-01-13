import  nosotros from '../../public/img/nosotros.jpg'
import styles from '../Styles/nosotros.css'

export function meta(){
 return[
{
 title:'GuitarLa-Nosotros',
 description:' shop on line'

}

] 


}
export function links()
{
return [
  {
  rel:'stylesheet',
  href: styles
  },
  {
    rel:'preload' ,
    href:'nosotros',
    as:'image' 
  
  }

]


}




function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
        <div className="contenido">
          <img 
          src={nosotros}
          alt="imagen nosotros"
          />
          <div>
             <p> Proin et ante non quam egestas rhoncus non vitae ante. Pellentesque posuere tincidunt velit, eget congue massa dapibus euismod. Sed sed imperdiet augue. Quisque nunc magna, posuere eu lacus vitae, malesuada maximus nisi. Proin cursus bibendum odio, non viverra massa tincidunt rutrum. Sed ut tempus urna. Mauris lobortis volutpat fringilla. Donec a tempus nunc, eu blandit ligula.</p>
              
             <p> Proin et ante non quam egestas rhoncus non vitae ante. Pellentesque posuere tincidunt velit, eget congue massa dapibus euismod. Sed sed imperdiet augue. Quisque nunc magna, posuere eu lacus vitae, malesuada maximus nisi. Proin cursus bibendum odio, non viverra massa tincidunt rutrum. Sed ut tempus urna. Mauris lobortis volutpat fringilla. Donec a tempus nunc, eu blandit ligula.</p>
      
          </div>
          
          
          </div>  
    </main>
  )
}

export default Nosotros