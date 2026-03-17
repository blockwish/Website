import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SchemaMarkup from './components/SchemaMarkup';

const Header = () => (
    <>
    <header className="header">
        <nav className="navbar sticky-top navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to="/"><img src="assets/images/blw_logo.png" alt="Logo" style={{maxWidth: "40%"}} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tokenomics">Tokenomics</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='https://blockwisenetwork.gitbook.io/whitepaper/' target='_blank' rel='noopener noreferrer'>Whitepaper</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='/#about' >About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='/#road' >Road Map</a>
                        </li>
                        
                    </ul>
                </div>
                <div className="cta_btn theme-button">
                    <a className="btn disabled" target='_blank' rel='noopener noreferrer' href='https://pancakeswap.finance/swap' >Buy Token</a>
                </div>
            </div>
        </nav>
    </header>
    </>
);

const Footer = () => (
  <footer>
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-12 col-md-6 col-lg-5">
                    <div className="footer-logo">
                        <Link to="/"><img src="assets/images/blw_logo.png" alt="Logo" /></Link>
                        <p>BlockWise (BLW) is the BEP20 utility token powering a complete decentralized ecosystem — 
                            from staking rewards and NFT projects to lender incentives and creator economies. Built on BNB Smart Chain. Designed for everyone.</p>
                        <ul>
                            <li><a href="mailto:info@blockwise.network"><img src="assets/images/mail.svg" alt="icon" />info@blockwise.network</a></li>
                        </ul>
                    </div>
                    <div className="footer-gallery footer-title">
                        <div className="social-media">
                            <h6>Follow us</h6>
                            <ul>
                                <li><a href="#" rel='noopener noreferrer'><img src="assets/images/facebook.svg" alt="Facebook" /></a></li>
                                <li><a href="#" rel='noopener noreferrer'><img src="assets/images/linkedin.svg" alt="LinkedIn" /></a></li>
                                <li><a href="#" rel='noopener noreferrer'><img src="assets/images/x.svg" alt="X" /></a></li>
                                <li><a href="#" rel='noopener noreferrer'><img src="assets/images/instagram.svg" alt="Instagram" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="footer-menu footer-title">
                        <h6>Vesting Contract</h6>
                        <ul>
                            <li><a href="/" target='_blank' rel='noopener noreferrer'>Airdorp Contract</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="footer-comunity footer-title">
                        <h6>Useful Links</h6>
                        <ul>
                            <li><a href="/#road">Road Map</a></li>
                            <li><a href="/#token">Token</a></li>
                            <li><a href="/#about">About Us</a></li>
                            <li><a href="https://blockwisenetwork.gitbook.io/whitepaper/" target="_blank" rel='noopener noreferrer'>White Paper</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
        <hr />
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-12">
                    <div className="copyright">
                        <p>© {new Date().getFullYear()}, All rights reserved. Develop For Blockwise Network</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Small delay to ensure DOM is fully ready
    const timer = setTimeout(() => {
      if (window.AOS) {
        window.AOS.init({
          duration: 1000,
          once: false,
        });
        window.AOS.refresh();
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [children]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%' }}>
      <SchemaMarkup />
      <Header />
      <div className="main-wrapper" style={{ flex: 1, width: '100%', overflow: 'auto' }}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
