import Badge from './Badge';
import {useState} from 'react';

function MemberCard({member}) {
  const [toggleBadge, setToggleBadge] = useState(false);

  const handleClick = () => {
    setToggleBadge(!toggleBadge);
  };

  return (
    <div className="-wbghite p-6 rounded-lg shadow-md bg-white border-white" onClick={handleClick}>
      <img className="mx-auto block w-24 h-24 rounded-full object-cover mb-4" src={member.imageUrl} alt={"Image de profil de " + member.firstName} />

      <h3 className="text-xl font-bold text-gray-800 mb-2">
        {member.firstName} {member.lastName}
      </h3>
      
      <Badge toggleBadge = {toggleBadge} tech = {member.tech}/>
      
      <p className="text-gray-600 italic">
        "{member.message}"
      </p>
    </div>
  );
}

export default MemberCard;