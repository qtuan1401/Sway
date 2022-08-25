import './Button.css';


export default function Button({ children }) {
  return (
    <div className='button-container'>
      <button className="button">
        {children}
      </button>
    </div>
  );
}