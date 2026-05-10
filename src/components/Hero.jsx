export default function Hero() {
  return (
    <section
      id="beranda"
      className="min-h-screen bg-[#F8FAFC] flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Kolom Kiri */}
          <div className="flex flex-col gap-6">

            {/* Badge */}
            <div className="inline-flex">
              <span
                className="bg-[#DDE5D3] text-[#7A9D54] text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase"
                style={{ fontFamily: "Inter" }}
              >
                Supplier Buah & Sayur Segar
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-5xl md:text-6xl font-bold text-[#0F172A] leading-tight tracking-tight"
              style={{ fontFamily: "Manrope" }}
            >
              Kesegaran Terbaik
              <br />
              <span className="text-[#7A9D54]">untuk Bisnis</span> Anda
            </h1>

            {/* Subheading */}
            <p
              className="text-[#475569] text-lg leading-relaxed max-w-md"
              style={{ fontFamily: "Inter" }}
            >
              Kami menyuplai buah dan sayur segar langsung ke hotel
              dan restoran di Balikpapan — tepat waktu, kualitas
              terjaga setiap hari.
            </p>

            {/* Tombol */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://wa.me/6208819799737"
                target="_blank"
                className="bg-[#0F172A] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#1E293B] transition-colors duration-200"
                style={{ fontFamily: "Inter" }}
              >
                Pesan Sekarang
              </a>
              <a
                href="#keunggulan"
                className="text-[#0F172A] text-sm font-semibold px-7 py-3.5 rounded-full border border-[#CBD5E1] hover:border-[#0F172A] transition-colors duration-200"
                style={{ fontFamily: "Inter" }}
              >
                Lihat Produk
              </a>
            </div>

          </div>{/* ✅ tutup kolom kiri */}

          {/* Kolom Kanan */}
          <div className="hidden md:flex justify-center">
            <div className="bg-[#DDE5D3] rounded-3xl p-10 flex flex-col gap-6 w-full max-w-sm">

              {[
                { number: "50+", label: "Mitra Bisnis Aktif" },
                { number: "100+", label: "Jenis Produk Segar" },
                { number: "5 Thn", label: "Pengalaman Beroperasi" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-2xl px-6 py-4 flex items-center gap-4">
                  <span
                    className="text-3xl font-bold text-[#0F172A]"
                    style={{ fontFamily: "Manrope" }}
                  >
                    {item.number}
                  </span>
                  <span
                    className="text-[#475569] text-sm"
                    style={{ fontFamily: "Inter" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}

            </div>
          </div>{/* ✅ tutup kolom kanan */}

        </div>{/* ✅ tutup grid */}
      </div>{/* ✅ tutup container */}
    </section>
  )
}