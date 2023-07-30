import "./App.css";
import { useEffect, useState } from "react";

import CalculadoraIMC from "./components/CalculadoraIMC";
import Formulario from "./components/Formulario";
import { Button } from "@chakra-ui/react";

function App() {
    const [dataAltura, setDataAltura] = useState("");
    const [dataPeso, setDataPeso] = useState("");
    const [mostrarResultado, setMostrarResultado] = useState(false);
    const [styleClass, setStyleClass] = useState("opacity-100")

    const receberData = (altura, peso) => {
        setDataAltura(altura);
        setDataPeso(peso);
        if (altura >= 2 && peso >= 2) {
            setTimeout(() => {
                setMostrarResultado(true);
            }, 2000);
        }
    };

    const fecharResultado = (aberto) => {
        console.log(`chegou no fechar resultado: ${aberto}`);
        setMostrarResultado(aberto);
        if(aberto){
          setStyleClass("opacity-100")
        }else{
          setStyleClass("opacity-0")
        }
    };

    return (
        <div className="container">
            <Formulario enviarData={receberData} />
            {mostrarResultado && (
                <div className={styleClass}>
                    <CalculadoraIMC
                        altura={dataAltura}
                        peso={dataPeso}
                        aberto={fecharResultado}
                    />
                </div>
            )}
        </div>
    );
}

export default App;
