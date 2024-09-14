import Head from 'next/head';
import withLayout from '../components/Layout.js'


const House = props => (
  <div>
    <Head>
      <title>The page title</title>
    </Head>
    <p>custom title</p>
  </div>
)

export default withLayout(House);