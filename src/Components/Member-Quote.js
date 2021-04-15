import React from 'react'
import './Member-Quote.css'
function MemberQuote(props) {
    return (
        <div>
            <div className='member-quote-container'>
                <div className="section-header">
                    <h2>Member Quote</h2>
                    <hr className="member-quote-underline" />
                </div>
                <div className='member-quote-content'>
                    <p>{props.quote}</p>
                </div>
            </div>
        </div>
    )
}

export default MemberQuote
