const colors = ["#F13B46", "#FF7900", "#FCD900", "#8D88C5"];


export const BorderTriangle = () => {
  return (
    <div
      style={{
        borderBottomColor: colors[Math.floor(Math.random() * colors.length)],
      }}
      className="triangle"
    ></div>
  );
};
