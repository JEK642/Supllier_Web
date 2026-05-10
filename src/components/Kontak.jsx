export default function Kontak() {
  return (
    <section id="kontak" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Card utama */}
        <div className="bg-[#0F172A] rounded-3xl px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Teks */}
          <div className="flex flex-col gap-4 max-w-lg">
            <span
              className="bg-[#DDE5D3] text-[#7A9D54] text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase w-fit"
              style={{ fontFamily: "Inter" }}
            >
              Hubungi Kami
            </span>
            <h2
              className="text-4xl font-bold text-white tracking-tight"
              style={{ fontFamily: "Manrope" }}
            >
              Siap Jadi Mitra
              <br />
              Bisnis Anda?
            </h2>
            <p
              className="text-slate-400 leading-relaxed"
              style={{ fontFamily: "Inter" }}
            >
              Konsultasikan kebutuhan buah dan sayur bisnis Anda
              bersama kami. Respon cepat, harga bersaing, kualitas
              terjamin.
            </p>
          </div>

          {/* Info Kontak */}
          <div className="flex flex-col gap-4 w-full md:w-auto">

            {/* WhatsApp */}
            <a
              href="https://wa.me/6208819799737"
              target="_blank"
              className="flex items-center gap-4 bg-[#7A9D54] hover:bg-[#6B8F47] text-white px-7 py-4 rounded-2xl transition-colors duration-200"
            >
              <span className="text-2xl">💬</span>
              <div>
                <p className="font-semibold text-sm" style={{ fontFamily: "Manrope" }}>
                  Chat WhatsApp
                </p>
                <p className="text-white/70 text-xs" style={{ fontFamily: "Inter" }}>
                  +62 881-9799-737
                </p>
              </div>
            </a>

            {/* Email */}
            <div className="flex items-center gap-4 bg-white/10 px-7 py-4 rounded-2xl">
              <span className="text-2xl">📧</span>
              <div>
                <p className="font-semibold text-sm text-white" style={{ fontFamily: "Manrope" }}>
                  Email Kami
                </p>
                <p className="text-white/70 text-xs" style={{ fontFamily: "Inter" }}>
                  kalamsupplies@gmail.com
                </p>
              </div>
            </div>

            {/* Lokasi */}
            <div className="flex items-center gap-4 bg-white/10 px-7 py-4 rounded-2xl">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-semibold text-sm text-white" style={{ fontFamily: "Manrope" }}>
                  Lokasi
                </p>
                <p className="text-white/70 text-xs" style={{ fontFamily: "Inter" }}>
                  Balikpapan, Kalimantan Timur
                </p>
              </div>
            </div>

          </div>{/* tutup kolom kanan */}

        </div>{/* tutup card utama */}

      </div>{/* tutup container */}
    </section>
  )
}