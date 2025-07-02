import MemberCard from './MemberCard';

function MemberGrid({addedMember}) {
  const existingMembers = JSON.parse(localStorage.getItem('members') || '[]');

  return (
    <div className="bg-gradient-to-b from-gray-300 to-white w-full">
      <div className="flex justify-center mx-auto gap-4 pad-4 mb-10">
        <button className="bg-white rounded-md p-2">Restaurer les membres par défaut</button>
        <button className="bg-white rounded-md p-2">Supprimer tous les membres</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {existingMembers.map((member, index) => <MemberCard member={member} key={index}/>)}
      </div>
    </div>
  );
}

export default MemberGrid;