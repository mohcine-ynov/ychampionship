import './style.css'
import React, { useState, useEffect, useRef } from 'react';


//IMPORTING IMAGES IN images FOLDER
var listOfImages = [];

function importAll(r) {
    return r.keys().map(r);
}
function componentWillMount() {
    listOfImages = importAll(require.context('../../assets/images/', false, /\.png$/));
}

function Homepage() {
    componentWillMount();

    //FUNCTION TO CHANGE IMAGES EACH TIMEFRAME
    const [inc, setInc] = useState(0);
    const count = 6;
    const speed = 1500;
    const inc_lt_count = useRef(inc < count);

    useEffect(() => {
        const counterInterval = setInterval(() => {
            if (inc_lt_count.current) {
                setInc(inc => inc + 1);
            } else {
                clearInterval(counterInterval);
            }
        }, speed);

        return () => clearInterval(counterInterval);
    }, [count, speed]);

    useEffect(() => {
        if (inc < count) {
            inc_lt_count.current = true;
        } else {
            // inc_lt_count.current = false;
            setInc(0);
        }
    }, [inc, count]);

    /* ****************************************** */

    return (
        <div>
            <div className="bg-[#05020a] flex py-8">
                <div className="w-1/2 pt-[3vw] pl-[3vw]">
                    <div className="flex flex-row items-center">
                        <p className="text-[#E6981A] text-[4vw] font-mono mx-3">YNOV</p>
                        <div className="bg-[#E6981A] h-1 w-3/5"></div>
                    </div>
                    <p className="text-white text-[8vw] leading-none" style={{ fontFamily: "FrightWrite2" }}>LEAGUE OF LEGENDS CHAMPIONSHIP</p>

                    <button className="bg-gradient-to-br from-[#fc9b02] to-[#f93c01] h-[4.5vw] w-[23vw] rounded-full font-bold text-white text-[1.2vw] font-mono mt-[2vw] mb-[4vw]">PARTICIPER AU TOURNOIS</button>
                </div>
                <div className="w-1/2 grid justify-items-center relative">
                    <div className="w-[32vw] h-[32vw] rounded-full bg-gradient-to-br from-[#ff00f2] via-[#f93c01] to-[#fc9b02] p-[0.5vw] absolute borderAnimation">
                        <div className=" h-[31vw] rounded-full bg-[#05020a] grid justify-items-center items-center">
                            <div className="w-[26vw] h-[26vw] rounded-full bg-gradient-to-br from-[#fc9b02] via-[#f93c01] to-[#ff00f2] p-[0.5vw] borderAnimation">
                                <div className=" h-[25vw] rounded-full bg-[#05020a]"></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[40vw] h-[40vw] absolute">

                        <img src={listOfImages[inc]} alt="character" />
                    </div>

                </div>
            </div>

        </div>



    );
}

export default Homepage;