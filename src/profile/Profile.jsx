import no_pic from "./no_pic.png";
import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  return (
    <div style={{ color: "red", fontWeight: "bold" }}>
      <h1 style={{ color: "blue" }}>User Profile</h1>
      <p>{children}</p>
      <p>Full Name: {fullName}</p>
      <p>Bio: {bio}</p>
      <p>Profession: {profession}</p>
      <button onClick={() => handleName(fullName)}>Click me</button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "No name",
  bio: "No bio",
  profession: "No profession",
  children: <img src={no_pic} alt="profile" />,
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func,
};

export default Profile;
