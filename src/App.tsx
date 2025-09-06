import { MDXProvider } from '@mdx-js/react';
import { lazy, Suspense } from 'react';
const Content = lazy(() => import('./content/readme.mdx'));
import './index.css';
const App = () => {
  return (
    <div className="canvas flex min-h-screen w-screen flex-col items-center justify-center bg-gray-100 p-9">
      <Suspense fallback={<div>Memuat Readme...</div>}>
        <div className="prose max-w-3xl rounded-lg bg-white p-6 shadow-md">
          <MDXProvider>
            <Content />
          </MDXProvider>
        </div>
      </Suspense>
      <p className="mt-6 text-xs text-gray-600">
        Made with ❤️ by <a href="https://github.com/dai-rewahandi">Dai</a> - Copyright &copy; 2025 All rights reserved.
      </p>
    </div>
  );
};

export default App;
