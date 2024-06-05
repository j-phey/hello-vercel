export const runtime = 'nodejs';
 
// To stream responses in Next.js, you must use Route Handlers in the App Router, even if the rest of your app uses the Pages Router.
 
export const dynamic = 'force-dynamic'; // static by default, unless reading the request
 
export function GET(request) {
    console.log(`VERCEL_REGION: ${process.env.VERCEL_REGION}`)
    return new Response(`Hello World! From VERCEL_REGION: ${process.env.VERCEL_REGION}`)
}