import { Button, Text, View } from "react-native";

interface ExampleProps {
    text: string;
}

const Exemplo = ({ text }: ExampleProps) => {
    const handleOnPress = () => {

    }

    return (
        <View>
            <Text>{text}</Text>
            <Button onPress={handleOnPress} title="Botão" />
        </View>
    );
}

export default Exemplo;