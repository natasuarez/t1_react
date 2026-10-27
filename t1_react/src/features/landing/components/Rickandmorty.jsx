import { useEffect, useState } from 'react';

export const Rickandmorty = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' o 'desc'
  const [info, setInfo] = useState({});

  useEffect(() => {
    async function getCharacters() {
      try {
        // La API de Rick and Morty permite filtrar por nombre y página a la vez
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}&name=${search}`
        );
        const data = await response.json();
        
        if (response.ok) {
          setCharacters(data.results);
          setInfo(data.info); // Contiene datos de paginación (next, prev, etc.)
        } else {
          setCharacters([]);
          setInfo({});
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setCharacters([]);
      }
    }

    getCharacters();
  }, [page, search]);

  // Función para ordenar los personajes localmente (ascendente / descendente)
  const sortedCharacters = [...characters].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  // Manejador para reiniciar la página al buscar
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1); // Volver a la página 1 al buscar un nuevo nombre
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Rick and Morty Characters</h1>

      {/* CONTROLES DE BÚSQUEDA Y ORDENAMIENTO */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Buscar personaje..."
          value={search}
          onChange={handleSearchChange}
          style={{ padding: '8px', width: '250px' }}
        />

        <select 
          value={sortOrder} 
          onChange={(e) => setSortOrder(e.target.value)}
          style={{ padding: '8px' }}
        >
          <option value="asc">Ordenar: A - Z</option>
          <option value="desc">Ordenar: Z - A</option>
        </select>
      </div>

      {/* CONTROLES DE PAGINACIÓN */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', alignItems: 'center' }}>
        <button 
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={!info.prev}
          style={{ padding: '8px 12px' }}
        >
          Anterior
        </button>
        
        <span>Página {page}</span>

        <button 
          onClick={() => setPage((prev) => prev + 1)}
          disabled={!info.next}
          style={{ padding: '8px 12px' }}
        >
          Siguiente
        </button>
      </div>

      {/* LISTADO DE PERSONAJES */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
        {sortedCharacters.length > 0 ? (
          sortedCharacters.map((char) => (
            <div key={char.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
              <img src={char.image} alt={char.name} style={{ width: '100%', borderRadius: '5px' }} />
              <h3>{char.name}</h3>
              <p>{char.species}</p>
            </div>
          ))
        ) : (
          <p>No se encontraron personajes.</p>
        )}
      </div>
    </div>
  );
};