import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleVoiceSearch = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Your browser does not support voice search.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';

    recognition.start();

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      setSearchQuery(spokenText);
    };
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="mic-btn" onClick={handleVoiceSearch}>🎤</button>
    </div>
  );
};

export default SearchBar;
