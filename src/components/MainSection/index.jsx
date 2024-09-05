import Botao from "../Botao"
import "./MainSection.css"

const MainSection = () => {
    return (
        <section className="Main" id="Main">
            <div className="text">
                <p>Bem vindo</p>
                <span>Ao proximo passo da sua carreira</span>
                <br/>
                <br/>
                <Botao/>
            </div>
        </section>
    )
}

export default MainSection  