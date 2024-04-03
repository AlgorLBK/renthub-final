export const ReportIssue = () => {
    return (
        <> 
       <div className="sw_panel sw_panel-styled bg-none sw_rsq-1">
            <div className="sw_panel-wrapper">
                <h3 className="sw_panel-title">Report an Issue</h3>
                <form className="sw_form sw_mt-3">
                    <label htmlFor="" className="sw_form-label">Title:</label>
                    <input type="text" className="sw_form-input sw_rsq-1" placeholder="Enter issue title"></input>

                    <label htmlFor="" className="sw_form-label">Description:</label>
                    <textarea className="sw_form-input sw_rsq-1" rows="4" placeholder="Describe the issue in detail"></textarea>

                    <label htmlFor="" className="sw_form-label">Issue Category:</label>
                    <select className="sw_form-select sw_rsq-1">
                        <option value="" disabled>Choose...</option>
                        <option>Technical</option>
                        <option>Account & Billing</option>
                        <option>User Interface</option>
                        <option>Other</option>
                    </select>

                    <label htmlFor="" className="sw_form-label">Issue Category:</label>
                    <div class="sw_form-file-wrapper sw_rsq-2">
                        <input type="file" class="sw_form-file sw_form-input" />
                        <label class="sw_form-file-label"></label>
                    </div>

                    <hr className="sw_hr br-coral" />

                    <input className="sw_btn sw_btn-block bg-coral st-white sw_rsq-1" value={"Submit"} type="submit"/>
                </form>
            </div>
        </div>
        </>
    );
}