// import { useState, useEffect } from "react";

// const useFetch = (url) => {
// const [allData, setData] = useState(null);
// const [error, setError] = useState(null);
// const [loading, setLoading] = useState(true);

// useEffect(() => {
//     const fetchData = async () => {
//     setLoading(true)

//     try {
//       const res = await fetch(url)
//       const json = await res.json()

//       setData(json)
//       setLoading(false)
//     } catch(error) {
//      setError(false)
//      setLoading(false)
//     }
//     }
//     fetchData()
// }, [url])
 
// return { loading, error, allData }


// }

// export default useFetch;

import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading, data };
};

function TestStrapi() {
  const { loading, data } = useFetch('http://localhost:1337/api/signups');

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.attributes.loginInput}</h1>
          <p>{item.attributes.firstName}</p>
        </div>
      ))}
    </div>
  );
}

export default TestStrapi;
