import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { APIRepo } from "../../@types";

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
  const { username, reponame } = useParams();
  const [repo, setRepo] = useState<APIRepo>();

  useEffect(() => {
    fetch(`http://api.github.com/repos/${username}/${reponame}`).then(
      async (response) => {
        response.json().then((repo) => {
          setRepo(repo);
        });
      }
    );
  }, [username, reponame]);

  if (!repo) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={"username"} to={`/${username}`}>
          {repo.owner.login}
        </Link>

        <span>/</span>

        <Link
          className={"reponame"}
          to={`/${repo.owner.login}/${repo.name}`}
        >
          {repo.name}
        </Link>
      </Breadcrumb>

      <p>{repo.description}</p>

      <Stats>
        <li>
          <StarIcon />
          <b>{repo.stargazers_count}</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>{repo.forks}</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={repo.html_url}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
