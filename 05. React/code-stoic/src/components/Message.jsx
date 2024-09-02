export default function Message() {
  let showMesage = false;
  function handleClick() {
    showMesage = true;
  }
  return (
    <div>
      <button onClick={handleClick}>Click here ti get a message</button>
      {showMesage ? <h1>Hello </h1> : <h1>Mesage</h1>}
    </div>
  );
}
