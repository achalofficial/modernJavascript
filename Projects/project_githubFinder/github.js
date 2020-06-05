class Github {
  constructor() {
    this.client_id = '898d33c1e3850882e122';
    this.client_secret = '495f3827465a5a2a5bfe97a55ad61427228a3807';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}