import React from 'react';
import { connect } from 'react-redux';

import ModalPayBTCStep1 from './Modals/modalPayBTCStep1';
import ModalPayBTCStep2 from './Modals/modalPayBTCStep2';
import ModalPayMoneroStep2 from './Modals/modalPayMoneroStep2';

function mapStateToProps(state, ownProps){
    return {
    };
}

function mapDispatchToProps(dispatch){
    return {};
}

class App extends React.Component {

    render() {
        return (
            <div>
                <ModalPayBTCStep1 />
                <ModalPayBTCStep2 />
                <ModalPayMoneroStep2 />
                <div className="wrapper wrapper-with-footer">
            		<header className="header">
            			<button className="menuBtn js-menuTrigger">
            				<span></span>
            				<span></span>
            				<span></span>
            			</button>
            			<a href="" className="logo">
            				<img src="images/logo@2x.png" alt=""/>
            			</a>
            			<div className="header__profile">
            				<div>
            					<a href="" className="header__profileName ">valik_prusskiy@gmail.com</a>
            					<a href="" className="header__login none" data-toggle="modal" data-target="#modalLogin">
            						<span className="">LOGIN</span>
            						<span className="header__loginIcon icon-door"></span>
            					</a>
            				</div>

            				<div>
            					<a href="" className="header__sign">Sign Up</a>
            				</div>
            			</div>
            			<div className="header__menu">
            				<ul className="header__menuList">
            					<li className="header__menuLi barParent active">
            						<div className="bar"></div>
            						<a href="" className="header__menuItem">Dashboard</a>
            					</li>
            					<li className="header__menuLi barParent">
            						<div className="bar"></div>
            						<a href="" className="header__menuItem">2FA</a>
            					</li>
            					<li className="header__menuLi barParent">
            						<div className="bar"></div>
            						<a href="" className="header__menuItem">Account Settings</a>
            					</li>
            				</ul>
            			</div>
            		</header>
            		<div className="menuS ">
            			<a href="" className="menuS__logo">
            				<img src="images/logo@2x.png" alt=""/>
            			</a>
            			<a href="" className="menuS__close icon-cross"></a>
            			<div className="menuS__wrap">
            				<ul className="menuS__list">
            					<li className="menuS__li barVerParent active">
            						<div className="barVer"></div>
            						<a href="" className="menuS__item">Dashboard</a>
            					</li>
            					<li className="menuS__li barVerParent">
            						<div className="barVer"></div>
            						<a href="" className="menuS__item">2FA</a>
            					</li>
            					<li className="menuS__li barVerParent">
            						<div className="barVer"></div>
            						<a href="" className="menuS__item">Account Settings</a>
            					</li>
            				</ul>
            			</div>
            		</div>
            		<div className="menuS__backdrops"></div>
            		<section className="content">
            			<div className="box">
            				<h1 className="h1">Dashboard</h1>
            				<div className="sidebar">
            					<div className="title">Exchange Rates</div>
            					<div className="sidebar__tumbler">
            						<div className="sidebar__select dd">
            							<a href="" className="ddTrigger ddArrow" data-toggle="dropdown">
            								<span className="ddTrigger__text">EUR</span>
            							</a>
            							<div className="ddMenu">
            								<ul className="ddMenu__list">
            									<li className="ddMenu__li">
            										<a href="" className="ddMenu__item js-sel_dropDown">EUR</a>
            									</li>
            									<li className="ddMenu__li">
            										<a href="" className="ddMenu__item js-sel_dropDown">USD</a>
            									</li>
            									<li className="ddMenu__li">
            										<a href="" className="ddMenu__item js-sel_dropDown active">CNY</a>
            									</li>
            									<li className="ddMenu__li">
            										<a href="" className="ddMenu__item js-sel_dropDown">GBP</a>
            									</li>
            									<li className="ddMenu__li">
            										<a href="" className="ddMenu__item js-sel_dropDown">AUD</a>
            									</li>
            									<li className="ddMenu__li">
            										<a href="" className="ddMenu__item js-sel_dropDown">CAD</a>
            									</li>
            									<li className="ddMenu__li">
            										<a href="" className="ddMenu__item js-sel_dropDown">SGD</a>
            									</li>
            									<li className="ddMenu__li">
            										<a href="" className="ddMenu__item js-sel_dropDown">INR</a>
            									</li>
            									<li className="ddMenu__li">
            										<a href="" className="ddMenu__item js-sel_dropDown">RUB</a>
            									</li>
            									<li className="ddMenu__li">
            										<a href="" className="ddMenu__item js-sel_dropDown">JPY</a>
            									</li>
            								</ul>
            							</div>
            						</div>
            						<div className="sidebar__num">234.457</div>
            					</div>
            					<div className="sidebar__body">
            						<div className="sidebar__row">
            							<div className="sidebar__cur">
            								<span className="cur__icon">
            									<img src="images/btc_sm.png" alt=""/>
            								</span>
            								<span className="cur__name">btc</span>
            							</div>
            							<div className="sidebar__num">1.00000</div>
            						</div>
            						<div className="sidebar__row">
            							<div className="sidebar__cur">
            								<span className="cur__icon">
            									<img src="images/etc_sm.png" alt="" />
            								</span>
            								<span className="cur__name">etc</span>
            							</div>
            							<div className="sidebar__num">803.0516</div>
            						</div>
            						<div className="sidebar__row">
            							<div className="sidebar__cur">
            								<span className="cur__icon">
            									<img src="images/eth_sm.png" alt=""/>
            								</span>
            								<span className="cur__name">eth</span>
            							</div>
            							<div className="sidebar__num">78.97709</div>
            						</div>
            						<div className="sidebar__row">
            							<div className="sidebar__cur">
            								<span className="cur__icon">
            									<img src="images/xmr_sm.png" alt="" />
            								</span>
            								<span className="cur__name">xmr</span>
            							</div>
            							<div className="sidebar__num">1.00000</div>
            						</div>
            						<div className="sidebar__row">
            							<div className="sidebar__cur">
            								<span className="cur__icon">
            									<img src="images/dash_sm.png" alt="" />
            								</span>
            								<span className="cur__name">dash</span>
            							</div>
            							<div className="sidebar__num">1.00000</div>
            						</div>
            						<div className="sidebar__row">
            							<div className="sidebar__cur">
            								<span className="cur__icon">
            									<img src="images/rep_sm.png" alt="" />
            								</span>
            								<span className="cur__name">rep</span>
            							</div>
            							<div className="sidebar__num">146 842.87812</div>
            						</div>
            					</div>
            				</div>
            				<div className="main">
            					<div className="card__list">
            						<div className="card">
            							<div className="cardIn">
            								<div className="card__pic bg1">
            									<img src="images/arrows@2x.png" alt="" height="26"/>
            								</div>
            								<div className="card__info">
            									<div className="card__infoData">
            										<div className="colspan">
            											<b className="mark1">1</b>
            											<span>ETH</span>
            										</div>
            										<span className="equal">=</span>
            										<div className="colspan">
            											<b className="mark1">100</b>
            											<span>Token</span>
            										</div>
            									</div>
            									<div className="card__infoLabel">Crowdsale Price</div>
            								</div>
            							</div>
            						</div>
            						<div className="card">
            							<div className="cardIn">
            								<div className="card__pic bg2">
            									<img src="images/clock@2x.png" alt="" height="32"/>
            								</div>
            								<div className="card__info">
            									<div className="card__infoData">
            										<div className="colspan">
            											<b className="mark2">23</b>
            											<span className="pr-10">Days</span>
            										</div>
            										<div className="colspan">
            											<b className="mark3">7</b>
            											<span>Hours</span>
            										</div>
            									</div>
            									<div className="card__infoLabel">Time Left</div>
            								</div>
            							</div>
            						</div>
            						<div className="card">
            							<div className="cardIn">
            								<div className="card__pic">
            									<img src="images/logo@2x.png" alt="" height="62"/>
            								</div>
            								<div className="card__info">
            									<div className="card__infoData">
            										<b className="mark4">0.0000081</b>
            									</div>
            									<div className="card__infoLabel">BITS Balance</div>
            								</div>
            							</div>
            						</div>
            					</div>
            					<div className="cur__box">
            						<div className="cur__boxTitle">Pay with:</div>
            						<div className="cur__listWrap">
            							<div className="cur__list">
            								<a href="" className="cur__item" data-toggle="modal" data-target="#modalPayBTCStep1">
            									<span className="cur__icon">
            										<img src="images/btc.png" alt=""/>
            									</span>
            									<span className="cur__name">btc</span>
            								</a>
            								<a href="" className="cur__item">
            									<span className="cur__icon">
            										<img src="images/etc.png" alt=""/>
            									</span>
            									<span className="cur__name">etc</span>
            								</a>
            								<a href="" className="cur__item">
            									<span className="cur__icon">
            										<img src="images/eth.png" alt=""/>
            									</span>
            									<span className="cur__name">eth</span>
            								</a>
            								<a href="" className="cur__item" data-toggle="modal" data-target="#modalPayMoneroStep2">
            									<span className="cur__icon">
            										<img src="images/xmr.png" alt=""/>
            									</span>
            									<span className="cur__name">xmr</span>
            								</a>
            								<a href="" className="cur__item">
            									<span className="cur__icon">
            										<img src="images/dash.png" alt=""/>
            									</span>
            									<span className="cur__name">dash</span>
            								</a>
            								<a href="" className="cur__item">
            									<span className="cur__icon">
            										<img src="images/rep.png" alt=""/>
            									</span>
            									<span className="cur__name">rep</span>
            								</a>
            							</div>
            						</div>
            					</div>
            					<div className="history">
            						<div className="title">Transactions History</div>
            						<div className="history__table">
            							<div className="history__tableHead">
            								<div className="tr">
            									<div className="td td-date">
            										<a href="" className="sort">
            											Date <span className="sortIcon icon-arrow_dropdown"></span>
            										</a>
            									</div>
            									<div className="td td-amount">
            										<a href="" className="sort">
            											Amount <span className="sortIcon icon-arrow_dropdown"></span>
            										</a>
            									</div>
            									<div className="td td-rate">
            										<a href="" className="sort">
            											Exchange Rate <span className="sortIcon icon-arrow_dropdown"></span>
            										</a>
            									</div>
            									<div className="td td-address">
            										<a href="" className="sort">
            											Address <span className="sortIcon icon-arrow_dropdown"></span>
            										</a>
            									</div>
            								</div>
            							</div>
            							<div className="history__tableBody">
            								<div className="tr">
            									<div className="td td-date">
            										<div className="tdIn">Feb 16, 16:39:02</div>
            									</div>
            									<div className="td td-amount">
            										<div className="tdIn">
            											<b>10</b> USD
            										</div>
            									</div>
            									<div className="td td-rate">
            										<div className="tdIn">1 USD = 1 BITS</div>
            									</div>
            									<div className="td td-address">
            										<div className="tdIn">1HEc7sdhhshZ9LwuPaEeHTgs1HEc7sdhhshZ9LwuPaEeHTgs</div>
            									</div>
            								</div>
            								<div className="tr">
            									<div className="td td-date">
            										<div className="tdIn">Feb 16, 15:32:02</div>
            									</div>
            									<div className="td td-amount">
            										<div className="tdIn"><b>0.5</b> BITS</div>
            									</div>
            									<div className="td td-rate">
            										<div className="tdIn">1 BTC = 500 Tokens</div>
            									</div>
            									<div className="td td-address">
            										<div className="tdIn">agjsgo1jakskfhLsdgljasjgklasdagjsgo1jakskfhLsdgljasjgklasd</div>
            									</div>
            								</div>
            								<div className="tr">
            									<div className="td td-date">
            										<div className="tdIn">Feb 02, 08:24:38</div>
            									</div>
            									<div className="td td-amount">
            										<div className="tdIn"><b>35</b> ETH</div>
            									</div>
            									<div className="td td-rate">
            										<div className="tdIn">1 ETH = 12 Tokens</div>
            									</div>
            									<div className="td td-address">
            										<div className="tdIn">1HEc7sdhhshZ9LwuPaEeHTgs1HEc7sdhhshZ9LwuPaEeHTgs</div>
            									</div>
            								</div>
            								<div className="tr">
            									<div className="td td-date">
            										<div className="tdIn">Jan 31, 12:58:01</div>
            									</div>
            									<div className="td td-amount">
            										<div className="tdIn"><b>0.5</b> BTC</div>
            									</div>
            									<div className="td td-rate">
            										<div className="tdIn">1 USD = 1 BITS</div>
            									</div>
            									<div className="td td-address">
            										<div className="tdIn">1HEc7sdhhshZ9LwuPaEeHTgs1HEc7sdhhshZ9LwuPaEeHTgs</div>
            									</div>
            								</div>
            								<div className="tr inactive">
            									<div className="td td-date">
            										<div className="tdIn">Jan 31, 12:58:01</div>
            									</div>
            									<div className="td td-amount">
            										<div className="tdIn"><b>35</b> ETH</div>
            									</div>
            									<div className="td td-rate">
            										<div className="tdIn">1 ETH = 12 Tokens</div>
            									</div>
            									<div className="td td-address">
            										<div className="tdIn">1HEc7sdhhshZ9LwuPaEeHTgs1HEc7sdhhshZ9LwuPaEeHTgs</div>
            									</div>
            								</div>
            								<div className="tr inactive">
            									<div className="td td-date">
            										<div className="tdIn">Jan 31, 12:58:01</div>
            									</div>
            									<div className="td td-amount">
            										<div className="tdIn"><b>0.5</b> BTC</div>
            									</div>
            									<div className="td td-rate">
            										<div className="tdIn">1 USD = 1 BITS</div>
            									</div>
            									<div className="td td-address">
            										<div className="tdIn">1HEc7sdhhshZ9LwuPaEeHTgs1HEc7sdhhshZ9LwuPaEeHTgs</div>
            									</div>
            								</div>
            							</div>
            							<div className="history__tableBtns">
            								<button className="btn btn-more js-btnMore">
            									<span className="btnText">More</span>
            									<span className="btnIcon icon-arrow"></span>
            								</button>
            							</div>
            						</div>
            					</div>
            				</div>
            			</div>
            		</section>
            	</div>
                <footer className="footer">
            		<div className="box">
            			<div className="copyright">
            				© 2017 My Bit.   All rights reserved.
            			</div>
            			<div className="">
            				<a href="" className="footer__contact">Contact Us</a>
            			</div>
            		</div>
            	</footer>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
