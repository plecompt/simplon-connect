import MemberGrid from "./components/MembersGrid";
import Header from "./components/Header";
import AddMember from "./components/AddMember";
import SearchBar from "./components/SearchBar";
import DataLoader from "./components/DataLoader";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <DataLoader/>
      <Header/>
      <AddMember/>
      <SearchBar/>
      <MemberGrid/>
      <Footer/>
    </>    
  );
}

export default App;