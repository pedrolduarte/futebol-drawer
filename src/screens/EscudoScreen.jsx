import React from "react";
import { View, Image, Text } from "react-native";
import { time } from "../data";
import { Title } from "react-native-paper";

export default function EscudoScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={{ uri: time.escudo }}
        style={{ width: 200, height: 200 }}
      />
      <Title>{time.nome}</Title>
      <Text>Fundado em: {time.fundacao}</Text>
      <Text>Estádio: {time.estadio}</Text>
      <Text>Mascote: {time.mascote}</Text>
      <Text>Cores: {time.cores.join(", ")}</Text>
    </View>
  );
}
