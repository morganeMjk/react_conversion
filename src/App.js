import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Carrousel from './Components/Carrousel';
import Form from './Components/Form';
import Footer from './Components/Footer';

function App() {


  const articlesArray = [
    {
        icone: "fa-puzzle-piece",
        titre: "Article A",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima repellendus itaque nesciunt repellat dolores."
    },
    {
        icone: "fa-puzzle-piece",
        titre: "Article B",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima repellendus itaque nesciunt repellat dolores."
    },
    {
        icone: "fa-puzzle-piece",
        titre: "Article C",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima repellendus itaque nesciunt repellat dolores."
    },
  ]


  return (
    <div className="App">
      <Navbar />
      <Header />
      <Carrousel articles={articlesArray} />
      <Form />
      <Footer />
    </div>
  );
}

export default App;