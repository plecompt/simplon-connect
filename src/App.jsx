import MemberGrid from "./components/MembersGrid";
import Header from "./components/Header";
import AddMember from "./components/AddMember";
import SearchBar from "./components/SearchBar";
import DataLoader from "./components/DataLoader";
import Footer from "./components/Footer";
import ShuffleList from "./components/ShuffleList";

function App() {
  return (
    <>
      <DataLoader/>
      <Header/>
      <AddMember/>
      <SearchBar/>
      <MemberGrid/>
      <Footer/>
      {/* <ShuffleList></ShuffleList> */}
    </>    
  );
}

export default App;