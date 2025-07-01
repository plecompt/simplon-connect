function MemberCard({member}) {
  return (
    <div className="-wbghite p-6 rounded-lg shadow-md border border-gray-200">
      <img className="mx-auto block w-24 h-24 rounded-full object-cover mb-4" src={member.imageUrl} alt={"Image de profil de " + member.firstName} />

      <h3 className="text-xl font-bold text-gray-800 mb-2">
        {member.firstName} {member.lastName}
      </h3>
      
      <div className="mb-3">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          {member.tech}
        </span>
      </div>
      
      <p className="text-gray-600 italic">
        "{member.message}"
      </p>
    </div>
  );
}

export default MemberCard;