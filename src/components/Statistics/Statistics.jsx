import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const Statistics = () => {
    const fakeData = useLoaderData();

    const chartData = fakeData.map((product) => ({
        name: product.name,
        price: product.price,
    }));

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Statistics | Gadget Heaven</title>
                <link rel="canonical" href="http://localhost:5173/statistics" />
            </Helmet>
            <div className='bg-purple-200 my-10 p-10 rounded-xl overflow-hidden'>
                <LineChart width={1400} height={500} data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;
