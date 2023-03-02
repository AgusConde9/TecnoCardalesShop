import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

/*const cel = [
    {id: 1,
    nombre:  "Iphone 11",
    precio: 278000,
    img: "https://imgs.search.brave.com/yixF7ASDNIoo9b0KuM09TfYtuFkIGr6tBOH2I-KTO4g/rs:fit:768:768:1/g:ce/aHR0cHM6Ly90cG1v/YmlsZS52bi93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOS8xMS82/MzcwMzc2NTI0NjI1/NDgyOThfMTEtdHJh/bmctNzY4eDc2OC5q/cGc",
    category: "Iphones"},
    {id: 2,
    nombre: "Iphone 11 pro ",
    precio: 299000,
    img: "https://imgs.search.brave.com/KzZjL-0Snuzo4dAXb9oQ3T76m9ovJn44pnHcINUU4MU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvNGI4/MjUwNWMtOTk4OC00/YmRlLWIyZmItZTg5/OWE4YWEzNDVhLjEx/NWVkOTEyZDI2MDQw/NzQxOWJjY2Y4Zjg1/OTQ0MmIwLmpwZWc",
    category: "Iphones"},
    {id: 3,
    nombre: "Galaxy s23 ultra ",
    precio: 459000,
    img: "https://imgs.search.brave.com/e92cD4TClp8Zj8hsnABhuCP9E_HyzCRkCzYJ1VtBTi0/rs:fit:500:500:1/g:ce/aHR0cHM6Ly9yZXZp/ZXctcGx1cy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MTEvU2Ftc3VuZy1H/YWxheHktUzIzLVVs/dHJhLTUwMHg1MDAu/anBn",
    category: "Samsung"},
    {id: 4,
    nombre: "Z flip 4",
    precio: 320000,
    img: "https://imgs.search.brave.com/SEZwk1ryBAw3hSYLKJ9Ewo7Y44MZNSIMw2JV1Zq6FpQ/rs:fit:1200:970:1/g:ce/aHR0cHM6Ly93d3cu/anV6YXBob3RvLmNv/bS9zaGFyZWRfZmls/ZXMvcmVjZW5zaW9u/aS9zYW1zdW5nX2dh/bGF4eV96X2ZsaXBf/MTIwMHB4LmpwZw",
    category: "Samsung"},
  ];*/

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { detalleId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    /*console.log({querydb})
        console.log({detalleId})
        const queryDoc = doc(querydb, 'celulares', detalleId);
        console.log({queryDoc})
        getDoc(queryDoc)
            .then(res => console.log( "queryDoc", {id: res.id, ...res.data() }) )
        */
    console.log({ detalleId });
    //const ref = doc(db, "celulares", "0HK1aREpGpywdLCc5w7J");
    const ref = doc(db, "celulares", detalleId.trim());
    //const docSnap = await getDoc(ref);
    console.log({ ref });
    getDoc(ref).then((res) => setData({ id: res.id, ...res.data() }));
  }, []);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
