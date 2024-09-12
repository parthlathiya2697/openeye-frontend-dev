import React from "react";
import "./InputComponent.scss"

const InputComponent = ({
        title1,
        placeholder1,
        onChange1,
        title2,
        placeholder2,
        onChange2,
        buttontext1,
        onClick1
    }) => {

    return (
            <>
		        <div className="InputComponent">
                    <form>
                        <h3>{title1}</h3>
                        <input type="text" onChange={onChange1} placeholder={placeholder1} autoFocus />
                        {title2 && <input type="text" onChange={onChange2} placeholder={placeholder2} />}
                        <button onClick={onClick1} className="btn"> {buttontext1} </button>
                    </form>
                </div>
            </>
        )
}

export default InputComponent