"use client";

import React, { use, useEffect, useState } from 'react';



const Post = ({ params }) => {
     const { postid } = use(params);
    const [data, setData] = useState([])

    useEffect(() => {
        const datas = async () => {
            let res = await fetch("https://jsonplaceholder.typicode.com/users")
            let data = await res.json()

            return setData(data)
        }
        datas()
    }, [])

    const post = data.find((item) => {
        return item.id === parseInt(postid)
    })

    return (
        <div>
            {
                post &&
                <div className=" card w-96 bg-base-100 card-xl shadow-sm" >
                    <div className="card-body">
                        <h2 className="card-title">{post.name}</h2>
                        <p>{post.email}</p>
                        <div className="justify-end card-actions">
                            <button className="btn btn-primary">See Detailes</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Post;