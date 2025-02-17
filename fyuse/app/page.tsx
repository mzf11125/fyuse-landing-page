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
                    Temukan Gaya Sempurna Anda
                  </h1>
                  <p className="max-w-[600px] text-gray-100 md:text-xl">
                    Fyuse merekomendasikan fashion yang sesuai dengan bentuk
                    tubuh dan gaya Anda, terintegrasi dengan Shopee untuk
                    belanja yang mudah.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#unduh">
                    <Button className="bg-white text-blue-600 hover:bg-gray-100">
                      Kunjungi website
                    </Button>
                  </Link>
                  <Link href="#cara-kerja">
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-blue-600"
                    >
                      Pelajari Lebih Lanjut
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/capture.ico"
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
                  Analisis Ukuran Tubuh
                </h3>
                <p className="text-gray-600">
                  Dapatkan rekomendasi akurat berdasarkan ukuran tubuh unik
                  Anda.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <ThumbsUp className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">Preferensi Gaya</h3>
                <p className="text-gray-600">
                  Beritahu kami apa yang Anda suka, dan kami akan menemukan
                  pakaian yang sesuai dengan selera Anda.
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
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: 1,
                  title: "Kunjungi Website",
                  description: "Kunjungi website Fyuse dari browser Anda",
                },
                {
                  step: 2,
                  title: "Masukkan Ukuran",
                  description: "Masukkan ukuran tubuh Anda dengan akurat",
                },
                {
                  step: 3,
                  title: "Atur Preferensi",
                  description: "Beritahu kami tentang preferensi gaya Anda",
                },
                {
                  step: 4,
                  title: "Belanja di Shopee",
                  description:
                    "Jelajahi dan beli item yang direkomendasikan di Shopee",
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
                  Cocok untuk Orang Indonesia
                </h3>
                <p className="text-gray-600">
                  Kami memahami kebutuhan dan preferensi fashion orang
                  Indonesia.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-2">
                  Terintegrasi dengan Shopee
                </h3>
                <p className="text-gray-600">
                  Belanja mudah di platform e-commerce favorit Indonesia.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-2">Dukungan Lokal</h3>
                <p className="text-gray-600">
                  Tim dukungan pelanggan berbahasa Indonesia siap membantu Anda.
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
