import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import '../styles/profile.css';

const Profile = () => {
  return (
    <Container className="profile text-center">
      <Image src="/profile.jpg" alt="Profile" className="profile-img mb-4" roundedCircle />
    </Container>
  );
}

export default Profile;
