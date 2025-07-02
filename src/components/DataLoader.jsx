import { members } from '../data/members';

function DataLoader() {
  const existingMembers = localStorage.getItem('members');

  if (!existingMembers) {
    localStorage.setItem('members', JSON.stringify(members));
  }
}

export default DataLoader;
