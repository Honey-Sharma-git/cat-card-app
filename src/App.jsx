// IMPORTING COMPONENTS
import Image from "../Components/Image"
import Details from "../Components/Details"
import Button from "../Components/Button"
import More from "../Components/More"
export default function App(prop){
  let image, details, button;
  return(
      <article className="card">
        <Image image={prop}/> 
        <Details details = {prop}/>
        <Button button = {prop}/>
        <More/>
      </article>

  )
}
//Destructuring: 
const obj = {
id: "234",
name: 'Name kumar'
}
// variables should have same name as property name
const {id:identity, name} = obj;
console.log(identity);