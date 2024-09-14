import Link from 'next/link';

const Index = () => (
  <div>
    <h1>Home page</h1>
    <ul>
      <li><Link href='/blog'>Blog</Link></li>
      <li><Link href='/house'>House</Link></li>
    </ul>
    
    <style jsx>{`
      h1 {
        font-size: 3rem;
      }
    `}</style>
  </div>
)

export default Index