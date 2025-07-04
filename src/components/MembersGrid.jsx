import { useState, useEffect } from 'react';
import MemberCard from './MemberCard';

function MemberGrid() {
  const [members, setMembers] = useState([]);

  //Load members to localStorage
  const loadMembers = () => {
    if (localStorage.getItem('filtered') === 'true') {
      setMembers(JSON.parse(localStorage.getItem('filteredMembers') || '[]'));
    } else {
      setMembers(JSON.parse(localStorage.getItem('members') || '[]'));
    }
  }

  useEffect(() => {
    //Initial loading
    loadMembers();

    //CustomEvent DataLoaded 
    const handleDataLoaded = (event) => {
      setMembers(event.detail.members);
    };

    //CustomEvent Member added or deleted
    const handleMembersUpdated = () => {
      loadMembers();
    };

    //EventsListener
    window.addEventListener('dataLoaded', handleDataLoaded);
    window.addEventListener('membersUpdated', handleMembersUpdated);

    //CleanUp
    return () => {
      window.removeEventListener('dataLoaded', handleDataLoaded);
      window.removeEventListener('membersUpdated', handleMembersUpdated);
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-300 to-white w-full p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 mx-auto">
        {members.length > 0 ? (
          members.map((member, index) => (
            <MemberCard member={member} key={index} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-600 text-lg">Aucun membre trouvé</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MemberGrid;