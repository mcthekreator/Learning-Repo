function Hello({ name, message, person }) {
  return (
    <>
      <h1> Hello {name}</h1>
      <p>{message}</p>
      <p>
        {person.name}, {person.message}, {person.seatNumbers}
      </p>
    </>
  );
}
export default Hello;
