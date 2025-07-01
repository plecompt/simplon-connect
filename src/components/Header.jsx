function Header() {
  return (
    <header className="text-black py-16 bg-gradient-to-b from-gray-300 to-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Simplon Connect
        </h1>
        
        <p className="text-xl mb-8 opacity-90">
          Découvrez et connectez-vous avec les membres de votre promotion
        </p>
        
        <div className="flex justify-center gap-8 text-lg">
          <span className="font-medium">👥 3 membres</span>
          <span className="font-medium">💻 3 technologies</span>
        </div>
      </div>
    </header>
  );
}

export default Header;