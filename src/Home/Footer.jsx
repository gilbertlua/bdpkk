import React from 'react';
import { Row, Col, Button } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          {/* Kolom 1: Profil Bidang */}
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Bidang PKK PP GMKI</h2>
              <div>
                <a href="#">Profil Bidang</a>
              </div>
              <div>
                <a href="#">Visi & Misi Kaderisasi</a>
              </div>
              <div>
                <a href="#">Struktur Pengurus Pusat</a>
              </div>
              <div>
                <a href="#">Renstra 2024-2026</a>
              </div>
            </div>
          </Col>

          {/* Kolom 2: Sumber Daya (Resources) */}
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Dokumen & Materi</h2>
              <div>
                <a target="_blank" rel="noopener" href="#">Silabus Kurikulum</a>
                <span> - </span>
                <span>MAPER & KKSP</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">Modul Teologi</a>
                <span> - </span>
                <span>Oikumenisme</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">E-Library GMKI</a>
                <span> - </span>
                <span>Buku Digital</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">Panduan Beasiswa</a>
                <span> - </span>
                <span>Informasi Studi</span>
              </div>
            </div>
          </Col>

          {/* Kolom 3: Komunitas & Informasi */}
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Informasi</h2>
              <div>
                <a href="#">Agenda Nasional</a>
              </div>
              <div>
                <a href="#">FAQ Kaderisasi</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">Pendaftaran KKSN</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">Laporan Evaluasi</a>
              </div>
            </div>
          </Col>

          {/* Kolom 4: Afiliasi Utama */}
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Tautan Terkait</h2>
              <div>
                <a target="_blank" rel="noopener" href="https://gmki.or.id">Website Utama GMKI</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">Portal Anggota</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">Sistem Informasi Kader</a>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <Row className="bottom-bar">
        <Col lg={6} sm={24}>
          <div className="translate-button">
            <Button ghost size="small">
              Ut Omnes Unum Sint
            </Button>
          </div>
        </Col>
        <Col lg={18} sm={24}>
          <span
            style={{
              lineHeight: '16px',
              paddingRight: 12,
              marginRight: 11,
              borderRight: '1px solid rgba(255, 255, 255, 0.55)',
            }}
          >
            <a href="#" rel="noopener noreferrer">
              Konstitusi GMKI
            </a>
          </span>
          <span style={{ marginRight: 24 }}>
            <a href="#" rel="noopener noreferrer">
              Pedoman Kaderisasi
            </a>
          </span>
          <span style={{ marginRight: 12 }}>Sekretariat: Salemba Raya No. 10 Jakarta</span>
          <span style={{ marginRight: 12 }}>Copyright © PP GMKI 2024-2026</span>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;