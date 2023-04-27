import { Link } from "react-router-dom";
import "../App.css"

function Home() {
    return (

        <div>
            {/* <div className='Header'>
              <h1 className='titre'> KIVENTOU <p className='Se_connecter'> Se Connecter </p></h1>
      
            </div> */}
            <div className='body-container'>
                {/* <img src={Image2} alt="image2" className="image1" />
              <img src={Image2} alt="image2" className="image1" /> */}

                <div className="H3-container">
                    <nav>
                        <ul>


                            <li>
                                <Link to={"/"}>Accueil</Link>
                            </li>

                            <li>
                                <Link to={"/Suivi_de_la_Commande"}>Suivi de la Commande</Link>
                            </li>

                        </ul>
                    </nav>

                </div>
            </div>
            <div>
                <h4 className='texte-central'>Tout est possible avec KIVENTOU, même toutes les économies du monde !
                </h4>
                {/* <img src={Image2} alt="image2" className="image1" />
              <img src={Image2} alt="image2" className="image1" /> */}

            </div>
        </div>
    );
}



export default Home;