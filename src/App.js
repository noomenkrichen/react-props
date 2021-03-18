import "./App.css";
import Profile from "./profile/Profile";
import pic from "./profile/pic.png";

const handleName = (name) => alert(name);

function App() {
  return (
    <div className="App">
      <Profile
        profession="Web developer"
        bio="I'm learning javascript at GoMyCode"
        fullName="Noomen Krichen"
        handleName={handleName}
      >
        <img src={pic} alt="profile" />
      </Profile>
    </div>
  );
}

export default App;
