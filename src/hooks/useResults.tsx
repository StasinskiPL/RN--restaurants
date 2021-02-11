import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";

interface ResultType {
    [key: string]: any
}


export default () =>{
    const [results,setResults] = useState<ResultType[]>([])

  const searchApi = async(searchTerm:string)=>{
     const res = await yelp.get("/search",{
         params:{
             limit: 50,
             term: searchTerm,
             location: "katowice",
         }
     })
          setResults(res.data.businesses)
  }

  useEffect(()=>{
    searchApi("pasta")
  },[])

  return {searchApi,results};
}