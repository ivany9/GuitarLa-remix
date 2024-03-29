import { Links, Meta,Outlet,Scripts,LiveReload, useRouteError, isRouteErrorResponse} from "@remix-run/react"
import styles from './Styles/index.css'
import Header from "./components/header"
import Footer from "./components/footer"


export function meta(){

return[
{
    charset:'uft-8',
    title:'GuitarLa-remix',
    viewport:"width=device-width,initial-scale=1"
},
{
    name: "description",
    content: "This app is the best",
  }
]

}



export function links(){
 return[
    {
        rel:'stylesheet',
        href:"https://necolas.github.io/normalize.css/8.0.1/normalize.css"
   

    } ,
{
rel:'stylesheet',
href: styles
},
{
 rel:"preconnect",
 href:"https://fonts.googleapis.com"
},
{
    rel:"preconnect",
    href:"https://fonts.gstatic.com",
    crossOrigin:"true"

},
{
    rel:"stylesheet",
    href:"https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"

}


 ]


}

export  default  function  App(){
return(

<Document>

<Outlet/>

</Document>
 

)
}
function  Document({children}){
    
return(

   <html lang='es'>
     <head>
        <Meta/>
        <Links/>
     </head>
     <body>
        <Header/>
        {children}
        <Footer/>
        <Scripts/>
        <LiveReload/>
     </body>


   </html>
)

}


//manejo de errores


export function ErrorBoundary(){
  const error=useRouteError()
  if(isRouteErrorResponse(error))

    return(
        <Document>
        <p className="error"> {error.status} {error.statusText}</p>
         
      </Document>

    )


}