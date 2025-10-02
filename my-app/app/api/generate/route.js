import clientPromise from '@/lib/mongodb'

export async function POST(request) {
  try {
    const body = await request.json()
    const { url, shorturl } = body

    if (!url) {
      return new Response(
        JSON.stringify({ success: false, error: true, message: 'URL is required!' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const client = await clientPromise
    const db = client.db('bitlink')
    const collection = db.collection('url')

    // Auto-generate slug if not provided
    const slug = shorturl || Math.random().toString(36).substr(2, 6)

    // Ensure slug is unique
    const existing = await collection.findOne({ shorturl: slug })
    if (existing) {
      return new Response(
        JSON.stringify({ success: false, error: true, message: 'Short URL already exists!' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Normalize original URL (ensure https:// prefix)
    let finalUrl = url
    if (!/^https?:\/\//i.test(finalUrl)) {
      finalUrl = 'https://' + finalUrl
    }

    // Insert into DB
    const result = await collection.insertOne({
      url: finalUrl,
      shorturl: slug
    })

    // Build absolute short URL
    const host = process.env.NEXT_PUBLIC_HOST || request.headers.get('origin')
    const shortLink = `${host}/${slug}`

    return new Response(
      JSON.stringify({
        success: true,
        error: false,
        message: 'Generated successfully',
        shortUrl: shortLink, // ✅ return usable short link
        insertedId: result.insertedId
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: true, message: err.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
