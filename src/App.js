import "./App.css";
import Header from "./components/Header";
import Book from "./components/Book";
import books from "../src/assets/books.json";

function App() {
  return (
    <div className="App">
      <Header />
      {books.map((item) => (
        <Book {...item} />
      ))}
    </div>
  );
}

export default App;
