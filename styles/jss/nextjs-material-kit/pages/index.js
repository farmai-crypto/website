import { container } from "/styles/jss/nextjs-material-kit.js";

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "center",
    textShadow: "0px 0px 3px #0d4024",
  },
  title: {
    fontSize: "4.5rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "510px",
    margin: "auto",
    textShadow: "0px 0px 2px #0d4024",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 0px 0px",
    borderRadius: "6px",
    color: "#fff",
    backgroundColor: "#489d78ed",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 830px)": {
      marginLeft: "10px",
      marginRight: "10px",
    }
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  },
  mainContent: {
    background: "linear-gradient(180deg, rgba(11,45,69,1) 0%, rgba(33,101,80,0.9528405112044818) 35%, rgba(36,113,98,0.9472382703081232) 50%, rgba(33,101,80,1) 65%, rgba(11,45,69,1) 100%);",
    color: "#fff"
  }
};

export default componentsStyle;
