"use client";

import React, { useEffect, useState } from 'react';


const Posts = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const datas = async () => {
            let res = await fetch("https://jsonplaceholder.typicode.com/users")
            let data = await res.json()
            console.log(data);
            
            return setData(data)
        }
        datas()
    }, [])


    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {data.map((item) => {
                
                return <div className=" card w-96 bg-base-100 card-xl shadow-sm" key={item.id}>
                    <div className="card-body">
                        <h2 className="card-title">{item.name}</h2>
                        <p>{item.email}</p>
                        <div className="justify-end card-actions">
                            <button className="btn btn-primary">See Detailes</button>
                        </div>
                    </div>
                </div>

            })}
        </div>
    );
};

export default Posts;