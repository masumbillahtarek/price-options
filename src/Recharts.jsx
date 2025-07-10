
{/* 
const Recharts = () => {
    const data = [
      { name: 'Alice', mark: 88 },
      { name: 'Bob', mark: 76 },
      { name: 'Charlie', mark: 92 },
      { name: 'David', mark: 69 },
      { name: 'Eva', mark: 95 },
      { name: 'Frank', mark: 81 },
      { name: 'Grace', mark: 74 },
      { name: 'Hannah', mark: 90 },
      { name: 'Ian', mark: 67 },
      { name: 'Jack', mark: 84 },
    ];

    return (
        <div className="flex justify-center my-10">
            <LineChart width={600} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="mark" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
        </div>
    );
};

*/}
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const Recharts = () => {
    const students = [
      { name: 'Alice', math: 88, physics: 85, chemistry: 90 },
      { name: 'Bob', math: 76, physics: 80, chemistry: 78 },
      { name: 'Charlie', math: 92, physics: 88, chemistry: 85 },
      { name: 'David', math: 69, physics: 70, chemistry: 75 },
      { name: 'Eva', math: 95, physics: 92, chemistry: 96 },
      { name: 'Frank', math: 81, physics: 84, chemistry: 80 },
      { name: 'Grace', math: 74, physics: 73, chemistry: 70 },
      { name: 'Hannah', math: 90, physics: 91, chemistry: 89 },
      { name: 'Ian', math: 67, physics: 65, chemistry: 60 },
      { name: 'Jack', math: 84, physics: 86, chemistry: 83 },
    ];

    return (
        <div className="flex justify-center my-10">
            <LineChart width={700} height={350} data={students}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="math" stroke="#8884d8" strokeWidth={2} name="Math" />
                <Line type="monotone" dataKey="physics" stroke="#82ca9d" strokeWidth={2} name="Physics" />
                <Line type="monotone" dataKey="chemistry" stroke="#ffc658" strokeWidth={2} name="Chemistry" />
            </LineChart>
        </div>
    );
};



export default Recharts;
