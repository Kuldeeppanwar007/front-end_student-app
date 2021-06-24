import React from 'react';
import Authenticattion from '../../Authentication/Authentication';
import { useHistory } from 'react-router-dom'
// import logo from "../images/logo192.png";
import { toast } from 'react-toastify';
toast.configure()


const DocumentUpload = () => {

    Authenticattion();
    const History = useHistory('');




    console.log("pay");
    const Razorpay = async (e) => {
        e.preventDefault();
        // console.log(email , password);
        const token = await localStorage.getItem("token");
        const reqOption = {
            method: 'POST',

            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                amount: "1500"
            })
        }

        const res = await fetch('/create_order', reqOption)



        console.log(res);

        const resData = await res.json();
        // console.log(resData);


        if (resData.status === "created") {
            console.log(resData.id, resData.amount, resData)
            console.log('order generated ');
            toast("order generated", { position: toast.POSITION.TOP_CENTER });
            //    open payment Form
            let options = {
                "key": "rzp_test_IdYhaTbIE9F0Yt", // Enter the Key ID generated from the Dashboard
                "amount": resData.amount, // Amount is in currency subunits. Default currency is
                // INR. Hence, 50000 refers to 50000 paise
                "currency": "INR",
                "name": "ssism",
                "description": "Test Transaction",
                "image": "",
                "order_id": resData.id, //This is a sample Order ID. Pass the
                // `id` obtained in the response of Step 1
                "handler": function (response) {

                    toast("payment complete", { position: toast.POSITION.TOP_CENTER });
                    generatePdf(response.razorpay_payment_id, response.razorpay_order_id, response.razorpay_signature);
                    // History.push("/about");
                }
                ,
                "notes": {
                    "address": "Razorpay Corporate Office"

                },
                "theme": {
                    "color": "#3399cc"
                }
            };

            let rzp = window.Razorpay(options);
            rzp.on('payment.failed', function (response) {
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
            });

            rzp.open();

        } else {
            window.alert("payment not initiate");
        }



    }
    const generatePdf = async (razorpay_payment_id, razorpay_order_id, razorpay_signature) => {

        console.log(razorpay_payment_id, razorpay_order_id, razorpay_signature);
        const token = await localStorage.getItem("token");
        const reqOption = {
            method: 'POST',

            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                razorpay_payment_id: razorpay_payment_id,
                razorpay_order_id: razorpay_order_id,
                razorpay_signature: razorpay_signature
            })
        }

        const res = await fetch('/create_reciept', reqOption)



        console.log(res);
        res.blob().then(blob => {
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.href = url;
            a.download = 'myReciept.pdf';
            a.click();
        });

        // const resData = await res.json();



    }



    return (
        <div>
            hy i am document
            <button onClick={Razorpay} type="button" className="btn btn-success mt-5">PAY NOW</button>

        </div>
    );
};

export default DocumentUpload;