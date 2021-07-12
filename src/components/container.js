function Container({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "120vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}

export default Container;
