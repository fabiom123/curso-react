import React from 'react'

const UserCard = ({name, email}) =>(
    <article className="card" id="props.title">
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="center">
            { name }
        </h3>
        <div className="s-mb-2 s-main-center">
            <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
                <span className="small">{ email }</span>    
            </div>
                
            </div>
        </div>
    </div>
</article>
)

export default UserCard