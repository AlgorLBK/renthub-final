export const Inbox = () => {
    return (
        <> 
        <div className="sw_mb-4">
            <a href="" className="st-black sw_br-2 brb-coral font_xd-1 st_weight-bold">All Messages (150)</a>
            <a href="" className="st-black sw_br-2 brb-coral sw_mlr-4 font_xd-1">Read (50)</a>
            <a href="" className="st-black sw_br-2 brb-coral font_xd-1">Unread (100)</a>
        </div>
        <div className="sw_grid-row">
            <div className="sw_grid sw_grid-30">
                <div className="sw_panel sw_rsq-2">
                    <div className="sw_panel-wrapper sw_pt-4 sw_pb-1">
                        <div className="sw_grid-row">
                            <div className="sw_grid-auto sw_mr-3">
                                <button className="sw_btn sw_btn-styled sw_rsq-1 bg-white sw_pos-relative">
                                    <span className="sw_pos-absolute sw_pos-top sw_left-100 sw_translate sw_pd-1 bg-celery sw_br-1 sw_round">
                                    </span>
                                    <i className="fa-regular fa-circle-user st-coral"></i>
                                </button>
                            </div>
                            <div className="sw_grid-column">
                                <h4 className="st_weight-bold">Landlord</h4>
                                <p className="font_xd-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            </div>
                            <div className="sw_grid-auto">
                                <p className="font_xd-2">11:45 AM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sw_grid sw_grid-70">

                <div className="sw_panel sw_rsq-2">
                    <div className="sw_panel-wrapper">
                       
                            <div className="sw_grid-row">
                                <div className="sw_grid-auto">
                                    <button className="sw_btn sw_btn-styled sw_rsq-1 sw_round bg-white sw_pos-relative">
                                    <span className="sw_pos-absolute sw_pos-top sw_left-100 sw_translate sw_pd-1 bg-celery sw_br-1 sw_round">
                                    </span>
                                    <i className="fa-regular fa-circle-user st-coral"></i>
                                </button>
                                </div>
                                <div className="sw_grid-column sw_ml-4">
                                    <h5 className="sw_mb-0">Maintenance Support</h5>
                                    <h6 className="font_xd-1 st-mute">Active Now</h6>
                                </div>

                                <div className="sw_grid-auto">
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </div>

                            </div>

                            <hr className="sw_hr br-coral" />
                            
                            <div className="sw_grid-row sw_mt-3">
                                <div className="sw_grid sw_grid-10">
                                    <button className="sw_btn sw_btn-i sw_rsq-1 bg-white">
                                        <i className="fa-regular fa-circle-user st-coral"></i>
                                    </button>
                                </div>
                                <div className="sw_grid sw_grid-90">
                                    <div className="sw_panel bg-white sw_rsq-2">
                                        <div className="sw_panel-wrapper">
                                            <p className="font_xd-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="sw_form-addon sw_form-addon-large sw_form-addon-append bg-white sw_rsq-1 sw_no-br sw_mt-4">
                                <textarea className="sw_form-input sw_no-resize font_xd-2"></textarea>
                                    <button className="addon-icon addon-click st-coral">
                                        <i className="fa-solid fa-paper-plane"></i>
                                    </button>
                            </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    );
}