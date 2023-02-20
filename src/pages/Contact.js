import React, { useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import './Contact.css'
import emailjs from 'emailjs-com'
import Typewriter from 'typewriter-effect';

function Contact() {
    const form = useRef()

    const [sending, setSending] = useState(false)
    const [canSend, setCanSend] = useState(true)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, email, message } = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value
        };
        setSending(true)
        setCanSend(false)
        setTimeout(() => {
            setCanSend(true)
        }, 5000)
        try {
            const templateParams = {
                name,
                email,
                message
            };
            if (!canSend) {
                alert("Please wait 5 seconds before sending another message.")
                setSending(false)
                return
            }
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID
            );
            form.current.reset()
            alert("Message Sent!")
        } catch (e) {
            console.log(e);
        }
        setSending(false)
    }

    return (
        <>
            <Helmet>
                <title>Contact | Akarsh Tripathi | Full Stack Developer</title>
            </Helmet>
            <div className="base-container">
                <div className="contact">
                    <div className="row-0">
                        <div className="row-0-contents-contact">
                            <div className="col1">
                                <div className="bg-content">
                                    <div className="contact-header">
                                        <span className="tag-style-text-2-white">&lt;div&gt;</span>
                                        <div style={{ marginLeft: "20px", fontFamily: "Lemon Milk" }}>
                                            <span class="tag-style-text-2-white">&lt;h1&gt;</span>
                                            <h1>
                                                <Typewriter onInit={(typewriter) => { typewriter.typeString("Contact Me").start() }} />
                                            </h1>
                                            <span className="tag-style-text-2-white">&lt;/h1&gt;</span>
                                        </div>
                                        <span className="tag-style-text-2-white">&lt;/div&gt;</span><br />
                                    </div>
                                    <div className="contact-body">
                                        <span className="tag-style-text-2-white">&lt;p&gt;</span>
                                        <p>
                                            I'm currently looking for full time employment opportunities but also available for any ambitious freelance projects.
                                            For any queries please feel free to contact me using the below form.
                                        </p>
                                        <span className="tag-style-text-2-white">&lt;/p&gt;</span><br />
                                        <span className="tag-style-text-2-white">&lt;form&gt;</span>
                                        <form onSubmit={handleSubmit} ref={form} className="contact-form">
                                            <input required={true} placeholder="Your Name" type="text" name='name' className="form-field" />
                                            <input required={true} placeholder="Your Email" type="email" name='email' className="form-field" />
                                            <textarea required={true} placeholder="Message" name="message" className="form-field form-textarea" cols="30" rows="10"></textarea>
                                            <button class="button-30 contact-btn" type='submit' role="button">{sending ? "Sending..." : "Send"}</button>
                                            {/* <input type="submit" value={sending ? "Sending..." : "Send"} disabled={sending} /> */}
                                        </form>
                                        <span className="tag-style-text-2-white">&lt;/form&gt;</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact