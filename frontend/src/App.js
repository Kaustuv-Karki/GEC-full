import "./App.css";
import { useState } from "react";
import MyForm from "./components/MyForm";

function App() {
    const [message, setMessage] = useState("");

    const getValue = async () => {
        //const res = await fetch("http://localhost:3500/message");
        const res = await fetch("http://localhost:3500/jsondata");
        const data = await res.json();
        let value = data.name;
        setMessage(value);
        console.log(data);
        // axios.get("http://localhost:3500/message").then((res) => {
        //     setMessage(res);
        // });
    };

    return (
        <div className="App">
            <MyForm />
            <button onClick={getValue}>Click Here</button>
            {message}
        </div>
    );
}

export default App;
