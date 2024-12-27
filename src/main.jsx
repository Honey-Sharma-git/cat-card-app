import {createRoot} from "react-dom/client"
import App from "../src/App"
const root = createRoot(document.getElementById('root'))
root.render(
  <main className="main">
    <App
      img="src/assets/tom.jpg"
      name="Mr. Tom"
      mobile = "+91-9294302470"
      email = "tomcatemailid@gmail.com"/>
    <App
      img="src/assets/Felix.jpg"
      name="Mr. Felix"
      mobile = "+91-974686470"
      email = "Felix@gmail.com"/>
    <App
      img="src/assets/flufflykins.jpg"
      name="Mr. Fluffykins"
      mobile = "+91-8264302870"
      email = "fluffykinsmail@gmail.com"
      />
    <App
      img="src/assets/mr.whiskerson.jpg"
      name="Mr. Whiskerson"
      mobile = "+91-9294356470"
      email = "mailwhiskerson@gmail.com"
      />
    <App
      img="src/assets/Pumpkin.jpg"
      name="Mr. Pumpkin"
      mobile = "+91-7294302470"
      email = "Pumpkin@gmail.com"
      />
     
  </main>
)