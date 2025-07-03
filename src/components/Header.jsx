import { useState } from "react";
import { useEffect } from "react";

function Header() {
  const [members, setMembers] = useState([]);
  const [membersCount, setMembersCount] = useState(0);
  const [techsCount, setTechsCount] = useState(0);

  const loadMembers = () => {
    const savedMembers = JSON.parse(localStorage.getItem('members') || '[]');
    const membersCount = savedMembers.length;
    const techsCount =  new Set(savedMembers.map(x => x.tech)).size
    
    setMembers(savedMembers);
    setMembersCount(membersCount);
    setTechsCount(techsCount);
  }

  useEffect(() => {
    //Initial loading
    loadMembers();

    //CustomEvent DataLoaded 
    const handleDataLoaded = (event) => {
      setMembers(event.detail.members);
      setIsLoading(false);
    };

    //CustomEvent Member added or deleted
    const handleMembersUpdated = () => {
      loadMembers();
    };

    //EventsListener
    window.addEventListener('dataLoaded', handleDataLoaded);
    window.addEventListener('membersUpdated', handleMembersUpdated);

    //onDestroy
    return () => {
      window.removeEventListener('dataLoaded', handleDataLoaded);
      window.removeEventListener('membersUpdated', handleMembersUpdated);
    };
  }, []);

  return (
    <header className="text-black py-16 bg-gradient-to-b from-gray-300 to-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Simplon Connect
        </h1>

        <p className="text-xl mb-8 opacity-90">
          Découvrez et connectez-vous avec les membres de votre promotion
        </p>

        <div className="flex justify-center gap-8 text-lg">
          <span className="font-medium">👥 {membersCount} membres</span>
          <span className="font-medium">💻 {techsCount} technologies</span>
        </div>
      </div>
    </header>
  );
}

export default Header;