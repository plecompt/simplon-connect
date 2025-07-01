import MemberGrid from "./components/MembersGrid";
import Header from "./components/Header";
import AddMember from "./components/AddMember";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Header/>
      <AddMember/>
      <SearchBar/>
      <MemberGrid/>
    </>    
  );
}

export default App;