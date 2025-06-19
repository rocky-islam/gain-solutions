import NavBar from "./component/NavBar/NavBar";
import EmployeeLog from "./Pages/EmployeeLog/EmployeeLog";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <main className="mt-9 px-14">
        <EmployeeLog></EmployeeLog>
      </main>
    </>
  );
}

export default App;
