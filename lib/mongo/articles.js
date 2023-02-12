import clientPromise from "./mongo";

let client
let db 
let articlesCollection 

async function initializeDB() {
    if (db) return 
    try {
        client = await clientPromise
        db = await client.db()
        articlesCollection = await db.collection("articlesCollection")
    } catch (err) {
        throw new Error("Failed to establish connection to the database")
    }
}

;(async () => {
    await initializeDB()
})()

export async function getArticles() {
    try {
        if (!articlesCollection) await initializeDB()

        const result = await articlesCollection
            .findOne(
            {},
            { sort: { _id: -1 } }
          );
        
        const results = result[Object.keys(result)[0]]
        return {articles: results}

    } catch (error) {
        return {error: "Failed to fetch articles."}
    }
}



