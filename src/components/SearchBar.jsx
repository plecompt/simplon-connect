function SearchBar() {
  return (
    <div className="bg-gray-300 w-full flex gap-4 py-5 px-61">
      <input type="text" name="" id="" className="bg-white w-1/3 placeholder-gray-700" placeholder=" Rechercher un membre ou une technologie"/>
      <div className="w-2/3 flex justify-end gap-20">
        <button className="bg-white p-2 rounded-sm">Toutes les technologies</button>
        <button className="bg-white p-2 rounded-sm">Mode suppression</button>
      </div>
    </div>
  );
}

export default SearchBar;