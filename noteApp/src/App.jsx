import React, { useState } from 'react';

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');
  const [title, setTitle] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddNote = () => {
    if (title.trim() === '' || currentNote.trim() === '') return;
    
    if (editIndex !== null) {
      // Update existing note
      const updatedNotes = [...notes];
      updatedNotes[editIndex] = { title, content: currentNote };
      setNotes(updatedNotes);
      setEditIndex(null);
    } else {
      // Add new note
      setNotes([...notes, { title, content: currentNote }]);
    }
    
    // Clear input fields
    setTitle('');
    setCurrentNote('');
  };

  const handleEditNote = (index) => {
    setTitle(notes[index].title);
    setCurrentNote(notes[index].content);
    setEditIndex(index);
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Not Alma Uygulaması</h1>
      
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Not başlığı..."
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <textarea
          value={currentNote}
          onChange={(e) => setCurrentNote(e.target.value)}
          placeholder="Notunuzu buraya yazın..."
          className="w-full p-2 mb-4 border rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <button
          onClick={handleAddNote}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          {editIndex !== null ? 'Notu Güncelle' : 'Not Ekle'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">{note.title}</h3>
              <div>
                <button
                  onClick={() => handleEditNote(index)}
                  className="text-blue-500 mr-2 hover:text-blue-700"
                >
                  Düzenle
                </button>
                <button
                  onClick={() => handleDeleteNote(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Sil
                </button>
              </div>
            </div>
            <p className="whitespace-pre-wrap">{note.content}</p>
          </div>
        ))}
      </div>
      
      {notes.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          Henüz not eklenmedi. Yukarıdaki formu kullanarak yeni bir not ekleyebilirsiniz.
        </div>
      )}
    </div>
  );
};

export default NoteApp;