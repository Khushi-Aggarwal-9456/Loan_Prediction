import React, { useState } from 'react'
import "./Style.css"

export default function Frontend() {

    const [dep, setDep] = useState(0);
    const [annInc, setAnnInc] = useState(0);
    const [loanAmo, setLoanAmo] = useState(0);
    const [loanTerm, setLoanTerm] = useState(0);
    const [cibilScore, setCibilScore] = useState(0);
    const [resAss, setResAss] = useState(0);
    const [commAss, setCommAss] = useState(0);
    const [luxAss, setLuxAss] = useState(0);
    const [bankAss, setBankAss] = useState(0);
    const [education, setEducation] = useState("");
    const [selfEmp, setSelfEmp] = useState("");

    const [errorMessage, setErrorMessage] = useState("");
    const [show, setShow] = useState(false);

    const [grad, setGrad] = useState(1);
    const [notGrad, setNotGrad] = useState(0);
    const [sf, setSf] = useState(1);
    const [notSF, setNotSF] = useState(0);

    const [loanApproved, setLoanApproved] = useState("");

    const handleDep = (e) => {
        setLoanApproved();
        setDep(e.target.value);
    }

    const handleAnnInc = (e) => {
        setLoanApproved();
        setAnnInc(e.target.value);
    }

    const handleLoanAmount = (e) => {
        setLoanApproved();
        setLoanAmo(e.target.value);
    }

    const handleLoanTerm = (e) => {
        setLoanApproved();
        setLoanTerm(e.target.value);
    }

    const handleCibilScore = (e) => {
        setLoanApproved();
        setCibilScore(e.target.value);
    }

    const handleResAss = (e) => {
        setLoanApproved();
        setResAss(e.target.value);
    }

    const handleCommAss = (e) => {
        setLoanApproved();
        setCommAss(e.target.value);
    }

    const handleLuxAss = (e) => {
        setLoanApproved();
        setLuxAss(e.target.value);
    }

    const handleBankAss = (e) => {
        setLoanApproved();
        setBankAss(e.target.value);
    }

    const handleEducation = (e) => {
        setLoanApproved();
        setEducation(e.target.value);
        if (e.target.value === "Graduate") {
            setGrad(1);
            setNotGrad(0);
        } else {
            setGrad(0);
            setNotGrad(1);
        }
    }

    const handleSelfEmp = (e) => {
        setLoanApproved();
        setSelfEmp(e.target.value);
        if (e.target.value === "Yes") {
            setSf(1);
            setNotSF(0);
        } else {
            setSf(0);
            setNotSF(1);
        }
    }

    const predictLoan = () => {

        if (annInc === 0) {
            setErrorMessage("enter annual income min 4,00,000");
            setShow(true);
        } else if (loanAmo < 10000) {
            setErrorMessage("enter bank loan amount min 10,000");
            setShow(true);
        } else if (loanTerm < 0 || loanTerm > 20) {
            setErrorMessage("enter bank loan term ranges between 1 year to 20 years");
            setShow(true);
        } else if (cibilScore <= 300 || cibilScore >= 900) {
            setErrorMessage("enter cibil score in range 300 to 900");
            setShow(true);
        }
        
        else {
        console.log(dep);
        console.log(annInc);
        console.log(loanAmo);
        console.log(loanTerm);
        console.log(cibilScore);
        console.log(resAss);
        console.log(commAss);
        console.log(luxAss);
        console.log(bankAss);
        console.log(education);
        console.log(selfEmp);

        console.log(grad);
        console.log(notGrad);
        console.log(notSF);
        console.log(sf);

        setShow(false);

        let data = {
            ' no_of_dependents': parseInt(dep),
            ' income_annum': parseInt(annInc),
            ' loan_amount': parseInt(loanAmo),
            ' loan_term': parseInt(loanTerm),
            ' cibil_score': parseInt(cibilScore),
            ' residential_assets_value': parseInt(resAss),
            ' commercial_assets_value': parseInt(commAss),
            ' luxury_assets_value': parseInt(luxAss),
            ' bank_asset_value': parseInt(bankAss),
            'Graduate': parseInt(grad),
            'Not_Graduate': parseInt(notGrad),
            'SF_no': parseInt(notSF),
            'SF_yes': parseInt(sf)
        };

        const url = "http://localhost:5000/predict";
        // const url = "https://loan-prediction-system-ml.onrender.com/predict";
        fetch(url, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response.Loan_Approved)
                setLoanApproved(response.Loan_Approved);
            });

        }
    }

    return (
        <div class="form">
            <h1 class="loan_heading">Loan Prediction Using Machine Learning</h1>
            <div className="loanForm" >
                <div className='parent'>
                    <div className="d-flex justify-content-between">
                        <label>Select no. of Dependents :</label>
                        <select onChange={handleDep} value={dep}>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                    <div className="d-flex justify-content-between">
                        <label>Annual Income :</label>
                        <input type="number" placeholder='Enter your Income' onChange={handleAnnInc} value={annInc} />
                    </div>
                </div>

                <div className='parent'>
                    <div className="d-flex justify-content-between">
                        <label>Loan Amount :</label>
                        <input type="number" placeholder='Enter Loan Amount' onChange={handleLoanAmount} value={loanAmo} />
                    </div>

                    <div className="d-flex justify-content-between">
                        <label>Loan Term :</label>
                        <input type="number" placeholder='Enter Loan Term' onChange={handleLoanTerm} value={loanTerm} />
                    </div>
                </div>

                <div className='parent'>
                    <div className="d-flex justify-content-between">
                        <label>Cibil Score :</label>
                        <input type="number" placeholder='Enter Cibil Score' onChange={handleCibilScore} value={cibilScore} />
                    </div>

                    <div className="d-flex justify-content-between">
                        <label>Residential Assets Value :</label>
                        <input type="number" placeholder='Enter Residential Assets Value' onChange={handleResAss} value={resAss} />
                    </div>
                </div>

                <div className='parent'>
                    <div className="d-flex justify-content-between">
                        <label>Commercial Assets Value :</label>
                        <input type="number" placeholder='Enter Commercial Assets Value' onChange={handleCommAss} value={commAss} />
                    </div>

                    <div className="d-flex justify-content-between">
                        <label>Luxury Assets Value :</label>
                        <input type="number" placeholder='Enter Luxury Assets Value' onChange={handleLuxAss} value={luxAss} />
                    </div>
                </div>

                <div className='parent'>
                    <div className="d-flex justify-content-between">
                        <label>Bank Assets Value :</label>
                        <input type="number" placeholder='Enter Bank Assets Value' onChange={handleBankAss} value={bankAss} />
                    </div>

                    <div className="d-flex justify-content-between">
                        <label>Education :</label>
                        <select onChange={handleEducation} value={education}>
                            <option>Graduate</option>
                            <option>Non-Graduate</option>
                        </select>
                    </div>
                </div>

                <div className="d-flex justify-content-between se">
                    <label>Self Employed :</label>
                    <select onChange={handleSelfEmp} value={selfEmp}>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>

                <p style={{
                    color: "#1a0671ff",
                    textTransform:"capitalize",
                    marginTop:"3%",
                    display: show === true ? "block" : "none"
                }}>{errorMessage}</p>

                <button className='approvebutton' onClick={predictLoan}>Check for  Approval</button>

            </div>

            {
                loanApproved === 0 ?
                    <center>
                        <h1 style={{
                            color: "green"
                        }}>Hurray, Your Loan, will be approved</h1>
                    </center>
                :
                    loanApproved === 1 ?
                        <center style={{
                            color: "red"
                        }}>
                            <h1>Sorry to say, but your Loan can not be approved</h1>
                        </center>
                    :
                        <></>
            }

        </div>
    )
}
