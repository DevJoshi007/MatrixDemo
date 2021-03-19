export default function Square(props) {
    return (
      <button className="square" 
        onClick={props.onClick} 
        style={{backgroundColor:props.value, width:'5em', height:'5em'}} 
        >
        
      </button>
    );
  }
  