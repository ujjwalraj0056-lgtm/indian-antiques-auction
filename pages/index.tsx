import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ransus Antique - Indian Antiques & Auction Platform</title>
        <meta name="description" content="Buy, sell, and auction genuine antiques and items across India" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
        {/* Header */}
        <header className="bg-white shadow-md">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">🏺 Ransus Antique</div>
            <div className="space-x-4">
              <Link href="/products" className="text-gray-700 hover:text-primary">Browse</Link>
              <Link href="/auctions" className="text-gray-700 hover:text-primary">Auctions</Link>
              <Link href="/sell" className="text-gray-700 hover:text-primary">Sell</Link>
              <Link href="/login" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-orange-600">Login</Link>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Discover India's Heritage with Ransus Antique
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Buy, sell, and auction genuine antiques and collectibles. Connect with collectors and enthusiasts across India.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/products" className="bg-primary text-white px-8 py-3 rounded-lg text-lg hover:bg-orange-600">
              Start Shopping
            </Link>
            <Link href="/sell" className="bg-secondary text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700">
              Start Selling
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🏺</div>
              <h3 className="text-xl font-bold mb-2">Genuine Antiques</h3>
              <p className="text-gray-600">Verified antiques with certificates of authenticity</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Live Auctions</h3>
              <p className="text-gray-600">Real-time bidding on rare collectibles</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
              <p className="text-gray-600">UPI, cards, and wallets via Razorpay</p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['Furniture', 'Jewelry', 'Paintings', 'Sculptures', 'Coins', 'Textiles', 'Pottery', 'Books'].map((cat) => (
              <Link key={cat} href={`/products?category=${cat}`} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition text-center">
                <h3 className="font-semibold text-lg">{cat}</h3>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 mt-20">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; 2025 Ransus Antique. Made in India 🇮🇳</p>
          </div>
        </footer>
      </div>
    </>
  );
}