import { useEffect } from 'react';
import { defaultMembers } from '../data/members';

function DataLoader() {
  useEffect(() => {
    if (!localStorage.getItem('members')) {
      localStorage.setItem('members', JSON.stringify(defaultMembers));

      window.dispatchEvent(new CustomEvent('dataLoaded', {
        detail: { members: defaultMembers }
      }));
    } else {
      const existingMembers = JSON.parse(localStorage.getItem('members'));
      window.dispatchEvent(new CustomEvent('dataLoaded', {
        detail: { members: existingMembers }
      }));
    }
  }, []);

  return null;
}


export default DataLoader;