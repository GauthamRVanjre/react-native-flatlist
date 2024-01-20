import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { productType } from "../types";

const FlatlistDemo = () => {
  const [data, setData] = useState<productType[]>([]);

  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const apiResData = await res.json();
    setData(apiResData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }: { item: productType }) => (
    <Text style={styles.item}>{item.title}</Text>
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          numColumns={1}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default FlatlistDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#eee",
  },
});
