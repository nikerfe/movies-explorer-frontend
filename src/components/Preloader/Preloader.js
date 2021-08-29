import React from 'react'
import './Preloader.css'

const Preloader = (props) => {
    return (

<div className={props.isLoading ? "preloader" : "preloader preloader_hidden"}>
<div className="preloader__loading"></div>
</div>
    )
};

export default Preloader