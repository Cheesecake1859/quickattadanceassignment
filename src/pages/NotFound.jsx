import { Link } from "react-router-dom";
 
export default function DonePage() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Redirected ✅</h1>
      <p>You reached 0, so you were rerouted here.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
 
 