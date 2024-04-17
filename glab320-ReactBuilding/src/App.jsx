import "./App.css";
const Header = () => {
  return (
    <div className="header">
      <h1>Simple React Application</h1>
    </div>
  );
};
const Content = ({ color, text }) => {
  return <p style={{ color: color }}>{text}</p>;
};
const Footer = () => {
  return (
    <div className="footer">
      <h1>Created by Me, of course.</h1>
    </div>
  );
};
function App() {
  return (
    <div className="main">
      <Header />
      <div className="container">
        <Content color="blue" text="This is my first React Application!" />
        <Content color="red" text="Wish me luck..." />
        <Content color="green" text="I think I've got it!" />
      </div>
      <Footer />
    </div>
  );
}
export default App;