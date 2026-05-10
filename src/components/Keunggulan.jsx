export default function Keunggulan() {
  return (
    <section id="keunggulan" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header Section */}
        <div className="text-center mb-16">
          <span
            className="bg-[#DDE5D3] text-[#7A9D54] text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase"
            style={{ fontFamily: "Inter" }}
          >
            Mengapa Kami
          </span>
          <h2
            className="text-4xl font-bold text-[#0F172A] mt-4 tracking-tight"
            style={{ fontFamily: "Manrope" }}
          >
            Keunggulan Kalam Supplies
          </h2>
          <p
            className="text-[#475569] mt-3 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter" }}
          >
            Kami hadir sebagai mitra terpercaya untuk kebutuhan
            bahan segar bisnis Anda setiap harinya.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "🌿",
              title: "Produk Selalu Segar",
              desc: "Buah dan sayur dipanen langsung dari petani lokal dan dikirim di hari yang sama untuk menjaga kualitas terbaik.",
            },
            {
              icon: "🚚",
              title: "Pengiriman Tepat Waktu",
              desc: "Armada pengiriman kami siap beroperasi setiap pagi agar dapur bisnis Anda tidak pernah kehabisan stok.",
            },
            {
              icon: "🤝",
              title: "Harga Transparan",
              desc: "Tidak ada biaya tersembunyi. Harga grosir yang jujur dengan kontrak fleksibel sesuai kebutuhan bisnis Anda.",
            },
            {
              icon: "📦",
              title: "Kemasan Higienis",
              desc: "Setiap produk dikemas dengan standar kebersihan tinggi untuk menjaga keamanan pangan pelanggan Anda.",
            },
            {
              icon: "🌱",
              title: "Produk Lokal Berkualitas",
              desc: "Kami bermitra dengan petani Kalimantan untuk menghadirkan produk lokal terbaik ke meja bisnis Anda.",
            },
            {
              icon: "📞",
              title: "Layanan Responsif",
              desc: "Tim kami siap dihubungi via WhatsApp kapan saja untuk konsultasi, perubahan order, dan pertanyaan lainnya.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[#F8FAFC] rounded-2xl p-7 flex flex-col gap-3 hover:shadow-md transition-shadow duration-300"
            >
              <span className="text-3xl">{item.icon}</span>
              <h3
                className="text-[#0F172A] font-semibold text-lg"
                style={{ fontFamily: "Manrope" }}
              >
                {item.title}
              </h3>
              <p
                className="text-[#475569] text-sm leading-relaxed"
                style={{ fontFamily: "Inter" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>{/* tutup grid */}

      </div>{/* tutup container */}
    </section>
  )
}