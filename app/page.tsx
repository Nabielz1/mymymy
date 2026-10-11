import Image from "next/image";

const wishes = [
  {
    number: "01",
    title: "Semoga mimpi-mimpimu pelan-pelan jadi nyata",
    note: "Aku tahu ada banyak hal yang sedang kamu usahakan. Take your time, love. Aku akan selalu dukung kamu, apa pun jalannya.",
  },
  {
    number: "02",
    title: "Semoga kamu selalu punya alasan untuk merasa tenang",
    note: "Kamu nggak harus selalu terlihat kuat. It's okay to rest, to cry, and to have bad days. Aku tetap ada di sini.",
  },
  {
    number: "03",
    title: "Semoga lebih banyak hal baik datang kepadamu",
    note: "Semoga kamu selalu sehat, dikelilingi orang-orang tulus, dan punya banyak alasan kecil untuk tersenyum.",
  },
];

const galleryPhotos = [
  { src: "/foto/20260410_170647.jpeg", alt: "Kenangan berdua", shape: "landscape" },
  { src: "/foto/41f4d036-7fb5-4f46-b6b8-05e345052406.png", alt: "Photo strip kenangan", contain: true },
  { src: "/foto/74856548-f0f0-49ce-afb8-db57a040756b.jpg", alt: "Potret kenangan" },
  { src: "/foto/compiled.jpeg", alt: "Kolase foto kenangan", contain: true },
  { src: "/foto/IMG-20250316-WA0002.jpeg", alt: "Momen jalan-jalan", shape: "portrait" },
  { src: "/foto/IMG-20250412-WA0020(2).jpeg", alt: "Momen bersama", shape: "portrait" },
  { src: "/foto/IMG-20251029-WA0026.jpeg", alt: "Kolase momen kecil", contain: true },
  { src: "/foto/IMG-20251029-WA0027.jpeg", alt: "Kolase kenangan" },
  { src: "/foto/IMG-20260409-WA0053.jpeg", alt: "Selfie bersama" },
  { src: "/foto/IMG-20260419-WA0046.jpeg", alt: "Momen berdua", shape: "portrait" },
  { src: "/foto/IMG-20260419-WA0048.jpeg", alt: "Kenangan di perjalanan", shape: "portrait" },
  { src: "/foto/IMG-20260514-WA0035.jpeg", alt: "Potret manis" },
  { src: "/foto/IMG-20260605-WA0050.jpeg", alt: "Selfie bersama", shape: "portrait" },
  { src: "/foto/IMG-20260610-WA0023.jpeg", alt: "Potret kenangan", shape: "portrait" },
  { src: "/foto/IMG_0032.PNG", alt: "Photo strip berdua", contain: true },
  { src: "/foto/IMG_1028.PNG", alt: "Selfie bersama", shape: "landscape" },
  { src: "/foto/IMG_1457.JPG", alt: "Photo strip kenangan", contain: true },
  { src: "/foto/motion_photo_1743442946657454070.jpeg", alt: "Momen jalan-jalan", shape: "portrait" },
  { src: "/foto/motion_photo_42244638259432902.jpeg", alt: "Momen malam bersama", shape: "portrait" },
  { src: "/foto/motion_photo_6340637320550999241.jpeg", alt: "Momen dengan foto kenangan", shape: "portrait" },
];

function HeartMark() {
  return <span className="heart-mark" aria-hidden="true">♥</span>;
}

export default function Home() {
  return (
    <main>
      <nav className="topbar" aria-label="Navigasi halaman">
        <a className="wordmark" href="#awal"><HeartMark /> untukmu</a>
        <a className="nav-link" href="#surat">A letter for you <span aria-hidden="true">↗</span></a>
      </nav>

      <section className="hero" id="awal">
        <div className="hero-copy">
          <p className="eyebrow"><span /> A LITTLE NOTE FOR YOUR NEW CHAPTER</p>
          <h1>Happy birthday,<br /><em>my love.</em></h1>
          <p className="hero-intro">Hari ini giliran kamu yang dirayakan, seseorang yang kehadirannya begitu berarti dalam hidupku. Aku bersyukur bisa mengenal dan menjadi bagian dari perjalanan hidupmu. I hope this new chapter brings you endless happiness, beautiful surprises, and all the good things you&apos;ve been wishing for. Semoga tahun ini membawa lebih banyak hal baik, dan membuatmu sebahagia kamu telah membuatku bahagia. <span aria-hidden="true">❤️</span></p>
          <a className="button-link" href="#surat">Ada surat untukmu <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-art" aria-label="Tempat foto kenangan kalian">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="photo-placeholder">
            <Image src="/foto/IMG_1457.JPG" alt="Photo strip kenangan kita" fill priority sizes="(max-width: 760px) 63vw, 30vw" />
          </div>
          <span className="floating-heart heart-one" aria-hidden="true">♡</span>
          <span className="floating-heart heart-two" aria-hidden="true">✳</span>
          <div className="art-caption"><span>SEBUAH HARI,</span><span>SEBUAH CERITA.</span></div>
        </div>
        <div className="hero-bottom"><span>CELEBRATING YOU, TODAY AND ALWAYS</span><span>01 / 04</span></div>
      </section>

      <section className="note-section" aria-labelledby="note-title">
        <div className="section-kicker"><span>01</span><span className="kicker-line" /><span>YANG INGIN KURAYAKAN</span></div>
        <div className="note-content">
          <h2 id="note-title">Hari ini kamu bertambah umur.<br /><em>Dan aku makin bersyukur punya kamu.</em></h2>
          <p>Perjalananmu sampai hari ini nggak selalu gampang. Ada hari-hari yang melelahkan dan hal-hal yang mungkin kamu simpan sendiri, tapi kamu tetap berusaha melangkah. Look at you, you’ve made it this far. Aku bangga banget sama kamu.</p>
          <p>Makasih yaa sudah bertahan dan jadi dirimu yang sekarang. Semoga kamu juga bisa melihat betapa hebatnya dirimu, seperti aku melihatmu.</p>
        </div>
        <span className="note-flower" aria-hidden="true">✳</span>
      </section>

      <section className="memories-section" aria-labelledby="memories-title">
        <div className="memories-heading">
          <div className="section-kicker"><span>02</span><span className="kicker-line" /><span>SEBUAH HARAPAN UNTUKMU</span></div>
          <h2 id="memories-title">Buat tahun yang baru,<br /><em>semoga banyak hal baik datang.</em></h2>
          <p>Namamu selalu ada di doa-doa baikku. Semoga Tuhan jaga setiap langkahmu, dan semoga kamu selalu punya alasan kecil untuk kembali semangat.</p>
        </div>
        <div className="memory-list">
          {wishes.map((wish) => (
            <article className="memory-item" key={wish.number}>
              <span className="memory-number">{wish.number}</span>
              <div><h3>{wish.title}</h3><p>{wish.note}</p></div>
              <span className="memory-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-section" aria-labelledby="gallery-title">
        <div className="gallery-heading">
          <div className="section-kicker"><span>03</span><span className="kicker-line" /><span>OUR LITTLE MOMENTS</span></div>
          <h2 id="gallery-title">Potongan kecil<br /><em>dari cerita kita.</em></h2>
          <p>Beberapa momen yang ingin kusimpan lebih lama.</p>
        </div>
        <div className="photo-grid photo-grid-tidy">
          {galleryPhotos.map((photo, index) => (
            <figure className={`gallery-photo gallery-photo-tidy${photo.shape ? ` gallery-photo-${photo.shape}` : ""}${photo.contain ? " gallery-photo-contain" : ""}`} key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading={index < 4 ? "eager" : "lazy"} />
            </figure>
          ))}
        </div>
      </section>

      <section className="letter-section" id="surat" aria-labelledby="letter-title">
        <div className="letter-decoration" aria-hidden="true">♡</div>
        <div className="section-kicker"><span>04</span><span className="kicker-line" /><span>A LETTER FOR YOU</span></div>
        <div className="letter-card">
          <p className="letter-date">ON YOUR VERY SPECIAL DAY</p>
          <h2 id="letter-title">Untukmu, <em>my love.</em></h2>
          <div className="letter-body">
            <p>Happy birthday, sayangku. Makasih yaa sudah lahir ke dunia ini dan sudah bertahan sejauh ini. Aku bersyukur banget bisa kenal kamu dan punya kamu di hidupku.</p>
            <p>Aku tahu ada hari-hari ketika kamu capek, sedih, atau kecewa, tapi kamu tetap berusaha bangkit dan jalan lagi. Mungkin nggak semua orang tahu seberapa keras kamu sudah berjuang, tapi aku lihat itu. And I’m so proud of you.</p>
            <p>Di umur yang baru ini, semoga kamu selalu sehat, diberi hati yang lapang, dan dimudahkan buat mengejar hal-hal yang kamu impikan. Semoga doa-doa yang belum terjawab nanti datang kembali dalam bentuk yang lebih indah.</p>
            <p>Hidup mungkin nggak selalu berjalan sesuai rencana, jadi jangan bandingkan langkahmu sama orang lain, yaa. Kamu punya waktu dan jalanmu sendiri. Kalau semuanya terasa berat, kamu boleh istirahat, boleh nangis, dan boleh cerita apa aja ke aku. Aku mungkin nggak selalu punya jawaban, but I’ll always try to be here, listen, and support you.</p>
            <p>Jangan lupa berterima kasih juga sama diri sendiri. Kamu sudah berusaha sebaik mungkin, bahkan di hari-hari yang sulit. Kamu hebat, sayang, dan kamu pantas mendapatkan banyak hal baik.</p>
            <p>Semoga tahun ini lebih banyak ketawanya, lebih banyak tenangnya, dan lebih banyak momen yang bikin kamu merasa disayang. I hope life treats you gently, especially on the days when you’re trying your hardest.</p>
            <p>Makasih sudah jadi bagian paling indah dalam hidupku. Aku senang bisa jalan bareng kamu, merayakan hal-hal kecil, dengerin cerita harianmu, dan melihatmu tumbuh. Whatever comes next, I’ll be cheering for you.</p>
            <p>Once again, happy birthday to my favorite person. Jangan lupa bahagia yaa, my love. I love you so much, and I’ll always be grateful that I get to love someone like you.</p>
          </div>
          <p className="letter-signoff">With all my love, <span>Rifqi</span> <HeartMark /></p>
        </div>
      </section>

      <footer className="footer">
        <span>DIBUAT DENGAN HATI</span><HeartMark /><span>KHUSUS UNTUKMU</span>
      </footer>
    </main>
  );
}
