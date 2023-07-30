import { useState } from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Box,
    Button,
    Text,
} from "@chakra-ui/react";

import { BeatLoader } from "react-spinners";

const Formulario = ({ enviarData }) => {
    const [dataAltura, setDataAltura] = useState("");
    const [dataPeso, setDataPeso] = useState("");

    const [estaCarregando, setEstaCarregando] = useState(false);
    const [deuErro, setDeuErro] = useState(false);
    const [deuCerto, setDeuCerto] = useState(false);

    const enviarDadosParaCalculadora = () => {
        setEstaCarregando(true);
        enviarData(dataAltura,dataPeso);

        setTimeout(() => {
            setEstaCarregando(false);
            if(dataAltura.length < 2 && dataPeso.length < 2){
                setDeuErro(true)
                setTimeout(()=>{
                    setDeuErro(false)
                }, 5000)
            }else{
                setDeuCerto(true)
                setTimeout(() =>{
                    setDeuCerto(false)
                },5000)
            }
        }, 1000);
    };

    return (
        <>
            <Box bgColor={"white"} borderRadius={"2rem"} padding={"2rem"}>
                <Text fontSize={"3xl"} marginBottom={"2rem"}>
                    Calculadora de IMC
                </Text>
                <FormControl>
                    <Box>
                        <FormLabel>Altura (em CM)</FormLabel>
                        <Input
                            variant={"filled"}
                            type="number"
                            onChange={(e) => setDataAltura(e.target.value)}
                        />
                    </Box>
                </FormControl>
                <FormControl>
                    <Box marginTop={"1rem"}>
                        <FormLabel>Peso (em KG)</FormLabel>
                        <Input
                            variant={"filled"}
                            type="number"
                            onChange={(e) => setDataPeso(e.target.value)}
                        />
                    </Box>
                </FormControl>
                {estaCarregando ? (
                    <Button
                        marginTop={"1rem"}
                        isLoading
                        spinner={<BeatLoader size={8} color="white" />}
                        colorScheme="blue"
                        variant={"solid"}
                    >
                        Enviando
                    </Button>
                ) : (
                    <Button
                        marginTop={"1rem"}
                        colorScheme="blue"
                        variant={"solid"}
                        onClick={enviarDadosParaCalculadora}
                    >
                        Enviar
                    </Button>
                )}
            </Box>
            {deuErro ? (
                <p className="errorMessage">Por favor insira uma altura ou peso validos.</p>
                ):
                <p className="opacity-0">Por favor insira uma altura ou peso validos.</p>
            }
            {deuCerto ? (
                <p className="sucessMessage">Calculado com sucesso!</p>
                ):
                <p className="opacity-0"></p>
            }
        </>
    );
};

export default Formulario;
