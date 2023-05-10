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
            <div style={{ backgroundColor: '#f7f8fb', padding: '5vh 5vw', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                {/* verticals */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: "35%", padding: '1vh 1vw', borderRadius: '10px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2vh 2vw', backgroundColor: 'white', borderRadius: '10px', flexGrow: '1' }}>
                        {/* amis */}
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '2vh 2vw' }}>
                            <div style={{ color: 'black', fontWeight: '600' }}>List d'amis </div>
                            <div style={{ color: 'blue', fontWeight: '400' }}>Voir tout</div>
                        </div>
                        {/* card   */}
                        <div style={{ display: 'flex', flexDirection: 'row', padding: '1vh 1vw', margin: '10px 0', boxShadow: '#ededed 0px 0px 10px 0px', borderRadius: '10px' }}>
                            <div style={{ borderRadius: '50%' }}><img alt='logo' src="https://sm.ign.com/ign_fr/cover/a/avatar-gen/avatar-generations_bssq.jpg" style={{ width: '100px', borderRadius: '50%' }} /></div>
                            <div style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                padding: '1vh 1vw'
                            }}>
                                <div style={{ color: 'black', fontWeight: '600' }}>Mohcine ELBAH </div>
                                <div style={{ color: 'black', fontWeight: '400' }}>C'est moi le chef </div>
                            </div>
                        </div>
                        {/* card   */}
                        <div style={{ display: 'flex', flexDirection: 'row', padding: '1vh 1vw', margin: '10px 0', boxShadow: '#ededed 0px 0px 10px 0px', borderRadius: '10px' }}>
                            <div style={{ borderRadius: '50%' }}><img alt='logo' src="https://sm.ign.com/ign_fr/cover/a/avatar-gen/avatar-generations_bssq.jpg" style={{ width: '100px', borderRadius: '50%' }} /></div>
                            <div style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                padding: '1vh 1vw'
                            }}>
                                <div style={{ color: 'black', fontWeight: '600' }}>Mohcine ELBAH </div>
                                <div style={{ color: 'black', fontWeight: '400' }}>C'est moi le chef </div>
                            </div>
                        </div>
                        {/* card   */}
                        <div style={{ display: 'flex', flexDirection: 'row', padding: '1vh 1vw', margin: '10px 0', boxShadow: '#ededed 0px 0px 10px 0px', borderRadius: '10px' }}>
                            <div style={{ borderRadius: '50%' }}><img alt='logo' src="https://sm.ign.com/ign_fr/cover/a/avatar-gen/avatar-generations_bssq.jpg" style={{ width: '100px', borderRadius: '50%' }} /></div>
                            <div style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                padding: '1vh 1vw'
                            }}>
                                <div style={{ color: 'black', fontWeight: '600' }}>Mohcine ELBAH </div>
                                <div style={{ color: 'black', fontWeight: '400' }}>C'est moi le chef </div>
                            </div>
                        </div>
                        {/* card   */}
                        <div style={{ display: 'flex', flexDirection: 'row', padding: '1vh 1vw', margin: '10px 0', boxShadow: '#ededed 0px 0px 10px 0px', borderRadius: '10px' }}>
                            <div style={{ borderRadius: '50%' }}><img alt='logo' src="https://sm.ign.com/ign_fr/cover/a/avatar-gen/avatar-generations_bssq.jpg" style={{ width: '100px', borderRadius: '50%' }} /></div>
                            <div style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                padding: '1vh 1vw'
                            }}>
                                <div style={{ color: 'black', fontWeight: '600' }}>Mohcine ELBAH </div>
                                <div style={{ color: 'black', fontWeight: '400' }}>C'est moi le chef </div>
                            </div>
                        </div>

                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '2vh 2vw', boxShadow: '#ededed 0px 0px 10px 0px', borderRadius: '10px', backgroundColor: 'white', margin: '2vh 0' }}>
                        <div>🙂</div>
                        <div>Ajouter des amis</div>
                        <div><img src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-plus-icon-png-image_3989579.jpg" alt="options" width={'20px'} /></div>
                    </div>

                </div>

                {/* verticals */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: "35%", padding: '1vh 1vw', borderRadius: '10px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2vh 2vw', backgroundColor: 'white', borderRadius: '10px' }}>
                        {/* equipe */}
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '2vh 2vw' }}>
                            <div style={{ color: 'black', fontWeight: '600', width: '30%' }}>Mon Equipe </div>
                            <div style={{ width: '65%', backgroundColor: '#e4ecf7', borderRadius: '20px' }}>
                                <div style={{ width: '65%', backgroundColor: '#e4ecf7', borderRadius: '20px' }}>
                                    <div style={{ width: '60%', backgroundColor: '#178088', borderRadius: '20px' }}>.</div>
                                </div>
                            </div>
                        </div>
                        {/* card   */}
                        <div style={{ display: 'flex', flexDirection: 'row', padding: '1vh 1vw', margin: '10px 0', boxShadow: '#ededed 0px 0px 10px 0px', borderRadius: '10px' }}>
                            <div style={{ borderRadius: '50%' }}><img alt='logo' src="https://static.vecteezy.com/system/resources/previews/004/599/108/original/gamer-mascot-logo-design-gamer-illustration-for-sport-team-modern-illustrator-concept-style-for-badge-free-vector.jpg" style={{ width: '100px', borderRadius: '50%' }} /></div>
                            <div style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                padding: '1vh 1vw'
                            }}>
                                <div style={{ color: 'black', fontWeight: '600' }}>Team A </div>
                                <div style={{ color: 'black', fontWeight: '400' }}>Best Team</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2vh 2vw', boxShadow: '#ededed 0px 0px 10px 0px', borderRadius: '10px', backgroundColor: 'white', margin: '2vh 0', flexGrow: '1' }}>
                        <img src='https://cdn.discordapp.com/attachments/1030225156162990114/1105764058470293564/MicrosoftTeams-image_4.png'
                            alt='logo' />
                        <div style={{ fontWeight: '600', padding: '1vh 0' }}>Tournois en cours</div>
                        <div style={{ fontWeight: '300', padding: '1vh 0' }}>Tournois officiel Ynov - Venez prouvez de quoi vous êtes capables</div>
                        <button style={{
                            backgroundColor: '#178088',
                            width: '50%',
                            margin: 'auto',
                            borderRadius: '10px',
                            color: 'white',
                            fontWeight: '600',
                            padding: '1vh 0',
                        }}>
                            Participer
                        </button>
                    </div>
                </div>

                {/* verticals */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: "35%", padding: '1vh 1vw', borderRadius: '10px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', padding: '2vh 2vw', backgroundColor: 'white', borderRadius: '10px', flexGrow: '1' }}>
                        {/* mes tournois */}
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '2vh 2vw' }}>
                            <div style={{ color: 'black', fontWeight: '600' }}>Mes Tournois </div>
                            <div style={{ color: 'blue', fontWeight: '400' }}>Voir tout</div>
                        </div>
                        {/* Tournois   */}
                        <div style={{ display: 'flex', flexDirection: 'column', padding: '1vh 1vw', margin: '10px 0', boxShadow: '#ededed 0px 0px 10px 0px', borderRadius: '10px' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <img alt='logo' src="https://img.freepik.com/premium-vector/trophy-vector-icon-gold-cup-vector-best-tournament-championship-logo-illustration_289688-374.jpg" style={{ width: '50px', borderRadius: '50%' }} />
                                <img alt='options' src="https://www.svgrepo.com/show/124304/three-dots.svg" style={{ width: '20px' }} />
                            </div>
                            <div style={{
                                display: 'flex', flexDirection: 'column', justifyContent: 'center',
                                padding: '1vh 1vw'
                            }}>
                                <div style={{ color: 'black', fontWeight: '600' }}>Venez les gars </div>
                                <div style={{ color: 'black', fontWeight: '300' }}>6 équipes max </div>
                            </div>
                            {/* equipe */}

                            <div style={{ width: '90%', backgroundColor: '#e4ecf7', borderRadius: '20px', margin: '1vh auto' }}>
                                <div style={{ width: '60%', backgroundColor: '#178088', borderRadius: '20px' }}>.</div>
                            </div>
                        </div>

                        {/* Tournois   */}
                        <div style={{ display: 'flex', flexDirection: 'column', padding: '1vh 1vw', margin: '10px 0', boxShadow: '#ededed 0px 0px 10px 0px', borderRadius: '10px' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <img alt='logo' src="https://i.ytimg.com/vi/2BA-7ZqvChg/hqdefault.jpg" style={{ width: '50px', borderRadius: '50%' }} />
                                <img alt='options' src="https://www.svgrepo.com/show/124304/three-dots.svg" style={{ width: '20px' }} />
                            </div>
                            <div style={{
                                display: 'flex', flexDirection: 'column', justifyContent: 'center',
                                padding: '1vh 1vw'
                            }}>
                                <div style={{ color: 'black', fontWeight: '600' }}>Eddy Malou tournament </div>
                                <div style={{ color: 'black', fontWeight: '300' }}>4 équipes max </div>
                            </div>
                            {/* equipe */}

                            <div style={{ width: '90%', backgroundColor: '#e4ecf7', borderRadius: '20px', margin: '1vh auto' }}>
                                <div style={{ width: '40%', backgroundColor: '#178088', borderRadius: '20px' }}>.</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '2vh 2vw', boxShadow: '#ededed 0px 0px 10px 0px', borderRadius: '10px', backgroundColor: 'white', margin: '2vh 0' }}>
                        <div>🏆</div>
                        <div>Créer un Tounois</div>
                        <div><img src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-plus-icon-png-image_3989579.jpg" alt="options" width={'20px'} /></div>
                    </div>
                </div>

            </div>

        </div >



    );
}

export default Homepage;