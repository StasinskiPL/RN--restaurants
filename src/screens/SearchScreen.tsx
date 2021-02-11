import React, {useState } from "react";
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text} from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";



const SearchScreen:React.FC = () => {
  const [term, setTerm] = useState("");
  const {searchApi, results} = useResults();

  const filterResultsByPrice = (price:string)=>{
      return results.filter(res=>res.price === price )
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <SearchBar
        term={term}
        setTerm={setTerm}
        onTermSubmit={searchApi}
      />
      <Text>{results.length}</Text>
      <ScrollView>
      <ResultsList  results={filterResultsByPrice("$")} title="Cost Effective"/>
      <ResultsList  results={filterResultsByPrice("$$")} title="Bit Pricier"/>
      <ResultsList  results={filterResultsByPrice("$$$")} title="Big Spender"/>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
},
});
