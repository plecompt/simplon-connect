import Badge from './Badge';
import {useState} from 'react';

function MemberCard({member}) {
  const [toggleBadge, setToggleBadge] = useState(false);
  const [toggleHover, setToggleHover] = useState(false);

  const handleClickOnBadge = () => {
    setToggleBadge(!toggleBadge);
  };

  const handleMouseEnter = () => {
    setToggleHover(true);
  };

  const handleMouseLeave = () => {
    setToggleHover(false);
  };

  const deleteMember = (e) => {
    //Click can't execute other method
    e.stopPropagation();

    //getting members
    let existingMembers = JSON.parse(localStorage.getItem('members')) || [];

    //deleting using name and lastname
    const updatedMembers = existingMembers.filter(m => m.firstName !== member.firstName && m.lastName !== member.lastName);
    
    localStorage.setItem('members', JSON.stringify(updatedMembers));

    //sending custom event to membersGrid
    window.dispatchEvent(new CustomEvent('membersUpdated'));
  };

  return (
    <div className="hover:shadow-2xl cursor-pointer transition-shadow duration-200 p-6 rounded-lg shadow-md bg-white border-white flex flex-col gap-1.5" onClick={handleClickOnBadge} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img className="mx-auto block w-24 h-24 rounded-full object-cover mb-4" src={member.imageUrl} alt={"Image de profil de " + member.firstName} />

      <h3 className="text-xl font-bold text-gray-800 mb-2">
        {member.firstName} {member.lastName}
      </h3>
      
      <Badge toggleBadge = {toggleBadge} tech = {member.tech}/>
      
      <p className="text-gray-600 italic">"{member.message}"</p>
      
      <button className={`block mx-auto cursor-pointer bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded ${ toggleHover && (localStorage.getItem('deleteMode') == 'true') ? 'visible' : 'invisible'}`} onClick={deleteMember}>Supprimer</button>
    </div>
  );
}

export default MemberCard;