import "./RoundButton.css";


export default function RoundButton({ children }) {
  return (
    <div className="button-round-container" >
      {children}
    </div>
  );
}