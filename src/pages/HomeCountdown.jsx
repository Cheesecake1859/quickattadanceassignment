
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
 
export default function HomeCountdown() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
 
  useEffect(() => {
    // If reached 0, reroute
    if (count === 0) {
      navigate("/done");
      return;
    }
 
    // Tick down every 1 second
    const timerId = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);
 
    // Cleanup
    return () => clearTimeout(timerId);
  }, [count, navigate]);
 
  return (
    <div style={{ padding: 24 }}>
      <h1>Countdown Home</h1>
      <p style={{ fontSize: 28 }}>Starting in: {count}</p>
      <p>(Auto redirect to another page when 0)</p>
    </div>
  );
}
 
 

 
 