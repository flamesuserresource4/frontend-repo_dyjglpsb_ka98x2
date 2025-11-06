import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-inter text-gray-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <a href="#home" className="text-sm text-gray-600 hover:text-gray-900">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
