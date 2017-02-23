import React from 'react';
import { connect } from 'react-redux';

import ModalsActions from 'actions/ModalsActions';

function mapStateToProps(state){
    return {};
}

function mapDispatchToProps(dispatch){
    return {
        openModal: (modal) => dispatch(ModalsActions.openModal(modal))
    };
}


class Box extends React.Component {

    onOpenModal(modal) {
        this.props.openModal(modal);
    }

    render() {
        return (
            <div className="cur__box">
                <div className="cur__boxTitle">Pay with:</div>
                <div className="cur__listWrap">
                    <div className="cur__list">
                        <a href="javascript:;" className="cur__item" onClick={this.onOpenModal.bind(this, 'modalPayBTCStep1')} data-toggle="modal" data-target="#modalPayBTCStep1">
                            <span className="cur__icon">
                                <img src="images/btc.png" alt=""/>
                            </span>
                            <span className="cur__name">btc</span>
                        </a>
                        <a href="javascript:;" className="cur__item">
                            <span className="cur__icon">
                                <img src="images/etc.png" alt=""/>
                            </span>
                            <span className="cur__name">etc</span>
                        </a>
                        <a href="javascript:;" className="cur__item">
                            <span className="cur__icon">
                                <img src="images/eth.png" alt=""/>
                            </span>
                            <span className="cur__name">eth</span>
                        </a>
                        <a href="javascript:;" className="cur__item" onClick={this.onOpenModal.bind(this, 'modalPayMoneroStep2')} data-toggle="modal" data-target="#modalPayMoneroStep2">
                            <span className="cur__icon">
                                <img src="images/xmr.png" alt=""/>
                            </span>
                            <span className="cur__name">xmr</span>
                        </a>
                        <a href="javascript:;" className="cur__item">
                            <span className="cur__icon">
                                <img src="images/dash.png" alt=""/>
                            </span>
                            <span className="cur__name">dash</span>
                        </a>
                        <a href="javascript:;" className="cur__item">
                            <span className="cur__icon">
                                <img src="images/rep.png" alt=""/>
                            </span>
                            <span className="cur__name">rep</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Box);
