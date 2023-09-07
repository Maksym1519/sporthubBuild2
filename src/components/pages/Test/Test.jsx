import useFetch from "../../hooks/useFetch";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";


export default function TestStrapi() {
//strapi---------------------------------------------------------
const { loading, data, error } = useFetch('http://localhost:1337/api/signups');
console.log(data);
if (loading) return <p>loading....</p>
if (error) return <p>error....</p>
return (
    <>
      {data.map(item => (
        <div key={item.id} className={m.strapi__content}>
          <h1>{item.firstname}</h1>
          <p>{item.text}</p>
        </div>
      ))}
    </>
)
}