import React from "react";
import { View, FlatList, Image, Text } from "react-native";
import { jogadores } from "../data";
import { Card, Title, Paragraph } from "react-native-paper";

export default function JogadoresScreen() {
  return (
    <FlatList
      data={jogadores}
      keyExtractor={(item) => item.nome}
      renderItem={({ item }) => (
        <Card style={{ margin: 10 }}>
          <Card.Content style={{ flexDirection: "row" }}>
            <Image
              source={{ uri: item.imagem }}
              style={{ width: 80, height: 80, marginRight: 10 }}
            />
            <View>
              <Title>
                {item.nome} - #{item.numero}
              </Title>
              <Paragraph>Posição: {item.posicao}</Paragraph>
              <Paragraph>Idade: {item.idade}</Paragraph>
            </View>
          </Card.Content>
        </Card>
      )}
    />
  );
}
