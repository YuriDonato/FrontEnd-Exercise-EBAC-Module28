import { useEffect, useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { GrFormClose } from "react-icons/gr";

const CalculadoraIMC = ({ altura, peso, aberto }) => {
    const [fechadoouaberto, setFechadoouaberto] = useState(true);
    const [imc, setImc] = useState()
    const [categoriaIMC, setCategoriaIMC] = useState("");
    const [emojiCategoria, setEmojiCategoria] = useState("");

    useEffect(() => {
        if (altura.length >= 2) {
            const imcCalculado = (
                parseFloat(peso) /
                (parseFloat(altura) * 0.01 * (parseFloat(altura) * 0.01))
            ).toFixed(2);
                setImc(imcCalculado)
            switch (true) {
                case imcCalculado < 18.5:
                    setCategoriaIMC("Abaixo do peso");
                    setEmojiCategoria("😢");
                    break;
                case imcCalculado < 24.9:
                    setCategoriaIMC("Peso normal");
                    setEmojiCategoria("😄");
                    break;
                case imcCalculado < 29.9:
                    setCategoriaIMC("Sobrepeso");
                    setEmojiCategoria("😕");
                    break;
                case imcCalculado < 34.9:
                    setCategoriaIMC("Obesidade grau 1");
                    setEmojiCategoria("😞");
                    break;
                case imcCalculado < 39.9:
                    setCategoriaIMC("Obesidade grau 2");
                    setEmojiCategoria("😨");
                    break;
                default:
                    setCategoriaIMC("Obesidade grau 3");
                    setEmojiCategoria("😱");
                    break;
            }
        }
    }, [altura, peso]);

    function fecharResultado() {
        setFechadoouaberto(false);
        console.log(`saiu daqui ${fechadoouaberto}`)
    }

    useEffect(() => {
        aberto(fechadoouaberto);
    }, [fechadoouaberto]);

    return (
        <>
            <Box
            className="opacity-100"
                marginTop={"1rem"}
                bgColor={"white"}
                borderRadius={"2rem"}
                padding={"1rem"}
                width={"70%"}
            >
                <Box
                    display={"flex"}
                    fontSize={"2xl"}
                    justifyContent={"space-between"}
                    flexDirection={"row-reverse"}
                >
                    <Button
                        onClick={fecharResultado}
                        borderRadius={100}
                        padding={0}
                        colorScheme="red"
                    >
                        <GrFormClose size={40} opacity={"50%"} />
                    </Button>
                    <Box>
                        <Text>IMC: {imc}</Text>
                        <Text>
                            De acordo com a tabela de IMC você está com:
                        </Text>
                        <Text style={getCategoryStyle(categoriaIMC)}>
                            {emojiCategoria}
                            {categoriaIMC}
                            {emojiCategoria}
                        </Text>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

const getCategoryStyle = (categoriaIMC) => {
    switch (categoriaIMC) {
        case "Magreza":
            return { color: "red" };
        case "Peso normal":
            return { color: "green" };
        case "Sobrepeso":
            return { color: "orange" };
        case "Obesidade grau 1":
            return { color: "yellow" };
        case "Obesidade grau 2":
            return { color: "purple" };
        case "Obesidade grau 3":
            return { color: "blue" };
        default:
            return {};
    }
};

export default CalculadoraIMC;
