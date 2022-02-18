import HashLoader from "react-spinners/HashLoader";

export const Loader = ({ loading }) => {
  return (
    <div
      style={{ position: "absolute", marginLeft: "650px", marginTop: "200px" }}
    >
      <HashLoader
        loading={loading}
        size={150}
        speedMultiplier={5}
        color={"#4B0082"}
      />
    </div>
  );
};
