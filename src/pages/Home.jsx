import React, { useEffect, useState } from "react";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setloading] = useState(false);
  const [items, setitems] = useState([]);

  async function fetchProductData(){
    setloading(true)
    try {
      const res = await fetch(`${API_URL}`)
      const data = await res.json();
      setitems(data)
    }
    catch (error) {
      console.error(error);
      setitems([])
    }
    setloading(false)
  }

  useEffect(() => {
    fetchProductData();
  }, []);
  

  return (
    <div className="my-10">
      {
        loading ? 
          (<p className="mt-20 flex justify-center text-xl font-semibold">
            Loading...
          </p>) : 
          (items.length > 0 ? 
            (<div 
            className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
            max-w-6xl p-2 mx-auto space-y-10 space-x-5">
              {
                items.map((item)=>(<Product item={item} key={item.id}/>))
              }
            </div>) :
            ( <div>
                <p>No Data Found</p>
              </div> )
            )
      }
    </div>
  );
};

export default Home;
