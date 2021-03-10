import "./App.css";
import Profile from "./profile/Profile";
import pic from "./profile/pic.png";

const handleName = (name) => alert(name);

function App() {
  return (
    <div className="App">
      <Profile
        profession="web developer"
        bio="single"
        fullName="Mohamed ben Mohamed"
        handleName={handleName}
      >
        <img src={pic} alt="profile" />
      </Profile>
    </div>
  );
}

export default App;
