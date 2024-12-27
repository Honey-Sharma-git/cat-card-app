export default function Button(){
    return(
        <section className="card__button-section">
            <button className="btn btn-call"><ion-icon className="icon" name="call-outline"></ion-icon></button>
            <button className="btn btn-text"><ion-icon className="icon" name="send-outline"></ion-icon></button>
            <button className="btn btn-whatsapp"><ion-icon className="icon" name="logo-whatsapp"></ion-icon></button>
            <button className="btn btn-mail"><ion-icon className="icon" name="mail-outline"></ion-icon></button>
      </section>
    )
}