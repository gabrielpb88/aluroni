import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import React, { lazy, Suspense } from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';

const Cardapio = lazy(() => import('./pages/Cardapio'));
const PaginaPadrao = lazy(() => import('./components/PaginaPadrao'));
const Sobre = lazy(() => import('./pages/Sobre'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Prato = lazy(() => import('./pages/Prato'));

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Menu />
        <Suspense>
          <Routes>
            <Route path="/" element={<PaginaPadrao />}>
              <Route index element={<Inicio />} />
              <Route path="cardapio" element={<Cardapio />} />
              <Route path="sobre" element={<Sobre />} />
            </Route>
            <Route path="prato/:id" element={<Prato />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </main>
  );
}
