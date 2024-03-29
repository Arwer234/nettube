import Carousel from '../components/Carousel';
import VideosList from '../components/VideosList';

const links = [
  'https://wallpapercave.com/wp/wp3982534.jpg',
  'https://wallpaperaccess.com/full/5486200.jpg',
  'https://images2.alphacoders.com/879/879599.png',
];

function HomePage() {
  return (
    <>
      <Carousel links={links} />
      <VideosList type="all" />
    </>
  );
}

export default HomePage;
