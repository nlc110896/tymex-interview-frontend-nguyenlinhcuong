import Banner from '@/components/banner';
import Footer from '@/components/footer';
import Body from '@/components/body';
import Header from '@/components/header';
import { Box } from '@/components/HOC/box';

export default function Home() {
  return (
    <Box>
      <Header />
      <Banner />
      <Body />
      <Footer />
    </Box>
  );
}
