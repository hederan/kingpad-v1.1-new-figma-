import { Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router, Navigate, useNavigate } from 'react-router-dom';

import { PUBLIC_ROUTES } from './config/routes';

import { Provider } from './Provider';
import { Layout } from './layouts/layout';

import { Home } from './pages/Home';
import { NotFoundPage } from './pages/404';
import { PresalePage } from './pages/Presale';
import { AboutPage } from './pages/About';
import { Audit } from './pages/Audit';
import { KYC } from './pages/KYC';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Suspense fallback={<>Loading</>}>
      <Router>
        <Provider>
          <Layout>
            <Routes>
              <Route path={PUBLIC_ROUTES.default} element={<Home />} />
              <Route path={PUBLIC_ROUTES.home} element={<Home />} />
              <Route path={PUBLIC_ROUTES.presale} element={<PresalePage />} />
              <Route path={PUBLIC_ROUTES.about} element={<AboutPage />} />
              <Route path={PUBLIC_ROUTES.audit} element={<Audit />} />
              <Route path={PUBLIC_ROUTES.kyc} element={<KYC />} />
              <Route path={PUBLIC_ROUTES.privacy} element={<Privacy />} />
              <Route path={PUBLIC_ROUTES.terms} element={<Terms />} />
              <Route path={PUBLIC_ROUTES.contact} element={<Contact />} />
              <Route path={PUBLIC_ROUTES.error404} element={<NotFoundPage />} />
              <Route path="*" element={<Navigate to={PUBLIC_ROUTES.error404} replace />} />
            </Routes>
          </Layout>
        </Provider>
      </Router>
    </Suspense>
  );
}

export default App;
