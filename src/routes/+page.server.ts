import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
    const list = await fetch("https://api.github.com/users/dai-rewahandi/repos")
    const repo = await list.json()
    return { repo }
}
