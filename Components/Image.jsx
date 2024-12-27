export default function Image(prop) {
    return(
        <section className="card__img-checkbox-section">
            <div className="card__checkbox-container">
                <input type="checkbox" />
            </div>
            <figure className="card__img-container">
                <img className="card__contact-img" src={prop.image.img} alt="Mr. Tom photo" />
            </figure>
        </section>
    )
}