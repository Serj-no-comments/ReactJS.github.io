import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {NEWS_REQUEST_STATUS} from "../Reduse/news";
import { fetchNewsByAxios, setNewsList} from "../actions/news";

export default function News() {

    const {status,list}=useSelector(state=>state.news)
    const dispatch=useDispatch()

    const loadDataByAxios=()=>dispatch(fetchNewsByAxios())
    const clearData=()=>dispatch(setNewsList([]))
    React.useEffect(()=>{
        dispatch(fetchNewsByAxios())
    },[])


    if(status===NEWS_REQUEST_STATUS.LOADING){
        return <p>LOADING...</p>
    }



    return <div>
        <p className='News-head'>News page</p>


        {status !==NEWS_REQUEST_STATUS.ERROR ?(

            <ol className='List'>
                {list.map((newsItem)=>
                    <li className='List-Item' key={newsItem.id}>
                        <p className='List-Item-Text'>{newsItem.title}</p>
                    </li>)}
            </ol>
        ):(<p style={{color:'red'}}>ERROR</p>)}

        <button className='App-form-button' onClick={loadDataByAxios}>Click on it to see some space-news :)</button>
        <button className='App-form-button' onClick={clearData}>Click on it to clean all space-news :(</button>
    </div>

}