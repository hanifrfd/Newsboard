

import useFetch from "react-fetch-hook";

export default function DataTest() {
    const { isLoading, error, data } = useFetch("https://newsapi.org/v2/top-headlines?country=id&apiKey=5d06309681224659b39b6ef8480f8c1f");
    if (isLoading) return "Loading...";
    if (error) return "Error!";
    
    return (
        <>
            {/* {console.log(data.articles)}
            {console.log(isLoading)} */}
            {data.articles.map((value,index) => { 
                return (
                    <>
                        <img key={index} src={value.urlToImage} alt="" width="450" height="300"/> 
                        {value.title}
                    </> 
                )               
            })}
            {/* <img src={data.results[0].picture.medium} alt="random user" /> */}
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </>
    );
}
