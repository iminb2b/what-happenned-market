import { ThemeProvider } from 'styled-components';
import BestProduct from './components/BestProduct';
import BrandStory from './components/BrandStory';
import Footer from './components/Footer';
import Header from './components/Header';
import Introduction from './components/Introduction';
import MainBanner from './components/MainBanner';
import News from './components/News';
import Products from './components/Products';
import Video from './components/Video';
import Theme from './Theme';
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <MainBanner />
      <Introduction />
      <BestProduct />
      <Products />
      <BrandStory />
      <News />
      <Video />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
