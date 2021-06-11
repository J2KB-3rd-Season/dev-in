import React, {useState, useEffect} from 'react';
import ArticleBox from './ArticleBox'

export default function ArticleBoxList({url}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url, { 
            // headers: {
            //     'Access-Control-Allow-Origin':'http://localhost:8080'
            // }
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            setData(json.data.content);
        })
        .catch(e => {
            console.log(e);
        })
    }, []);

    return data.map(e => <ArticleBox content={e}/>);
}