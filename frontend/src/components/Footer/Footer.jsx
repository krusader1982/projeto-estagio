import './Footer.css';
import footer from "../../assets/footer.png"



function Footer() {
    return ( 
            <div className="container">
                <img className = "footer"
                src = { footer }
                alt = "footer" />
            </div>
    )
}

export default Footer