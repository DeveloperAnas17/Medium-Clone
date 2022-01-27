import Head from 'next/head'
import Link from 'next/link'
import Banner from '../components/Banner'
import Header from '../components/Header'
import {sanityClient, urlFor} from "../sanity"
import { Post } from '../typing'

interface Props {
  posts: [Post]
}

export default function Home({posts}: Props) {

  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header />

      <Banner />

      {/* Posts */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 lg:p-6'>
        {posts.map(post => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="border rounded-lg group cursor-pointer overflow-hidden ">
              <img className='' src={urlFor(post.mainImage).url()!} alt="" />
              <div className='flex justify-between bg-white p-5  items-center'>
                <div>
                  <p className='text-lg font-bold '>{post.title}</p>
                  <p className="text-xs ">{post.description} by {post.author.name}</p>
                </div>

                <img src={urlFor(post.author.image).url()!} alt="" className='h-12 w-12 rounded-full border border-red-500 ' />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author-> {
      name, 
      image
    },
    description,
    mainImage,
    slug
  }`;

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts
    }
  }
}