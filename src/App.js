import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="kolomflex">
      <nav class="flex-nav">
        <div>
          <a href="#tentangkami">Tentang Kami</a>
        </div>
        <div>
          <a href="#filosofibunga">Filosofi Bunga</a>
        </div>
        <div>
          <a href="#filosofiwarna">Filosofi Warna</a>
        </div>
        <div>
          <a href="#photoboard">Photo Board</a>
        </div>
      </nav>

      <div class="jumbotron hd">
        <div class="hdbox">
          <h1>Gloretta Florist</h1>
          <div class="hdp">
            <p> THE ART OF NATURE </p>
          </div>
        </div>
      </div>

      <div class="main">
        <div id="content">
          <article id="tentangkami" class="box paragraf">
            <h2 id="tentangkami">Tentang Kami</h2>
            <a href="tentan-kami.html">
              <img
                src="styles/headers/tentang_kami.jpg"
                class="featured-image"
                alt="Tentang Kami"
              />
            </a>
            <p>
              Klik pada gambar untuk mengetahui lebih banyak tentang Gloretta
              Florist!
            </p>
          </article>

          <article id="filosofibunga" class="box paragraf">
            <h2 id="filosofibunga">Filosofi Bunga</h2>
            <a href="filosofi-bunga.html">
              <img
                src="styles/headers/filosofi_bunga.jpg"
                class="featured-image"
                alt="Filosofi Bunga"
              />
            </a>
            <p>
              Bunga yang anda beri ternyata memiliki makna tersendiri, klik pada
              gambar untuk mengetahui!
            </p>
          </article>

          <article id="filosofiwarna" class="box paragraf">
            <h2 id="filosofiwarna">Filosofi Warna</h2>
            <a href="filosofi-warna.html">
              <img
                src="styles/headers/filosofi_warna.jpg"
                class="featured-image"
                alt="Filosofi Warna"
              />
            </a>
            <p>
              Sama dengan bunga, warna pun memiliki makna. Silahkan klik gambar
              untuk mencari warna bunga atau <i>bouquet wrap</i> mu sesuai
              artinya!
            </p>
          </article>

          <article id="photoboard" class="box paragraf">
            <h2 id="photoboard">Photo Board</h2>
            <a href="photoboard.html">
              <img
                src="styles/headers/photoboard.jpg"
                class="featured-image"
                alt="Photo Board"
              />
            </a>
            <p>
              Manjakan mata anda dengan seni fotografi di Photo Board kami. Ayo
              klik pada gambar!
            </p>
          </article>
        </div>

        <aside class="profile box">
          <article>
            <header>
              <h2>Tentang Saya</h2>
              <figure>
                <img src="picts/me.png" />
                <figcaption>Profile</figcaption>
              </figure>
            </header>
            <section>
              <table>
                <tr>
                  <th>Nama</th>
                  <td>Putri Shefia Andini</td>
                </tr>
                <tr>
                  <th>Tempat, Tanggal Lahir</th>
                  <td>27 November 1999</td>
                </tr>
                <tr>
                  <th>Almamater</th>
                  <td>Politeknik Negeri Sriwijaya</td>
                </tr>
                <tr>
                  <th>Jurusan</th>
                  <td>Teknik Komputer</td>
                </tr>
                <tr>
                  <th>e-mail</th>
                  <td>ptrsptrs10@gmail.com</td>
                </tr>
              </table>
            </section>
          </article>
        </aside>
      </div>

      <footer class="flex-container-column">
        <div class="display">
          <p style={{ fontSize: "20px" }}>CONTACT & FIND US</p>
        </div>
        <div class="flex-container-row txt1">
          <div class="menu">
            <a href="https://blank.org/">
              <img src="styles/icons/phone.png" class="footer-image" />
              <p>Phone</p>
            </a>
          </div>
          <div class="menu">
            <a href="https://www.icloud.com/">
              <img src="styles/icons/mail.png" class="footer-image" />
              <p>E-mail</p>
            </a>
          </div>
          <div class="menu">
            <a href="https://www.instagram.com/">
              <img src="styles/icons/insta.png" class="footer-image" />
              <p>Instagram</p>
            </a>
          </div>
          <div class="menu">
            <a href="https://www.facebook.com/">
              <img src="styles/icons/fb.png" class="footer-image" />
              <p>Facebook</p>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
