import MemberGrid from "./components/MembersGrid";
import Header from "./components/Header";
import AddMember from "./components/AddMember";
import SearchBar from "./components/SearchBar";
import DataLoader from "./components/DataLoader";

function App() {
  return (
    <>
      <DataLoader/>
      <Header/>
      <AddMember/>
      <SearchBar/>
      <MemberGrid/>
    </>    
  );
}

export default App;