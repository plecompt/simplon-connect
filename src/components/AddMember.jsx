import { useState } from 'react';

function AddMember({addedMember, setAddedMember}) {
  //States for every inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [technology, setTechnology] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [message, setMessage] = useState('');

  //prevent default submit and checking data validity
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !technology) {
      alert('Prénom, nom et technologie sont obligatoires !');
      return;
    }

    // Creating new member
    const newMember = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      tech: technology.trim(),
      message: message.trim() || 'Pas de message',
      imageUrl: imageUrl.trim() || 'https://s3.eu-central-1.amazonaws.com/uploads.mangoweb.org/shared-prod/visegradfund.org/uploads/2021/08/placeholder-male.jpg',
    };

    // Because we can't push on localStorage, making a copy of members, adding the newMember
    const existingMembers = JSON.parse(localStorage.getItem('members') || '[]');
    const updatedMembers = [...existingMembers, newMember];
    localStorage.setItem('members', JSON.stringify(updatedMembers));

    // Reset form
    setFirstName('');
    setLastName('');
    setTechnology('');
    setImageUrl('');
    setMessage('');

    setAddedMember(1);
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-300 placeholder-gray-700 text-black">
      <form className="w-10/12 p-8 space-y-4 mx-auto rounded-lg" onSubmit={handleSubmit}>
        <h1 className="text-xl font-bold">Ajouter un nouveau membre</h1>

        <div className="flex gap-4">
          <input type="text" placeholder="Prénom" className="flex-1 p-2 border rounded" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <input type="text" placeholder="Nom" className="flex-1 p-2 border rounded" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>

        <input type="text" placeholder="Technologie" className="w-full p-2 border rounded" value={technology} onChange={(e) => setTechnology(e.target.value)} />
        <input type="text" placeholder="URL image (optionnel)" className="w-full p-2 border rounded" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />

        <textarea rows="3" placeholder="Message personnel (optionnel)" className="w-full p-2 border rounded" value={message} onChange={(e) => setMessage(e.target.value)} />

        <button className="w-full bg-white text-black py-2 rounded" type="submit">Ajouter le membre</button>
      </form>
    </div>
  );
}

export default AddMember;