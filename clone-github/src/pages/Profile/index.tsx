import React from "react";

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
} from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RandomCalendar from "../../components/RandomCalendar";

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={"lucasfdcampos"}
            name={"Lucas Campos"}
            avatarUrl={"https://avatars0.githubusercontent.com/u/56896330?v=4"}
            followers={311}
            following={7}
            company={"Entrepreneur"}
            location={"Paraná, Brazil"}
            email={"lucascampos.ads@gmail.com"}
            blog={"https://www.linkedin.com/in/lucasfdcampos/"}
          />
        </LeftSide>

        <RightSide>
          <Repos>
            <h2>Random Repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={"lucasfdcampos"}
                  reponame={"rocketseat-bootcamp-gostack-bonus-cursos"}
                  description={
                    "Repository dedicated to Rocketseat Gostack Bootcamp bonus (reward) courses."
                  }
                  language={n % 3 === 0 ? "JavaScript" : "TypeScript"}
                  stars={8}
                  forks={1}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
