function AddMember() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-300 placeholder-gray-700 text-black">
      <form className="w-10/12 p-8 space-y-4 mx-auto rounded-lg ">
        <h1 className="text-xl font-bold">Ajouter un nouveau membre</h1>

        <div className="flex gap-4">
          <input type="text" placeholder="Prénom" className="flex-1 p-2 border rounded" />
          <input type="text" placeholder="Nom" className="flex-1 p-2 border rounded" />
        </div>

        <input type="text" placeholder="Technologie" className="w-full p-2 border rounded" />
        <input type="text" placeholder="URL image (optionnel)" className="w-full p-2 border rounded" />
        
        <textarea rows="3" placeholder="Message personnel (optionnel)" className="w-full p-2 border rounded"/>

        <button className="w-full bg-white text-black py-2 rounded">
          Ajouter le membre
        </button>
      </form>
    </div>
  );
}

export default AddMember;