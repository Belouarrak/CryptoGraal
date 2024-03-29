import imagesHakim from '../../assets/images/Hakim.png'
import imagesAnass from '../../assets/images/Anass.jpg'
import imagesEddine from '../../assets/images/Eddine.jpg'
import imagesAissetou from '../../assets/images/Aissetou.jpg'
import './Team.css'

function Team() {
    return (
        <div>
            <header>
                <h2>Notre équipe</h2>
            </header>
            <section id="emps">
                <figure class="emp">
                    <img src={imagesHakim} class="member" />
                    <figcaption>Hakim</figcaption>
                </figure>
                <figure class="emp">
                    <img src={imagesAnass} class="member" />
                    <figcaption>Anass</figcaption>
                </figure>
                <figure class="emp">
                    <img src={imagesEddine} class="member" />
                    <figcaption>Alley-Eddine</figcaption>
                </figure>
                <figure class="emp">
                    <img src={imagesAissetou} class="member" />
                    <figcaption>Aîssetou</figcaption>
                </figure>
            </section>
        </div>
    )
}
export default Team