import { useEffect } from 'react';
import { defaultMembers } from '../data/members';

function DataLoader() {
  useEffect(() => {
    // If members doesn't exist in local storage, loading ressources
    if (!localStorage.getItem('members')) {
      localStorage.setItem('members', JSON.stringify(defaultMembers));
      window.dispatchEvent(new CustomEvent('dataLoaded'));
    } else {
      window.dispatchEvent(new CustomEvent('dataLoaded'))
    }
    // if deleteMode doesn't exist, creating data and setting it to false
    if (!localStorage.getItem('deleteMode')){
        localStorage.setItem('deleteMode', false);
    }
  }, []);

  return null;
}


export default DataLoader;