import React from 'react';
import './style1.css';
import picture from 'D:/CODING/MainFolder/dbmsmain/src/picture.jpg';
import favicon from './favicon.png';
const bankname="IDFC FIRSTBANK";
React.Component.prototype.favicon = favicon;
function Nav(){
    return(
        [
            <div className='nav'>
                <div className='image'>
                    < a href="./mainpage.html"><img src={picture} alt="IDFCLOGO" /></a>
                </div>
                <div className="bankdetails">
                    <div className="bankname">
                        <h1>{bankname}</h1>
                    </div>
                    <div className="options">
                        <table>
                            <tr>
                                <th>
                                    <a id='home-option' href="./accopening.php">Register |</a>
                                </th>
                                <th>About Us  |</th>
                                <th>
                                    <a id='login-option' href="./index2.php">Login</a>
                                </th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        ]
    );
}
export default Nav;