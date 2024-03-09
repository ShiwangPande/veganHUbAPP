import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useSearchParams } from "react-router-dom"
import Pizzaman from "../../assests/images/PizzaMan.png";
import Timer from "./timer";
const PaymentSuccess = () => {

    const seachQuery = useSearchParams()[0]

    const referenceNum = seachQuery.get("reference")

    const [show, setShow] = useState(false);

    const [email, setEmail] = useState("");


    const sendEmail = async (e) => {
        e.preventDefault();

        const res = await fetch("https://veganhubserver.vercel.app/api/sendmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email
            })
        });

        const data = await res.json();
        console.log(data);

        if (data.status === 401 || !data) {
            console.log("error")
        } else {
            setShow(true);
            setEmail("")
            console.log("Email sent")
        }
    }
    return (
        <div className='text-white m-5'>
            <h1 className='text-center text-4xl font-semibold mt-5'>Payment Success </h1>

            <h5 className='text-center text-xl mt-5'> Reference No. {referenceNum}</h5>
            <div className='text-white text-xl flex mt-8'>

                <div className='flex flex-col justify-center m-auto text-center gap-5'>

                    {
                        show ? <Alert variant="primary" onClose={() => setShow(false)} dismissible>
                            Your Email Succesfully Send!
                        </Alert> : ""
                    }
                    <div className="bg-slate-800 p-10 border-2 border-white">
                        <div className='d-flex justify-center mb-4'>
                            <h1 className='text-3xl'>Track your delivery</h1>
                        </div>
                        <div className="flex justify-center ">
                            <Form className='mt-2 col-lg-6 '>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='mx-5 '>Enter Your Email:</Form.Label>
                                    <Form.Control className='bg-slate-800 text-xl p-1 rounded text-center border-none border-white border-2' type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                                </Form.Group>
                                <button className='bg-yellow-500 w-100 px-8 font-semibold text-2xl hover:bg-yellow-600 rounded' variant="primary" type="submit" onClick={sendEmail}>
                                    Send
                                </button>
                            </Form>
                        </div>

                    </div>
                </div>

                <div className='flex justify-center '>

                    <div className='ml-10'>
                        <Timer initMinute={5} initSeconds={0} />
                    </div>

                    <div className='text-center justify-center items-center mr-15'>
                        <img className='m-auto' src={Pizzaman} alt="pizzaman" height="300px" />
                        <div className='mt-5' style={{ fontFamily: "Open Sans Condensed", fontSize: 35 }}>
                            We have received your order, Thank you
                        </div>
                        <div className='mt-5' style={{ fontFamily: "Comfortaa" }}>
                            Order #{Math.round(Math.random() * 100000)}
                        </div>
                        <div style={{ fontFamily: "Indie Flower", fontSize: 20 }}>
                            Will be ready in 20-30 min.
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default PaymentSuccess