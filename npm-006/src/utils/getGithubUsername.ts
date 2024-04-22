import { execSync } from "child_process";

export const getGithubUsername = () => {
  const gitUrl = execSync("git config --get remote.origin.url")
    .toString()
    .trim();
  const githubId = gitUrl.split("/")[3];

  return githubId;
};
