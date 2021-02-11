import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ResultDetails from "./ResultDetails";
import { useNavigation } from '@react-navigation/native';

interface Props {
  title: string;
  results: {
    [key: string]: any;
  }[];
}

const ResultsList: React.FC<Props> = ({ title, results}) => {

    const navigation = useNavigation();


  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={results}
        style={{marginRight:-10,marginBottom:20}}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) =>(
        <TouchableOpacity onPress={()=>navigation.navigate("Details",{id:item.id})}>
        <ResultDetails result={item}>{item.name}
        </ResultDetails>
        </TouchableOpacity>
        )}
        horizontal
        keyExtractor={(obj) => obj.id}
      />
    </View>
  );
};

export default ResultsList;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
