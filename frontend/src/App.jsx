import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import BlogSection from './components/BlogSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-red-600 selection:text-white">
      <Header />
      <main>
        <Hero />
        <BlogSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
