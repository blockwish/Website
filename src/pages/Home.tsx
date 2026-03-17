import { Link } from "react-router-dom";
import MetaTags from "../components/MetaTags";

export default function Home() {
  return (
   <>
        <MetaTags 
          title="Blockwise | Multi-vertical decentralized ecosystem"
          description="Build Smarter. Stake Deeper. Own the Edge. The Smarter Blockchain Network. 120,000 BLW with 1% burns on every transaction."
        />
        <div className="section-wrapper banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 col-lg-6 order-2 order-md-1" data-aos="fade-right" data-aos-duration="1500">
                        <div className="banner-content">
                            <h1>Build Smarter. Stake Deeper. Own the Edge.</h1>
                            <p>The Smarter Blockchain Network. 120,000 BLW. 1% Burns With Every Transaction up to 24,000 BLW.</p>
                            <div className="theme-button">
                                <Link to="/tokenomics" className="btn">Tokenomics</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 order-1 order-md-2" data-aos="fade-left" data-aos-duration="1500">
                        <div className="banner-img">
                            <img src="assets/images/banner-img.svg" alt="Blockwish Network" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section-wrapper feature" id="feature">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12" data-aos="fade-down" data-aos-duration="1500">
                        <div className="section-title">
                            <h2>Our Main Features</h2>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4" data-aos="fade-right" data-aos-duration="1500">
                        <div className="feature-box">
                            <div className="feature-icon">
                                <img src="assets/images/settlement.svg" alt="Transaction"/>
                            </div>
                            <h5>1% Burn — Every Transaction</h5>
                            <p> Not a one-off event. Not a quarterly promise. Every single ecosystem transaction burns 1% of BLW automatically, on-chain, irreversibly. The more BlockWise Network grows, the faster the burn — making your BLW more valuable with every transaction processed.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4" data-aos="fade-down" data-aos-duration="1500">
                        <div className="feature-box">
                            <div className="feature-icon">
                                <img src="assets/images/flexibility.svg" alt="Transaction"/>
                            </div>
                            <h5>120,000 BLW Hard Cap</h5>
                            <p>There will never be more than 120,000 BLW. Not through governance. Not through upgrades. Not through any mechanism. The maximum supply is enforced at the smart contract level and cannot be changed. Combined with the 1% burn, the effective supply only ever goes down.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4" data-aos="fade-left" data-aos-duration="1500">
                        <div className="feature-box">
                            <div className="feature-icon">
                                <img src="assets/images/technology.svg" alt="Transaction"/>
                            </div>
                            <h5>Built on BNB Smart Chain</h5>
                            <p>Ultra-fast 3-second block times and near-zero transaction fees — making BlockWise Network practical for everyday DeFi participation, NFT trading, lending, and staking.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4" data-aos="fade-right" data-aos-duration="1500">
                        <div className="feature-box">
                            <div className="feature-icon">
                                <img src="assets/images/connect-free.svg" alt="Transaction"/>
                            </div>
                            <h5>Locked Liquidity from Launch</h5>
                            <p>24,000 BLW (20% of total supply) seeds permanent PancakeSwap liquidity at launch, locked for a minimum of 6 months. No rug. No drain. Verifiable on-chain from day one.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4" data-aos="fade-up" data-aos-duration="1500">
                        <div className="feature-box">
                            <div className="feature-icon">
                                <img src="assets/images/matching.svg" alt="Transaction"/>
                            </div>
                            <h5>Lender Incentives — Real Rewards for Capital</h5>
                            <p>11% of total supply is dedicated exclusively to rewarding lenders. If you provide capital to BlockWise Network, you earn BLW — consistently and transparently over 36 months.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4" data-aos="fade-left" data-aos-duration="1500">
                        <div className="feature-box">
                            <div className="feature-icon">
                                <img src="assets/images/low-cost.svg" alt="Transaction"/>
                            </div>
                            <h5>Dedicated E-commerce, Game Ecosystem </h5>
                            <p>24,000 BLW (20% of total supply)BLW ring-fenced for NFT, E-commerce and Game project development, creator grants, and marketplace incentives. Not a vague promise — a dedicated, governed treasury.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="section-wrapper work" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-12 col-lg-12" data-aos="fade-down" data-aos-duration="1500">
                        <div className="section-title">
                            <h2>What is BlockWise Network?</h2>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6" data-aos="fade-right" data-aos-duration="1500">
                        <div className="work-img">
                            <img src="assets/images/work-image.svg" alt="Banner Image" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6" data-aos="fade-left" data-aos-duration="1500">
                        <div className="work-content">
                            <h3>BlockWise is more than a token</h3>
                            <p>BlockWise is more than a token — it is the engine of an entire decentralized ecosystem built on the BNB Smart Chain under the BlockEdges Network platform.</p>
                            <p>With a carefully designed fixed supply of 120,000 BLW, every token has a purpose. There is no wasted allocation, no vague marketing fund, and no surprise minting. From lenders who supply capital to creators who build the future, every participant in the BlockWise ecosystem is rewarded.  </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section-wrapper about" id="about2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-12 col-lg-12" data-aos="fade-down" data-aos-duration="1500">
                        <div className="section-title">
                            <h2>BlockWise operates across five core pillars</h2>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4" data-aos="fade-right" data-aos-duration="1500">
                        <div className="about-step">
                            <ul>
                                <li><img src="assets/images/work-arrow.svg" alt="Arrow" />
                                    <p>DeFi & Liquidity — Deep exchange liquidity, locked and secured</p>
                                </li>
                                <li><img src="assets/images/work-arrow.svg" alt="Arrow" />
                                    <p>Staking — Earn passive rewards for holding and locking BLW</p>
                                </li>
                                <li><img src="assets/images/work-arrow.svg" alt="Arrow" />
                                    <p>Creator Economy — Direct incentives for builders, developers, and contributors </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4" data-aos="zoom-in" data-aos-duration="1500">
                        <div className="about-img">
                            <img src="assets/images/about-us.svg" alt="About" />
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4" data-aos="fade-left" data-aos-duration="1500">
                        <div className="about-step">
                            <ul>
                                <li><img src="assets/images/work-arrow.svg" alt="Arrow" />
                                    <p>E-commerce and Game Fi — Launching and scalling E-commerce Platfoem and Gmae Fi Tools </p>
                                </li>
                                <li><img src="assets/images/work-arrow.svg" alt="Arrow" />
                                    <p>Creator Economy — Direct incentives for builders, developers, and contributors </p>
                                </li>
                                <li><img src="assets/images/work-arrow.svg" alt="Arrow" />
                                    <p>NFT Ecosystem — A dedicated fund for NFT project development and creator grants </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section-wrapper roadmap" id="road">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-12 col-lg-12" data-aos="fade-down" data-aos-duration="1500">
                        <div className="section-title">
                            <h2>Road Map</h2>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-12">
                        <div className="timeline">
                            <div className="timeline-border" data-aos="zoom-in" data-aos-duration="1500">
                                <img src="assets/images/roadmap-line.png" alt="" />
                            </div>
                            <ul>
                                <li className="mob head" data-aos="fade-left" data-aos-duration="1500">
                                    <div className="timeline-date">
                                        <h4>2026- 2027</h4>
                                    </div>
                                </li>
                                <li className="mmb" data-aos="fade-right" data-aos-duration="1500">
                                    <div className="timeline-box">
                                        <div className="number">1</div>
                                        <h3>Foundation</h3>
                                        <p>Concept Generation Team Assemble</p>
                                    </div>
                                </li>
                                <li className="desktop" data-aos="fade-left" data-aos-duration="1500">
                                    <div className="timeline-date">
                                        <h4>Q1-Q2 2026</h4>
                                    </div>
                                </li>
                                <li className="head" data-aos="fade-right" data-aos-duration="1500">
                                    <div className="timeline-date">
                                        <h4>Q3 2026</h4>
                                    </div>
                                </li>
                                <li className="mmb" data-aos="fade-left" data-aos-duration="1500">
                                    <div className="timeline-box">
                                        <div className="number">2</div>
                                        <h3>Token Launch</h3>
                                        <p>BLW goes live. The ecosystem activates.</p>
                                    </div>
                                </li>

                                <li className="mob head" data-aos="fade-left" data-aos-duration="1500">
                                    <div className="timeline-date">
                                        <h4>Q4 2026</h4>
                                    </div>
                                </li>
                                <li className="mmb" data-aos="fade-right" data-aos-duration="1500">
                                    <div className="timeline-box">
                                        <div className="number">3</div>
                                        <h3>Ecosystem Growth</h3>
                                        <p>Building the ecosystem verticals. Expanding reach. </p>
                                    </div>
                                </li>
                                <li className="desktop" data-aos="fade-left" data-aos-duration="1500">
                                    <div className="timeline-date">
                                        <h4>Q4 2026</h4>
                                    </div>
                                </li>
                                <li data-aos="fade-right" data-aos-duration="1500">
                                    <div className="timeline-date">
                                        <h4>2027 & Beyond</h4>
                                    </div>
                                </li>
                                <li className="mmb" data-aos="fade-left" data-aos-duration="1500">
                                    <div className="timeline-box">
                                        <div className="number">4</div>
                                        <h3>Expansion & Maturity</h3>
                                        <p>Going cross-chain. Going global. Handing control to the community.</p>
                                    </div>
                                </li>

                                <li className="mob head" data-aos="fade-left" data-aos-duration="1500">
                                    <div className="timeline-date">
                                        <h4>2027 & Beyond</h4>
                                    </div>
                                </li>
                                <li className="mmb" data-aos="fade-right" data-aos-duration="1500">
                                    <div className="timeline-box">
                                        <div className="number">5</div>
                                        <h3>Cross-chain bridge deployment</h3>
                                        <p>Ethereum mainnet, Polygon, Binance Smart Chain</p>
                                    </div>
                                </li>
                                <li className="desktop" data-aos="fade-left" data-aos-duration="1500">
                                    <div className="timeline-date">
                                        <h4>2027 & Beyond</h4>
                                    </div>
                                </li>
                                <li className="head" data-aos="fade-right" data-aos-duration="1500">
                                    <div className="timeline-date">
                                        <h4>2027 & Beyond</h4>
                                    </div>
                                </li>
                                <li className="mmb" data-aos="fade-left" data-aos-duration="1500">
                                    <div className="timeline-box">
                                        <div className="number">6</div>
                                        <h3>E-commerce platform integration</h3>
                                        <p>Game development ecosystem</p>
                                    </div>
                                </li>

                                <li className="mob head" data-aos="fade-left" data-aos-duration="1500">
                                    <div className="timeline-date">
                                        <h4>2027 & Beyond</h4>
                                    </div>
                                </li>
                                <li className="mmb" data-aos="fade-right" data-aos-duration="1500">
                                    <div className="timeline-box">
                                        <div className="number">7</div>
                                        <h3>CEX Tier 2/3 exchange listings</h3>
                                        <p>NFT launchpad beta launch</p>
                                    </div>
                                </li>
                                <li className="desktop" data-aos="fade-left" data-aos-duration="1500">
                                    <div className="timeline-date">
                                        <h4>2027 & Beyond</h4>
                                    </div>
                                </li>
                                <li data-aos="fade-right" data-aos-duration="1500">
                                    <div className="timeline-date">
                                        <h4>2027 & Beyond</h4>
                                    </div>
                                </li>
                                <li className="mmb" data-aos="fade-left" data-aos-duration="1500">
                                    <div className="timeline-box">
                                        <div className="number">8</div>
                                        <h3>Regional expansion</h3>
                                        <p>Expanding into new markets and regions</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="main-wrapper salespage" id="token">
            <div className="section-wrapper sales">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-12 col-lg-12" data-aos="fade-down" data-aos-duration="1500">
                            <div className="section-title">
                                <h2>Token Structure</h2>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6" data-aos="fade-right" data-aos-duration="1500">
                            <div className="token">
                                <div className="token-step">
                                    <div className="token-card">
                                        <div className="content">
                                            <h5>TOKEN NAME</h5>
                                            <h6>BlockWise Network</h6>
                                        </div>
                                    </div>
                                    <div className="token-card">
                                        <div className="content">
                                            <h5>TIKER NAME</h5>
                                            <h6>BLW</h6>
                                        </div>
                                    </div>
                                    <div className="token-card">
                                        <div className="content">
                                            <h5>TOTAL TOKEN </h5>
                                            <h6>120000</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6" data-aos="fade-left" data-aos-duration="1500">
                            <div className="token">
                                <div className="token-step">
                                    <div className="token-card">
                                        <div className="content">
                                            <h5>TOKEN ADDRESS</h5>
                                            <h6>0x55d398326f99059ff775485246999027b3197955</h6>
                                        </div>
                                    </div>
                                    <div className="token-card">
                                        <div className="content">
                                            <h5>TOKEN CONTRACT LINK</h5>
                                            <h6><a href="https://etherscan.io/token/https://bscscan.com/token/0x55d398326f99059ff775485246999027b3197955" target="_blank" rel="noopener noreferrer">View on BNB Scan</a></h6>
                                        </div>
                                    </div>
                                    <div className="token-card">
                                        <div className="content">
                                            <h5>SWAP</h5>
                                            <h6>Comming Soon...</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </>
  )
}