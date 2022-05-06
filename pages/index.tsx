import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';
import Contact from '../components/Contact';

const headerHeight: number = 65;

export default function HomePage() {
  return (
    <>
      <Layout headerHeight={headerHeight}>
        <Home headerHeight={headerHeight} />
        <Contact />
      </Layout>
    </>
  );
}
