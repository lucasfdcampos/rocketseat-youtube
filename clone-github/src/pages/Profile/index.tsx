import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData 
            username={'lucasfdcampos'}
            name={'Lucas Campos'}
            avatarUrl={'https://avatars0.githubusercontent.com/u/56896330?v=4'}
            followers={311}
            following={7}
            company={'Entrepreneur'}
            location={'Paraná, Brazil'}
            email={'lucascampos.ads@gmail.com'}
            blog={'https://www.linkedin.com/in/lucasfdcampos/'}
          />
        </LeftSide>
        
        <RightSide></RightSide>
      </Main>
    </Container>
  );
}

export default Profile;