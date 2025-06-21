import NavBar from "./component/NavBar/NavBar";
import EmployeeLog from "./Pages/EmployeeLog/EmployeeLog";

function App() {
  return (
    <div className="">
      <NavBar></NavBar>
      <main className="mt-9 px-14 mb-20">
        <EmployeeLog></EmployeeLog>
      </main>
    </div>
  );
}

export default App;
