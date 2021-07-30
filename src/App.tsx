import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import Books from './components/Books/Books';
import About from './components/About/About';
import BookDetails from './components/Books/BookDetails/BookDetails';
import AddBook from './components/Books/AddBook/AddBook';
import EditBook from './components/Books/EditBook/EditBook';

import GlobalStyle from './GlobalStyles';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <GlobalStyle />
      <NavBar toggle={toggleSideMenu} />
      <SideBar isOpen={isOpen} toggle={toggleSideMenu} />
      <Route path='/' exact component={Books} />
      <Route path='/about' exact component={About} />
      <Route path='/book/:id' exact component={BookDetails} />
      <Route path='/add-book' exact component={AddBook} />
      <Route path='/edit-book/:id' exact component={EditBook} />
    </Router>
  );
};

export default App;
