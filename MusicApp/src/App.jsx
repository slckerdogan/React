import React, { useState, useEffect } from 'react';

const MusicApp = () => {
  const [songs, setSongs] = useState([
    {
      id: 1,
      name: "Bohemian Rhapsody",
      artist: "Queen",
      genre: "Rock"
    },
    {
      id: 2,
      name: "Billie Jean",
      artist: "Michael Jackson",
      genre: "Pop"
    },
    {
      id: 3,
      name: "Lose Yourself",
      artist: "Eminem",
      genre: "Hip-hop"
    },
    {
      id: 4,
      name: "Hotel California",
      artist: "Eagles",
      genre: "Rock"
    },
    {
      id: 5,
      name: "Imagine",
      artist: "John Lennon",
      genre: "Pop"
    }
  ]);
  //* Sayfa yüklendiğinde localStorage'dan şarkıları yükle
  useEffect(() => {
    const savedSongs = localStorage.getItem('musicAppSongs');
    if (savedSongs) {
      setSongs(JSON.parse(savedSongs));
    }
  }, []);

  //* songs değiştiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem('musicAppSongs', JSON.stringify(songs));
  }, [songs]);

  //* Şarkı ekleme state'leri
  const [songName, setSongName] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');

  //* Şarkı filtreleme state'leri
  const [filters, setFilters] = useState({
    name: '',
    artist: '',
    genre: ''
  });

  //* Şarkı ekleme fonksiyonu
  const addSong = (e) => {
    e.preventDefault();

    if (songName && artist && genre) {
      const newSong = {
        id: Date.now(),
        name: songName,
        artist: artist,
        genre: genre
      };

      setSongs([...songs, newSong]);
      setSongName('');
      setArtist('');
      setGenre('');
    }
  };

  //* Şarkı silme fonksiyonu
  const deleteSong = (id) => {
    const updatedSongs = songs.filter(song => song.id !== id);
    setSongs(updatedSongs);
  };

  //! Şarkı filtreleme işlevi ki bu, şarkıların adını, sanatçısını ve türünü filtrelemek için kullanılır
  const handleFilterChange = (e, field) => {
    setFilters({
      ...filters,
      [field]: e.target.value
    });
  };

  //! Filtre ile aldığımız sonucu kullanmak için, bir fonksiyon oluşturuyoruz. Oluşturduğumuz bu fonksiyon ile şarkılarımıza ulaşıp her bir şarkıya erişerek, filtre ile aldığımız sonucun o şarkıda olup olmadığına bakarak çıkan sonucu döndürüp bunu filteredSongs değişkenine atıyoruz. Eğer şarkı adı, sanatçı adı ve türü filtredeki değerlerle eşleşiyorsa, o şarkıyı döndürüyoruz. Eğer eşleşme yoksa, o şarkıyı döndürmüyoruz.
  const getFilteredSongs = () => {
    return songs.filter(song => {
      const nameMatch = song.name.toLowerCase().includes(filters.name.toLowerCase());
      const artistMatch = song.artist.toLowerCase().includes(filters.artist.toLowerCase());
      const genreMatch = song.genre.toLowerCase().includes(filters.genre.toLowerCase());

      return nameMatch && artistMatch && genreMatch;
    });
  };
  const filteredSongs = getFilteredSongs();

  //* Şarkı filtrelerini temizleme fonksiyonu
  const clearFilters = () => {
    setFilters({
      name: '',
      artist: '',
      genre: ''
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Müzik Listesi</h1>

      {/* Şarkı Ekleme Formu */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-700 border-b border-gray-200 pb-2 mb-4">Yeni Şarkı Ekle</h2>
        <form onSubmit={addSong}>
          <div className="mb-4">
            <label className="block font-medium mb-1">Şarkı Adı:</label>
            <input
              type="text"
              value={songName}
              onChange={(e) => setSongName(e.target.value)}
              placeholder="Şarkı adını girin"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Şarkıcı:</label>
            <input
              type="text"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              placeholder="Şarkıcı adını girin"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Tür:</label>
            <input
              type="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              placeholder="Müzik türünü girin"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
          >
            Şarkı Ekle
          </button>
        </form>
      </div>

      {/* Şarkı Listesi */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700 border-b border-gray-200 pb-2 mb-4">Şarkı Listesi</h2>

        {/* Şarkı Filtreleme Alanı */}
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <div className="flex-1 min-w-[200px]">
              <label className="text-sm font-medium block mb-1">Şarkı Adına Göre Filtrele:</label>
              <input
                type="text"
                value={filters.name}
                onChange={(e) => handleFilterChange(e, 'name')}
                placeholder="Şarkı adı ara..."
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="flex-1 min-w-[200px]">
              <label className="text-sm font-medium block mb-1">Şarkıcıya Göre Filtrele:</label>
              <input
                type="text"
                value={filters.artist}
                onChange={(e) => handleFilterChange(e, 'artist')}
                placeholder="Şarkıcı ara..."
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="flex-1 min-w-[200px]">
              <label className="text-sm font-medium block mb-1">Türe Göre Filtrele:</label>
              <input
                type="text"
                value={filters.genre}
                onChange={(e) => handleFilterChange(e, 'genre')}
                placeholder="Tür ara..."
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          <button
            onClick={clearFilters}
            className="bg-gray-500 text-white py-1 px-3 rounded text-sm hover:bg-gray-600 transition mt-2"
          >
            Filtreleri Temizle
          </button>
        </div>

        {/* Filtreleme ile Ekrana Gelen Şarkı Sonuç Sayısı */}
        <div className="text-sm text-gray-600 mb-2">
          Toplam {filteredSongs.length} şarkı bulundu
          {filteredSongs.length !== songs.length && ` (toplam ${songs.length} şarkı)`}
        </div>

        {filteredSongs.length === 0 ? (
          <p className="text-gray-500 text-center py-4 bg-gray-50 rounded">
            {songs.length > 0 ? "Filtrelere uygun şarkı bulunamadı." : "Henüz şarkı eklenmemiş."}
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border-b">Şarkı Adı</th>
                  <th className="text-left p-3 border-b">Şarkıcı</th>
                  <th className="text-left p-3 border-b">Tür</th>
                  <th className="text-left p-3 border-b">İşlem</th>
                </tr>
              </thead>
              <tbody>
                {filteredSongs.map(song => (
                  <tr key={song.id} className="hover:bg-gray-50">
                    <td className="p-3 border-b">{song.name}</td>
                    <td className="p-3 border-b">{song.artist}</td>
                    <td className="p-3 border-b">{song.genre}</td>
                    <td className="p-3 border-b">
                      <button
                        onClick={() => deleteSong(song.id)}
                        className="bg-red-500 text-white py-1 px-3 rounded text-sm hover:bg-red-600 transition"
                      >
                        Sil
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MusicApp;