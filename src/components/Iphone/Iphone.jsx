import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import { Helmet } from 'react-helmet';

const Iphone = () => {
    const fakeData = useLoaderData();
    const [product, setProduct] = useState([])
    useEffect(() => {
        const filteredProduct = [...fakeData].filter(product => product.product === "iphone")
        setProduct(filteredProduct)
    }, [])
    
    if (product.length == 0) {
        return (
            <div className="flex flex-col justify-center items-center mx-auto gap-5">
                <Helmet>
                <meta charSet="utf-8" />
                <title>Iphone | Gadget Heaven</title>
                <link rel="canonical" href="http://localhost:5173/iphone" />
                </Helmet>
                <h3 className="text-4xl text-red-500 font-bold">Sorry...!</h3>
                <h3 className="text-4xl text-red-500 font-bold">Data Not Found !</h3>
            </div>
        )
    }
    return (
        <div className="grid grid-cols-3 gap-10">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Iphone | Gadget Heaven</title>
                <link rel="canonical" href="http://localhost:5173/iphone" />
                </Helmet>
            {
                product.map(product => <Card key={product.id} product={product}></Card>)
            }
            
        </div>
    );
};

export default Iphone;