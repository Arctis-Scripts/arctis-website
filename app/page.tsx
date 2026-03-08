export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "#0f1720",
      color: "white",
      fontFamily: "sans-serif"
    }}>
      <h1 style={{fontSize: "48px"}}>Arctis Scripts</h1>

      <p style={{opacity: 0.7}}>
        High quality FiveM resources
      </p>

      <div style={{marginTop: "30px", display: "flex", gap: "15px"}}>
        <a href="https://docs.arctis-scripts.com">
          Documentation
        </a>

        <a href="https://discord.gg">
          Discord
        </a>
      </div>
    </main>
  );
}