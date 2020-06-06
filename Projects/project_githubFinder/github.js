class Github {
  constructor() {
    this.client_id = '898d33c1e3850882e122';
    this.client_secret = '495f3827465a5a2a5bfe97a55ad61427228a3807';
    this.repos_count = 6 ;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}