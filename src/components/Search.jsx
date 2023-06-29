import { useState } from "react";

function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }

  const handleSubmit = () => {
    cb(value);
  }

  return (
    <div className="row">
      <div className="input-field col s12"></div>
      <input className="borderSearch"
        type="search"
        id="search-field"
        placeholder="search"
        onKeyDown={handleKey}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button 
        className="btn #9e9d24 lime darken-3"
        style={{
          top: 0,
          right: 0,
        }}
        onClick={handleSubmit}
        >Seatch</button>
    </div>
  );
}

export { Search };
