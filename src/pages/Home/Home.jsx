import React from 'react';
import { Button, Navbar } from "flowbite-react";
import Welcome from '../../components/Welcome/Welcome';
import IllustrationPopup from '../../components/IllustrationPopup/IllustrationPopup';

const Home = () => {
  return (
    <div className="home bg-blue-800">
      <Navbar fluid rounded>
        <Navbar.Brand href="">
          <span className="self-center whitespace-nowrap text-xl font-semibold text-blue-800">
            Conscience
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Accueil
          </Navbar.Link>
          <Navbar.Link href="#">À propos</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      {/* Composant Welcome */}
      <Welcome />

      {/* Illustration Popup */}
      <IllustrationPopup
        videoSrc="/me3da.webm" // Vidéo située dans le dossier public
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit autem ipsum, mollitia sint omnis illo eaque aliquam necessitatibus. Non nostrum eaque ut illum. Dolore, animi! Reiciendis nam eum voluptas necessitatibus."
      />
    </div>
  );
};

export default Home;
