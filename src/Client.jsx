import React from 'react';
import Home from './pages/Home/Home';
import { Footer } from "flowbite-react"; // Importer le composant Home
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

const Client = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Contenu principal */}
      <div className="flex-grow">
        <Home />
      </div>
      {/* Pied de page */}
      <Footer container>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          Conscience
            <Footer.LinkGroup>
              <Footer.Link href="#">À propos</Footer.Link>
              <Footer.Link href="#">Politique de confidentialité</Footer.Link>
              <Footer.Link href="#">Licences</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="™" year={2024} />
        </div>
      </Footer>
    </div>
  );
};

export default Client;
