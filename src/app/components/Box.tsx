export default function Box({value,onBoxClick}){

    function handleClick(){
       console.log("Clicked");
    }
    
    return (
        <button
            className="box"
            onClick={onBoxClick}
        >
            {value}
        </button>
    )
}