import { Text, View } from "react-native";

interface ExampleProps {
    name: string;
}

const CustomComponents = ({ name }: ExampleProps) => {
    return (
        <View>
            <Text>Hello, {name}</Text>
        </View>
    );
}

export default CustomComponents;