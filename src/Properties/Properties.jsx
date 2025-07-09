function Properties(joshi) {
  return (
    <div>
      <h1>Properties</h1>
      <p>Properties are used to pass data from one component to another.</p>
      <p>They are read-only and cannot be modified by the component that receives them.</p>
      <p>Here are the properties passed to the Properties component:</p>
      <p>{joshi.name},{joshi.age} {joshi.tech}</p>
    </div>
  );
}
export default Properties;