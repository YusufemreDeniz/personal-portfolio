import { githubMockProjects } from "@/data/portfolio";
import type { GithubProjectItem } from "@/lib/types";

export interface GithubRepositoryPort {
  listPinnedProjects(): Promise<GithubProjectItem[]>;
}

class MockGithubRepository implements GithubRepositoryPort {
  async listPinnedProjects(): Promise<GithubProjectItem[]> {
    return Promise.resolve(githubMockProjects);
  }
}

// Swap this implementation with a real GitHub API provider later.
export const githubRepository: GithubRepositoryPort = new MockGithubRepository();
