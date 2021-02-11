import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";

interface Props {
  term: string;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
  onTermSubmit:((searchTerm: string) => Promise<void>)
}

const SearchBar: React.FC<Props> = ({ term, setTerm,onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather style={styles.icon} name="search" />
      <TextInput
        style={styles.input}
        value={term}
        onEndEditing={()=>onTermSubmit(term)}
        onChangeText={(text) => setTerm(text)}
        placeholder="search"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#ccc",
    borderRadius: 5,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    padding: 2,
    fontSize: 25,
    marginRight: 3,
  },
  input: {
    fontSize: 20,
    flex: 1,
  },
});
