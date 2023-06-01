import React from "react";

export const Mobile_BeAfterv = React.memo(props => {
    return (
        <div className="pub_container">
            <div className="sellected_title">{props.title}</div>
            <div className="publications">
                <div className="pub">
                    <div className="pub_title">My last work</div>
                    <div className="pub_photos"></div>
                    <div className="pub_text">Lorem ipsum dolor sit amet Dignissimos, similique suscipit reprehenderit.Lorem ipsum, dolor sit amet consectetur adipisicing serunt nesciunt quidem dolore veniam reiciendis ipsa architect.</div>
                    <div className="pub_nav">
                        <div className="like"><img src="/img/like-off.png" status="off" /><div className="count">0</div></div>
                        <div className="comments"><img src="/img/comment.png" /></div>
                    </div>
                </div>
            </div>       
        </div>           
                    
    )
})
