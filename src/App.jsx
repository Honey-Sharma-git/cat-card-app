export default function App(){
  return(
    
    <article className="card">
      <section className="card__img-checkbox-section">
        <div className="card__checkbox-container">
          <input type="checkbox" />
        </div>
        <figure className="card__img-container">
          <img className="card__contact-img" src="src/assets/tom.jpg" alt="Mr. Tom photo" />
        </figure>
      </section>
      <section className="card__details-section">
        <div className="details-section__name-container">
          <p>Mr. Tom</p>
        </div>
        <div className="details-section__mob-container">
          <p>Mobile:</p>
          <p>+91-9999222211</p>
        </div>
        <div className="details-section__email-container">
          <p>Email:</p>
          <p>tom@gmail.com</p>
        </div>
      </section>
      <section className="card__button-section">
        <button className="btn btn-call"><ion-icon name="call-outline"></ion-icon></button>
        <button className="btn btn-text"><ion-icon name="send-outline"></ion-icon></button>
        <button className="btn btn-whatsapp"><ion-icon name="logo-whatsapp"></ion-icon></button>
        <button className="btn btn-mail"><ion-icon name="mail-outline"></ion-icon></button>
      </section>
      <section className="card__more-section">
        <input type="button" value="More" />
      </section>
    </article>
    
  )
}