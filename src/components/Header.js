export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#2874f0",
        color: "white",
        padding: "5px 10px",
        marginBottom: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>FLIPKART CLONE</h1>
      <p style={{ float: "right", fontWeight: "bold" }}>
        Machine Coding Round - Built in 3hrs
      </p>
    </header>
  );
}
