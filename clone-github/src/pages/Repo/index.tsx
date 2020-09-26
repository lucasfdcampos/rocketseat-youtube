import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from "./styles";

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={"username"} to={"/lucasfdcampos"}>
          lucasfdcampos
        </Link>

        <span>/</span>

        <Link
          className={"reponame"}
          to={"/lucasfdcampos/rocketseat-bootcamp-gostack-bonus-cursos"}
        >
          rocketseat-bootcamp-gostack-bonus-cursos
        </Link>
      </Breadcrumb>

      <p>
        Repository dedicated to Rocketseat's Gostack Bootcamp bonus (reward)
        courses.
      </p>

      <Stats>
        <li>
          <StarIcon />
          <b>8</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>1</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton
        href={
          "https://github.com/lucasfdcampos/rocketseat-bootcamp-gostack-bonus-cursos"
        }
      >
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
