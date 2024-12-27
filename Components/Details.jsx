export default function Details(prop){
    return(
        <section className="card__details-section">
          <div className="details-section__name-container">
            <p className="title">Name:</p>
            <p className="content">{prop.details.name}</p>
          </div>
          <div className="details-section__mob-container">
            <p className="title">Mobile:</p>
            <p className="content" >{prop.details.mobile}</p>
          </div>
          <div className="details-section__email-container">
            <p className="title">Email:</p>
            <p className="content" >{prop.details.email}</p>
          </div>
      </section>
    )
}