import MemberGrid from "./components/MembersGrid";
import Header from "./components/Header";
import AddMember from "./components/AddMember";
import SearchBar from "./components/SearchBar";
import DataLoader from "./components/DataLoader";
import { useState } from 'react';

function App() {
  
  const [addedMember, setAddedMember] = useState();

  return (
    <>
      <DataLoader/>
      <Header/>
      <AddMember setAddedMember={setAddedMember}/>
      <SearchBar/>
      <MemberGrid addedMember={addedMember}/>
    </>    
  );
}

export default App;