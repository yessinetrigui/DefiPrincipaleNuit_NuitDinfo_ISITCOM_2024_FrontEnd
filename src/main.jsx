import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Custom styles
import 'flowbite/dist/flowbite.css'; // Flowbite styles
import App from './App.jsx'; // Import main App component
import IllustrationPopup from './components/IllustrationPopup/IllustrationPopup.jsx';
import { UserProvider } from './Context/UserProvider.jsx';

createRoot(document.getElementById('root')).render(
<UserProvider>
    <App />
  </UserProvider>
);
