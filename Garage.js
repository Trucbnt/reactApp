function Garage() {
  const arrayGarage = ["garage1 ", "garage2", "garage3"];
  return (
    <ul>
      {arrayGarage.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
