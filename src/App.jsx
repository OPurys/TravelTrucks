import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Container from './components/Container/Container';
import Features from './components/Features/Features';
import Reviews from './components/Reviews/Reviews';

const App = () => {
  return (
    <div>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="catalog/:id" element={<DetailsPage />}>
              <Route path="features" element={<Features />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </div>
  );
};
export default App;
