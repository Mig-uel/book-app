import Header from './components/Header';
import Book from './components/Book';
import Footer from './components/Footer';

import { books } from './data.js';
import { useState } from 'react';

function App() {

  const [booksState, setBooksState] = useState(books);

  return (
    <>
      <Header />
      <div className="container">
        <Book book={booksState} />
      </div>
      <Footer />
    </>
  );
}

export default App;
