import React, {useState} from 'react';
import "./SearchBar.css";

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = async () => {
      if (searchTerm.trim() === '') {
        return; // Não faz nada se o campo de pesquisa estiver vazio
      }
  
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&query=${searchTerm}&language=pt-BR`);
        const data = await response.json();
  
        onSearch(data.results); // Chama a função onSearch passando os resultados da pesquisa
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div className='tudo'>
        <input  className="search-input"
          type="text"
          placeholder="Pesquisar filmes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} className="search-button">Pesquisar</button>
      </div>
    );
  }
  
  export default SearchBar;