import { useState} from "react"
import contact_action from "../../actions/pages_action"


function Contact() {
    const [inputName, setInputName] = useState(null)
    const [inputEmail, setInputEmail] = useState(null)
    const [inputProject, setInputProject] = useState(null)
    const [inputMessage, setInputMessage] = useState(null)

    const send_message = async () => {
        const data = {
            name: inputName,
            email: inputEmail,
            project: inputProject,
            message: inputMessage
        }

        // sending the message
        await contact_action.messsage_me(data)

        setInputName("")
        setInputEmail("")
        setInputProject("")
        setInputMessage("")
    }

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

        <div className="contact__container container grid">
            <div>
                <div className="contact__information">
                    <i className="ui uil-phone contact__icon"></i>

                    <div>
                        <h3 className="contact__title">Call Me</h3>
                        <span className="contact__subtitle">+234 70 3301 9884</span>
                    </div>
                </div>
                <div className="contact__information">
                    <i className="ui uil-envelope contact__icon"></i>

                    <div>
                        <h3 className="contact__title">Email</h3>
                        <span className="contact__subtitle">nweleuchenna2004@gmail.com</span>
                    </div>
                </div>
                <div className="contact__information">
                    <i className="ui uil-map-marker contact__icon"></i>

                    <div>
                        <h3 className="contact__title">Location</h3>
                        <span className="contact__subtitle">Edo - University Of Benin.</span>
                    </div>
                </div>
            </div>

            <form action="" className="contact__form grid">
                <div className="contact__inputs grid">
                    <div className="contact__content">
                        <label htmlFor="" className="contact__label">Name</label>
                        <input type="text" className="contact__input" value={inputName} onChange={(e) => {
                            setInputName(e.target.value)
                        }}/>
                    </div>
                    <div className="contact__content">
                        <label htmlFor="" className="contact__label">Email</label>
                        <input type="email" className="contact__input" value={inputEmail} onChange={(e) => {
                            setInputEmail(e.target.value)
                        }}/>
                    </div>
                </div>
                <div className="contact__content">
                    <label htmlFor="" className="contact__label">Project</label>
                    <input type="text" className="contact__input" value={inputProject} onChange={(e) => {
                            setInputProject(e.target.value)
                    }}/>
                </div>
                <div className="contact__content">
                    <label htmlFor="" className="contact__label">Message</label>
                    <textarea name="" id="" cols="10" rows="7" className="contact__input" value={inputMessage} onChange={(e) => {
                            setInputMessage(e.target.value)
                        }}></textarea>
                </div>

                <div>
                    <a href="#contact" className="buttton button-flex" onClick={() => {
                        send_message()
                    }}>
                        Send Message
                        <i className="uil uil-message button__icon"></i>
                    </a>
                </div>
            </form>
        </div>
    </section>
    )
}

export default Contact
