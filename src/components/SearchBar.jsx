import { defaultMembers } from '../data/members';
import { useState } from 'react';
import { useEffect } from 'react';

function SearchBar() {
  const [deleteMode, setDeleteMode] = useState(localStorage.getItem('deleteMode') === 'true');
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('searchTerm') || '');
  const [filterBy, setFilterBy] = useState('all');

  const toggleDeleteMode = () => {
    localStorage.setItem('deleteMode', (!deleteMode).toString());
    setDeleteMode(!deleteMode);
  }

  const resetMembers = () => {
    localStorage.setItem('members', JSON.stringify(defaultMembers));
    window.dispatchEvent(new CustomEvent('membersUpdated'));
  }

  const deleteMembers = () => {
    localStorage.setItem('members', JSON.stringify([]));
    window.dispatchEvent(new CustomEvent('membersUpdated'));
  }

  const filterMembers = (members) => {
    if (searchTerm === '') return members;

    const searchLower = searchTerm.toLowerCase();

    return members.filter(member => {
      switch (filterBy) {
        case 'firstName':
          return member.firstName.toLowerCase().includes(searchLower);
        case 'lastName':
          return member.lastName.toLowerCase().includes(searchLower);
        case 'tech':
          return member.tech.toLowerCase().includes(searchLower);
        case 'all':
        default:
          return (
            member.firstName.toLowerCase().includes(searchLower) ||
            member.lastName.toLowerCase().includes(searchLower) ||
            member.tech.toLowerCase().includes(searchLower)
          );
      }
    });
  };

  useEffect(() => {
    if (localStorage.getItem('members')) {
      if (searchTerm !== '') {
        localStorage.setItem('filtered', 'true');
        localStorage.setItem('searchTerm', searchTerm);
      } else {
        localStorage.setItem('filtered', 'false');
        localStorage.setItem('searchTerm', '');
      }
      
      const members = JSON.parse(localStorage.getItem('members'));
      const filteredMembers = filterMembers(members);
      localStorage.setItem('filteredMembers', JSON.stringify(filteredMembers));

      window.dispatchEvent(new CustomEvent('membersUpdated'));
    }
  }, [searchTerm, filterBy]);



  return (
    <div className="bg-gray-300 w-full">
      <div className="w-10/12 mx-auto p-8 flex flex-col gap-6">
        <div className="bg-white p-6 rounded-lg">
          <div className="flex justify-between items-center">
            <input
              type="text"
              className="bg-gray-50 w-2/5 p-2 rounded-sm placeholder-gray-700 border border-gray-200"
              placeholder="Rechercher un membre ou une technologie"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex gap-2">
              <select 
                name="filters" 
                id="filters" 
                className="p-2 rounded-sm border border-gray-200"
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
              >
                <option value="all">Filtrer par</option>
                <option value="firstName">Prénom</option>
                <option value="lastName">Nom</option>
                <option value="tech">Technologie</option>
              </select>
              <button 
                onClick={toggleDeleteMode} 
                className={`p-2 rounded-sm cursor-pointer transition-colors duration-200 hover:bg-red-200
                  ${deleteMode ? 'bg-red-500' : 'bg-red-100'}
                `}
              >
                Mode suppression
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-100 hover:bg-blue-200 rounded-md p-2 cursor-pointer transition-colors duration-200" onClick={resetMembers}>
            Restaurer les membres par défaut
          </button>
          <button className="bg-red-100 hover:bg-red-200 rounded-md p-2 cursor-pointer transition-colors duration-200" onClick={deleteMembers}>
            Supprimer tous les membres
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
