import React from 'react';
import PropTypes from 'prop-types';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Parallax from 'rc-scroll-anim/lib/ScrollParallax';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Button } from 'antd';
import BannerSVGAnim from './component/BannerSVGAnim';

const { TweenOneGroup } = TweenOne;
const featuresCN = [
  {
    title: 'Beasiswa Kampus',
    content: 'Program kemitraan strategis untuk kader yang menempuh studi di Universitas Maranatha, UKSW, dan Universitas Presiden.',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/VriUmzNjDnjoFoFFZvuh.svg', 
    color: '#001f3f', // gmkiBlue
    shadowColor: 'rgba(0,31,63,.12)',
  },
  {
    title: 'Program Beasiswa Keluarga Sabam Sirait & Sondang Sirait',
    content: 'Bantuan biaya pendidikan untuk mencetak intelektual muda yang memiliki komitmen tinggi pada pengabdian masyarakat.',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/smwQOoxCjXVbNAKMqvWk.svg', 
    color: '#800000', // gmkiRed
    shadowColor: 'rgba(128,0,0,.12)',
  },
  {
    title: 'Beasiswa Natal Nasional',
    content: 'Penghargaan dan tunjangan pendidikan bagi kader berprestasi yang diserahkan pada peringatan Natal Nasional.',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/hBbIHzUsSbSxrhoRFYzi.svg', 
    color: '#FFD700', // gmkiYellow
    shadowColor: 'rgba(255,215,0,.12)',
  }
];
const pointPos = [
  { x: -30, y: -10 },
  { x: 20, y: -20 },
  { x: -65, y: 15 },
  { x: -45, y: 80 },
  { x: 35, y: 5 },
  { x: 50, y: 50, opacity: 0.2 },
];


const scholarshipData = [
  {
    id: 1,
    title: "Beasiswa Prestasi Akademik",
    desc: "Bantuan biaya pendidikan untuk kader dengan IPK di atas 3.50.",
    image: "/assets/slide1.jpg"
  },
  {
    id: 2,
    title: "Beasiswa Aktivis GMKI",
    desc: "Apresiasi untuk pengurus yang aktif berdampak di masyarakat.",
    image: "/assets/slide2.jpg"
  },
  {
    id: 3,
    title: "Beasiswa Tugas Akhir",
    desc: "Bantuan dana riset untuk mahasiswa tingkat akhir.",
    image: "/assets/slide3.jpg"
  }
];



class Page2 extends React.PureComponent {

  
  static propTypes = {
    isMobile: PropTypes.bool.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      hoverNum: null,
    };
  }
  onMouseOver = (i) => {
    this.setState({
      hoverNum: i,
    });
  }
  onMouseOut = () => {
    this.setState({
      hoverNum: null,
    });
  }
  getEnter = (e) => {
    const i = e.index;
    const r = (Math.random() * 2) - 1;
    const y = (Math.random() * 10) + 5;
    const delay = Math.round(Math.random() * (i * 50));
    return [
      {
        delay, opacity: 0.4, ...pointPos[e.index], ease: 'easeOutBack', duration: 300,
      },
      {
        y: r > 0 ? `+=${y}` : `-=${y}`,
        duration: (Math.random() * 1000) + 2000,
        yoyo: true,
        repeat: -1,
      }];
  }
  render() {
    const { hoverNum } = this.state;
    let children = [[], [], []];
    featuresCN.forEach((item, i) => {
      const isHover = hoverNum === i;
      const pointChild = [
        'point-0 left', 'point-0 right',
        'point-ring', 'point-1', 'point-2', 'point-3',
      ].map(className => (
        <TweenOne
          component="i"
          className={className}
          key={className}
          style={{
            background: item.color,
            borderColor: item.color,
          }}
        />
      ));
      const child = (
        <li key={i.toString()} >
          <div
            className="page1-box"
            onMouseEnter={() => { this.onMouseOver(i); }}
            onMouseLeave={this.onMouseOut}
          >
            <TweenOneGroup
              className="page1-point-wrapper"
              enter={this.getEnter}
              leave={{
                x: 0, y: 30, opacity: 0, duration: 300, ease: 'easeInBack',
              }}
              resetStyleBool={false}
            >
              {(this.props.isMobile || isHover) && pointChild}
            </TweenOneGroup>
            <div
              className="page1-image"
              style={{
                boxShadow: `${isHover ? '0 12px 24px' :
                  '0 6px 12px'} ${item.shadowColor}`,
              }}
            >
              <img src={item.src} alt="img" style={i === 4 ? { marginLeft: -15 } : {}} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        </li>
      );
      children[Math.floor(i / 3)].push(child);
    });

    children = children.map((item, i) => (
      <QueueAnim
        className="page1-box-wrapper"
        key={i.toString()}
        type="bottom"
        leaveReverse
        delay={[i * 100, (children.length - 1 - i) * 100]}
        component="ul"
      >
        {item}
      </QueueAnim>
    ));
    return (
      <div className="home-page page1" id='beasiswa'>
        <div className="home-page-wrapper" id="page1-wrapper">
          <h2>Program<span> Beasiswa</span> Aktif</h2>
          <div className="title-line-wrapper page1-line">
            <div className="title-line" />
          </div>

          <OverPack>
                      <div>
            <div className="banner-wrapper" id=''>
                  <QueueAnim className="banner-title-wrapper" type='right'>
                    <div key="line" className="title-line-wrapper">
                      <div
                        className="title-line"
                        style={{ transform: 'translateX(-64px)' }}
                      />
                    </div>
                    <h1 key="h1">Program Beasiswa GMKI</h1>
                    <p key="content">
                      <span><b>"Wujudkan Mimpi Pendidikanmu Bersama GMKI"</b></span><br />
                      Kami percaya kendala biaya bukan penghalang untuk berprestasi. Daftarkan dirimu dalam program bantuan pendidikan khusus anggota GMKI dan jadilah bagian dari transformasi intelektual Kristen yang berdampak nyata.
                    </p>
                    <div key="button" className="button-wrapper">
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Button type="primary">
                          Cari Beasiswa
                        </Button>
                      </a>                      
                    </div>
                  </QueueAnim>
                  <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
                      <img 
                        width={500} 
                        src="./public/assets/image-scholarship.jpg" 
                        alt="Scholarship" 
                        className="floating-image"
                      />
                  </TweenOne>
                </div>
          </div>

          </OverPack>
          <OverPack>
            <div>
              {children}        
            </div>            
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Page2;
