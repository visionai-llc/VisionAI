import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MotionConfig } from 'framer-motion';
import App from '@app/App';
import ErrorBoundary from '@shared/components/ErrorBoundary';
import { VisitedProvider } from '@shared/contexts/VisitedContext';
import './index.css';

// Ensure DOM is ready before mounting
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ErrorBoundary>
      <MotionConfig>
        <VisitedProvider>
          <App />
        </VisitedProvider>
      </MotionConfig>
    </ErrorBoundary>
  </StrictMode>
);
