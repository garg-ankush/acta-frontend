import { prisma } from ".";

export async function readArticles() {
    try {
        const posts = await prisma.post.findMany()
        return { posts }
    } catch (error) {
        return { error }
    }
}

export async function uploadArticle(post: any) {
    try {
        const postFromDB = await prisma.post.create({data: post})
        return {post: postFromDB}
    } catch (error) {
        return {error}
    }
}