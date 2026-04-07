export default function Home() {
  return (
    <main className="bg-[#F8F5F0] text-[#1C1C1C] min-h-screen">

      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-[#E6E0D8]">
        <h1 className="text-2xl font-bold tracking-wide">VASTRA</h1>
        <div className="space-x-6 text-sm">
          <a href="#" className="hover:text-[#6E0F1A]">Home</a>
          <a href="#" className="hover:text-[#6E0F1A]">Shop</a>
          <a href="#" className="hover:text-[#6E0F1A]">About</a>
          <a href="#" className="hover:text-[#6E0F1A]">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <h2 className="text-5xl font-bold mb-6">
          Every Saree Has a Story
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          Discover authentic handloom sarees structured by Fabric, Region, and Tradition.
        </p>
        <button className="bg-[#6E0F1A] hover:bg-[#5a0c15] text-white px-8 py-3 rounded-2xl text-lg transition">
          Explore Collection
        </button>
      </section>

      {/* Featured Products */}
      <section className="px-8 pb-20">
        <h3 className="text-3xl font-semibold mb-10 text-center">
          Featured Sarees
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1622453312098-94f66b5bbf39" 
              alt="Kanjivaram Silk" 
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h4 className="text-lg font-semibold">Kanjivaram Silk</h4>
              <p className="text-sm text-gray-500">Handloom • Tamil Nadu</p>
              <p className="mt-3 font-bold text-[#6E0F1A]">₹12,000</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf" 
              alt="Banarasi Brocade" 
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h4 className="text-lg font-semibold">Banarasi Brocade</h4>
              <p className="text-sm text-gray-500">Silk • Uttar Pradesh</p>
              <p className="mt-3 font-bold text-[#6E0F1A]">₹9,500</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1596813362035-3edcff0c2487" 
              alt="Pochampally Ikat" 
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h4 className="text-lg font-semibold">Pochampally Ikat</h4>
              <p className="text-sm text-gray-500">Cotton • Telangana</p>
              <p className="mt-3 font-bold text-[#6E0F1A]">₹6,800</p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}