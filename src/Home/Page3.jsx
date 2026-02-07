import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Row, Col, Card, Tag, Button } from 'antd';

function Page3() {
  const announcements = [
    {
      date: '25 OKT',
      tag: 'NASIONAL',
      title: 'Konsultasi Teologi Nasional',
      location: 'Jakarta / Hybrid',
    },
    {
      date: '10 NOV',
      tag: 'KADERISASI',
      title: 'Pelatihan Instruktur Kader',
      location: 'Zona Sumatera',
    },
    {
      date: '05 DES',
      tag: 'STUDI',
      title: 'Webinar Oikumenisme Kontemporer',
      location: 'Zoom Meeting',
    },
  ];

  return (
    <div className="home-page page3">
      <div className="home-page-wrapper">
        <div className="title-line-wrapper page2-line">
          <div className="title-line" />
        </div>
        
        <h2>Agenda <span>Mendatang</span></h2>
        
        
      </div>
    </div>
  );
}

export default Page3;