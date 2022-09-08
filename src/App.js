// import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div >
      <NavBar />
      {/* <ItemListContainer greeting='Hola desde ItemListContainer.'/> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
