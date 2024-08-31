
export default function Message() {
    function handleClick() {
        alert("Button clicked");

    }
    return (
        <div>
            <button onClick={handleClick} >Click here ti get a message</button>
        </div>
    )
}
