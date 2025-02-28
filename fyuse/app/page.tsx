import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ShirtIcon as Tshirt,
  ShoppingBag,
  Ruler,
  ThumbsUp,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex mx-auto flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Tshirt className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">Fyuse</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#fitur"
          >
            Fitur
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#cara-kerja"
          >
            Cara Kerja
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#unduh"
          >
            Unduh
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 mx-auto lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient" />
          <div className="absolute inset-0 opacity-50 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-size-200 animate-shimmer" />
          <div className="container relative mx-auto px-4 md:px-6">
            <div className="grid gap-6 mx-auto lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 text-white">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    For You Style!
                  </h1>
                  <p className="max-w-[600px] text-gray-100 md:text-xl">
                    Dapatkan rekomendasi gaya yang dipersonalisasi dan rasakan pengalaman ruang ganti digital yang belum pernah ada sebelumnya.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <form className="flex flex-col gap-2 md:flex-row">
                    <Input
                      placeholder="Masukkan email Anda"
                      type="email"
                      className="flex-1 bg-white text-gray-900"
                    />
                    <Button
                      type="submit"
                      className="bg-white text-blue-600 hover:bg-gray-100"
                    >
                      Join Waitlist
                    </Button>
                  </form>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/logo.ico"
                  alt="Pratinjau Aplikasi Fyuse"
                  width={300}
                  height={300}
                  className="rounded-2xl border-4 border-white shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="fitur"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Fitur Utama
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Ruler className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">
                  Rekomendasi Gaya yang Dipersonalisasi
                </h3>
                <p className="text-gray-600">
                  FYUSE memahami gayamu! Dapatkan rekomendasi outfit yang disesuaikan dengan preferensi dan bentuk tubuhmu. Tidak perlu lagi bingung memilih pakaian yang tepat!
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <ThumbsUp className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">Pengalaman Ruang Ganti Digital</h3>
                <p className="text-gray-600">
                  Rasakan sensasi mencoba pakaian secara langsung dengan teknologi virtual try-on terdepan. Lihat bagaimana pakaian itu pas di tubuhmu dari berbagai sudut, seolah-olah kamu sedang bercermin di ruang ganti sungguhan!
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <ShoppingBag className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">Integrasi Shopee</h3>
                <p className="text-gray-600">
                  Belanja gaya yang direkomendasikan langsung di Shopee dengan
                  mudah.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="cara-kerja"
          className="w-full mx-auto py-12 md:py-24 lg:py-32"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Cara Kerja
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
              {[
                {
                  step: 1,
                  title: "Pindai Bentuk Tubuhmu",
                  description: "Mulai petualangan gayamu dengan memindai tubuhmu menggunakan kamera smartphone. FYUSE akan menciptakan model 3D yang akurat, lengkap dengan ukuran tubuhmu yang sesungguhnya. Ini adalah langkah awal untuk pengalaman virtual try-on yang realistis",
                },
                {
                  step: 2,
                  title: "Masukkan Preferensi Gayamu",
                  description: "Ceritakan tentang gayamu! Pilih warna favoritmu, gaya busana yang kamu sukai, dan informasi tambahan lainnya. FYUSE akan menggunakan data ini untuk memberikan rekomendasi yang benar-benar personal",
                },
                {
                  step: 3,
                  title: "Dapatkan Rekomendasi Gaya",
                  description: "FYUSE akan menganalisis preferensi dan bentuk tubuhmu, lalu memberikan rekomendasi gaya yang paling sesuai. Temukan outfit yang sempurna untukmu, tanpa perlu repot mencari!",
                },
                {
                  step: 4,
                  title: "Coba Secara Virtual",
                  description: "Pilih produk yang kamu suka dan lihat bagaimana produk tersebut terlihat di tubuhmu secara virtual. FYUSE memberikan pengalaman virtual try-on yang realistis, seolah-olah kamu sedang bercermin di ruang ganti sungguhan",
                },
                {
                  step: 5,
                  title: "Pesan Sekarang",
                  description: "Setelah menemukan outfit yang sempurna, kamu bisa langsung memesannya melalui aplikasi FYUSE. Belanja online jadi lebih mudah, cepat, dan menyenangkan!",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="unduh"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-50 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-size-200 animate-shimmer" />
          <div className="container relative mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Siap Menemukan Gaya Anda?
              </h2>
              <p className="max-w-[600px] text-gray-200 md:text-xl">
                Kunjungi Fyuse sekarang dan mulai temukan fashion yang sempurna
                untuk Anda.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="flex-1 bg-white text-gray-900"
                    placeholder="Masukkan email Anda"
                    type="email"
                  />
                  <Button className="bg-white text-blue-600 hover:bg-gray-100">
                    Dapatkan Link
                  </Button>
                </form>
                <p className="text-xs text-gray-200">
                  Dengan mendaftar, Anda menyetujui Syarat Layanan dan Kebijakan
                  Privasi kami.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Kenapa Fyuse?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-2">
                  Tingkatkan Kepercayaan Diri Belanja Online
                </h3>
                <p className="text-gray-600">
                  Ucapkan selamat tinggal pada keraguan saat belanja online! FYUSE memungkinkanmu melihat bagaimana pakaian terlihat di tubuhmu secara virtual, sehingga kamu bisa membuat keputusan pembelian yang lebih percaya diri
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-2">
                  Hemat Waktu dan Tenaga
                </h3>
                <p className="text-gray-600">
                  Tidak perlu lagi repot pergi ke toko dan mengantri di ruang ganti. FYUSE memungkinkanmu mencoba pakaian kapan saja dan di mana saja, langsung dari smartphone-mu!
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-2">Pengalaman Belanja yang Lebih Menyenangkan</h3>
                <p className="text-gray-600">
                  FYUSE mengubah pengalaman belanja online menjadi lebih interaktif, menyenangkan, dan bebas stres. Temukan gaya terbaikmu dengan cara yang lebih mudah dan efisien!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2025 Fyuse. Hak cipta dilindungi undang-undang.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Syarat Layanan
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Kebijakan Privasi
          </Link>
        </nav>
      </footer>
    </div>
  );
}