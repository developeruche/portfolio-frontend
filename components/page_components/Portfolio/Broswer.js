import {MinusIcon, XIcon, InboxIcon} from "@heroicons/react/outline"

function Broswer({image}) {
    return (
        <div className="browser__container">
            <div className="browser__header">
                <div className="browser__headerLeft"></div>
                <div className="browser__headerRight">
                    <div className="browser__headerRightIconContainer">
                        <MinusIcon />
                    </div>
                    <div className="browser__headerRightIconContainer">
                        <InboxIcon />
                    </div>
                    <div className="browser__headerRightIconContainer">
                        <XIcon />
                    </div>
                </div>
            </div>
            <div className="browser__body">
                <img className="browser__body__img" src={image} />
            </div>
            <div className="browser__footer"></div>
        </div>
    )
}

export default Broswer
