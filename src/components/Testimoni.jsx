export default function Testimoni() {
  return (
    <section id="testimoni" className="bg-[#F8FAFC] py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="bg-[#DDE5D3] text-[#7A9D54] text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase"
            style={{ fontFamily: "Inter" }}
          >
            Testimoni
          </span>
          <h2
            className="text-4xl font-bold text-[#0F172A] mt-4 tracking-tight"
            style={{ fontFamily: "Manrope" }}
          >
            Kata Mitra Kami
          </h2>
          <p
            className="text-[#475569] mt-3 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter" }}
          >
            Kepercayaan bisnis-bisnis di Balikpapan adalah motivasi
            kami untuk terus menjaga kualitas setiap hari.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Budi Santoso",
              role: "Manajer F&B, Hotel Grand Balikpapan",
              text: "Kalam Supplies selalu tepat waktu dan kualitas produknya konsisten. Kami tidak perlu khawatir soal stok sayur setiap pagi.",
              stars: 5,
            },
            {
              name: "Siti Rahmawati",
              role: "Owner, Restoran Dapur Borneo",
              text: "Harga transparan dan tidak pernah mengecewakan. Sudah 2 tahun bermitra dan tidak ada alasan untuk pindah supplier.",
              stars: 5,
            },
            {
              name: "Andreas Wijaya",
              role: "Chef Eksekutif, Kafe Teluk Indah",
              text: "Buah-buahan dari Kalam selalu segar dan tampilannya bagus. Tamu-tamu kami sering memuji kualitas hidangan kami.",
              stars: 5,
            },
          ].map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl p-7 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Bintang */}
              <div className="flex gap-1">
                {Array.from({ length: item.stars }).map((_, i) => (
                  <span key={i} className="text-[#7A9D54] text-sm">★</span>
                ))}
              </div>

              {/* Teks testimoni */}
              <p
                className="text-[#475569] text-sm leading-relaxed flex-1"
                style={{ fontFamily: "Inter" }}
              >
                "{item.text}"
              </p>

              {/* Profil */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div className="w-9 h-9 rounded-full bg-[#DDE5D3] flex items-center justify-center">
                  <span
                    className="text-[#7A9D54] font-bold text-sm"
                    style={{ fontFamily: "Manrope" }}
                  >
                    {item.name[0]}
                  </span>
                </div>
                <div>
                  <p
                    className="text-[#0F172A] text-sm font-semibold"
                    style={{ fontFamily: "Manrope" }}
                  >
                    {item.name}
                  </p>
                  <p
                    className="text-[#475569] text-xs"
                    style={{ fontFamily: "Inter" }}
                  >
                    {item.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>{/* tutup grid */}

      </div>{/* tutup container */}
    </section>
  )
}