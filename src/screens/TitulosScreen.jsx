import React from "react";
import { View, FlatList, Text } from "react-native";
import { titulos } from "../data";
import { Card, Title, Paragraph } from "react-native-paper";

export default function TitulosScreen() {
  return (
    <FlatList
      data={titulos}
      keyExtractor={(item) => item.nome}
      renderItem={({ item }) => (
        <Card style={{ margin: 10, padding: 10 }}>
          <Title>{item.nome}</Title>
          <Paragraph>Anos: {item.anos.join(", ")}</Paragraph>
        </Card>
      )}
    />
  );
}
