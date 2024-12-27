// IMPORTING COMPONENTS
import Image from "../Components/Image"
import Details from "../Components/Details"
import Button from "../Components/Button"
import More from "../Components/More"
export default function App(){
  return(
    <article className="card">
      <Image/>
      <Details/>
      <Button/>
      <More/>
    </article>
  )
}