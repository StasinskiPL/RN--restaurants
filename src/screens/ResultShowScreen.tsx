import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import yelp from '../api/yelp';


type ParamList = {
    Detail: {
      id: string;
    };
  };


const ResultShowScreen:React.FC = () => {

    const [result,setResult] = useState<{[key:string]:any} | null>(null)
    const route = useRoute<RouteProp<ParamList, 'Detail'>>()
    const {id} = route.params


    const getDetails = async (id:string)=>{
      const res = await yelp.get(`/${id}`)
      
      setResult(res.data)
    }

    useEffect(()=>{
        getDetails(id);
    },[])


    console.log(result)

    if(!result){
        return null;
    }

    return (
        <View>
            <FlatList data={result.photos} keyExtractor={(item)=>item}
             renderItem={({item})=>{
                 return (
                     <Image source={{
                         uri: item,
                         width:200,
                         height:200,
                     }} />
                 )
             }} />
        </View>
    )
}

export default ResultShowScreen

const styles = StyleSheet.create({})
