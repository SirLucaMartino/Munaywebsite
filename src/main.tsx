import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { legalOfficeSchema } from './seo/structured-data';

// Inject structured data
const schemaScript = document.getElementById('schema');
if (schemaScript) {
  schemaScript.textContent = JSON.stringify(legalOfficeSchema);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);