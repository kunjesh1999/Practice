import { wait } from '@testing-library/user-event/dist/utils'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Products() {
//     const baseURL = "https://jsonplaceholder.typicode.com/posts/1"
//     const [mydata,setdata]=useState([])
//    useEffect(()=>{
//      Axios.get(baseURL).then((response)=>{
//         console.log(response.data);
//          setdata(response.data)
//      })
//    },[])
    // const [post, setpost] = useState([])
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then((response) => {
    //             response.json().then((results) => {

    //                 setpost(results);
    //             })
    //         })

    // })
    return (
        <>

            <div>
                <h1>products</h1>
                {/* {
                    mydata.map((item)=>{
                        const{id,title,body}=item;
                        return(
                            <>
                                <h1>{id}</h1>
                                <h1>{title}</h1>
                                <h1>{body}</h1>
                            </>
                        )
                    })
                } */}
                {/* <h1>{mydata.id}</h1>
                <h1>{mydata.title}</h1>
                <h1>{mydata.body}</h1> */}

                {/* <ul>
                    {
                        post.map(pst => {
                            return (
                                <>

                                    <li>{pst.id}</li>
                                    <li>{pst.title}</li>
                                </>
                            )
                        })
                    }
                </ul> */}
            </div>
            <nav>
                <Link to='Shirts'>Shirts</Link>
                <Link to='Jens'>Jens</Link>
                 
            </nav>
            <Outlet />
        </>
    )
}
