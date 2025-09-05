import "./index.css";
import Content from "./content/readme.mdx";
import { MDXProvider } from "@mdx-js/react";
const App = () => {
  return (
    <div className="canvas flex w-screen min-h-screen bg-gray-100 flex-col p-9 items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl prose">
        <MDXProvider>
          <Content />
        </MDXProvider>
      </div>
    <p className="mt-6 text-xs text-gray-600">Made with ❤️ by <a href="https://github.com/dai-rewahandi">Dai</a> - Copyright &copy; {new Date().getFullYear()} All rights reserved.</p>
    </div>
  );
};

export default App;
