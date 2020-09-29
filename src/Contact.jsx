import React, { useState } from 'react';



const Contact = () => {
    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        msg: '',

    })
    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });

    };
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`${data.fullname}`)
    };

    return (<>
        <div className='my-5'>
            <h1 className='text-center'>Contact Us</h1>
        </div>
        <div className='container contact_div'>
            <div className='row'>
                <div className='col-md-6 col-10 mx-auto'>
                    <form onSubmit={formSubmit}>
                        <div className="form-group">
                            <label for="fullname">FullName</label>
                            <input type="text" class="form-control" id="fullname" name="fullname" value={data.fullname} onChange={InputEvent} placeholder='Enter your Name Here' required />

                        </div>

                        <div className="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email" name="email" value={data.email} onChange={InputEvent} placeholder='Enter your email' aria-describedby="emailHelp" required />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" class="form-control" id="phone" name="phone" value={data.phone} onChange={InputEvent} placeholder='98******' required />

                        </div>
                        <div class="form-group">
                            <label for="msg">Message</label>
                            <textarea class="form-control" id="msg" name="msg" value={data.msg} onChange={InputEvent} rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Submit</button>
                    </form>


                </div>


            </div>
        </div>
    </>);

};
export default Contact;