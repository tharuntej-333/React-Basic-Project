import React from 'react';
import banner from 'D:/CODING/MainFolder/dbmsmain/src/3banner.avif';
import savingsacc from 'D:/CODING/MainFolder/dbmsmain/src/savingsacc.png';
import fd from 'D:/CODING/MainFolder/dbmsmain/src/fd.jpeg';
import creditcards from 'D:/CODING/MainFolder/dbmsmain/src/credit cards.jpg';
import loansidfc from 'D:/CODING/MainFolder/dbmsmain/src/loansidfc.jpg';
import './mainpage.css';
function MainPage(){
    return(
        [
            <div className="main-page">
                <div className="marqclass">
                    <div id="bannerimage">
                        <img src={banner} alt="BannerImage"/>
                    </div>
                    <div id="marqtag">
                        <div id='marqueemarqtag' style={{/*overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',*/ animation: '5s linear infinite'}}>
                            <div style={{ marginBottom: '1rem' }}></div>
                            --::Stock Performance: IDFC First Bank’s stock has been under pressure recently, with analysts recommending a sell at ₹71.70 due to a bearish outlook.
                            <div style={{ marginBottom: '1rem' }}></div>
                            --::Office Space Lease: The bank has secured 1.65 lakh sq ft of office space at Oberoi Commerz III in
                            Mumbai’s Goregaon area on a five-year lease starting January 2025. The deal includes a 15% rent
                            increase after 36 months.
                            <div style={{ marginBottom: '1rem' }}></div>
                            --::Financial Results: Despite a 21% increase in net profit, IDFC First Bank has faced growing stress
                            in
                            unsecured retail, microfinance, and rural loans in the first quarter of FY25.
                            <div style={{ marginBottom: '1rem' }}></div>
                            --::Regulatory Approvals: The Reserve Bank of India (RBI) approved the reverse merger of IDFC Ltd
                            with
                            IDFC First Bank in December 2023.
                            <div style={{ marginBottom: '1rem' }}></div>
                            --::Shareholder Approval: The merger of IDFC Ltd with IDFC First Bank was approved by shareholders,
                            with
                            IDFC shareholders receiving 155 shares for every 100 shares held
                            </div>
                        </div>
                    </div>
                    <div className="infobank">
                    <div className="foupar">
                        <p>
                            IDFC First Bank, originally known as IDFC Bank, was founded as a part of the Infrastructure
                            Development
                            Finance Company Limited (IDFC Ltd.) in 2015. The bank was formed after IDFC Ltd. received a
                            universal
                            banking license from the Reserve Bank of India (RBI).
                            <div style={{ marginBottom: '1rem' }}></div>
                            Founders:
                            --:: Dr. Rajiv Lall and V. Vaidyanathan.
                            <div style={{ marginBottom: '1rem' }}></div>
                            Partners:
                            --:: Capital First Ltd and Warburg Pincus.
                            <div style={{ marginBottom: '1rem' }}></div>
                        </p>
                    </div>
                    <div className="loans">
                        <h4>Some Loans By Bank ::</h4>
                        <ul>
                            <li>
                                Personal Loan
                                Loan Amount: Up to ₹40 lakh.
                                Tenure: 1 to 5 years.
                                Interest Rate: Competitive rates starting from around 10-15% p.a. (can vary based on credit
                                profile).
                            </li>
                            <li>
                                Home Loan
                                Loan Amount: Up to ₹10 crore (depending on the property and applicant profile).
                                Tenure: Up to 30 years.
                                Interest Rate: Floating rates starting from around 8-9% p.a
                            </li>
                            <li>
                                Car Loan
                                Loan Amount: Up to 100% of the on-road price of the car.
                                Tenure: Up to 7 years.
                                Interest Rate: Starting from 8-10% p.a.
                            </li>
                            <li>
                                Two-Wheeler Loan
                                Loan Amount: Up to 95% of the on-road price of the two-wheeler.
                                Tenure: Up to 4 years.
                                Interest Rate: Starting from 10-15% p.a.
                            </li>
                            <li>
                                Business Loan
                                Loan Amount: Up to ₹75 lakh.
                                Tenure: Up to 5 years.
                                Interest Rate: Starting from 12-20% p.a.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='services'>
                    <h1>Services</h1>
                    <div className='serimg'>
                        <img src={savingsacc} width="300px" height="300px" alt="Savings Account"/>
                        <img src={fd} width="300px" height="300px" alt="FD"/>
                        <img src={creditcards} width="300px" height="300px" alt="Credit Cards"/>
                        <img src={loansidfc} width="300px" height="300px" alt="Loan"/>
                    </div>                       
                </div>
            </div>
        ]
    );
}
export default MainPage;