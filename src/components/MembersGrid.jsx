import { useState, useEffect } from 'react';
import MemberCard from './MemberCard';

function MemberGrid() {
  const [members, setMembers] = useState([]);
  
  const loadMembers = () => {
    const savedMembers = JSON.parse(localStorage.getItem('members') || '[]');
    setMembers(savedMembers);
  }

  useEffect(() => {
    //Initial loading
    loadMembers();

    //CustomEvent DataLoaded 
    const handleDataLoaded = (event) => {
      setMembers(event.detail.members);
      setIsLoading(false);
    };

    //CustomEvent MemberAdded
    const handleMemberAdded = () => {
      loadMembers(); 
    };

    //EventsListener
    window.addEventListener('dataLoaded', handleDataLoaded);
    window.addEventListener('memberAdded', handleMemberAdded);

    //onDestroy
    return () => {
      window.removeEventListener('dataLoaded', handleDataLoaded);
      window.removeEventListener('memberAdded', handleMemberAdded);
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-300 to-white w-full">
      <div className="flex justify-center mx-auto gap-4 pad-4 mb-10">
        <button className="bg-white rounded-md p-2">Restaurer les membres par défaut</button>
        <button className="bg-white rounded-md p-2">Supprimer tous les membres</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {members.map((member, index) => <MemberCard member={member} key={index}/>)}
      </div>
    </div>
  );
}

export default MemberGrid;