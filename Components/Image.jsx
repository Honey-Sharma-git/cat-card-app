export default function Image() {
    return(
        <section className="card__img-checkbox-section">
            <div className="card__checkbox-container">
                <input type="checkbox" />
            </div>
            <figure className="card__img-container">
                <img className="card__contact-img" src="src/assets/tom.jpg" alt="Mr. Tom photo" />
            </figure>
        </section>
    )
}