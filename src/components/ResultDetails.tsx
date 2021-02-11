import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface Props {
  result: {
    [key: string]: string;
  };
}

const ResultDetails: React.FC<Props> = ({result}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{
            uri: result.image_url,
        }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  );
};

export default ResultDetails;

const styles = StyleSheet.create({
    container:{
        marginRight:15,
    },
    image:{
        width:130,
        height:130,
        borderRadius:4,
    },
    name:{
        fontWeight:"bold",
        fontSize:16,
    }
});
