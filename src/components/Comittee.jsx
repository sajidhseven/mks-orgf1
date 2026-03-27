import React from 'react';
import './../Style.css';

const Comittee = () => {
    // const officeBearers = [
    //     {
    //         id: 1,
    //         name: "Gandhi Bevinakoppa",
    //         designation: "President",
    //         photo: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-4.png",
    //         bio: "Leading the Melbourne Kannada Sangha with a vision to strengthen community bonds and cultural heritage across Australia.",
    //         contact: "president@mks.org.au"
    //     },
    //     {
    //         id: 2,
    //         name: "Bhavya Vinay",
    //         designation: "Vice President",
    //         photo: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-6.png",
    //         bio: "Supporting community leadership and driving key initiatives to expand the Sangha's cultural impact in Melbourne.",
    //         contact: "vicepresident@mks.org.au"
    //     },
    //     {
    //         id: 3,
    //         name: "Hemanth Kumar",
    //         designation: "Secretary",
    //         photo: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-7.png",
    //         bio: "Managing communications and operations, ensuring the Sangha runs efficiently and stays connected with its members.",
    //         contact: "secretary@mks.org.au"
    //     },
    //     {
    //         id: 4,
    //         name: "Sunyana Gadgoli",
    //         designation: "Treasurer",
    //         photo: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-5.png",
    //         bio: "Overseeing the financial health of the Sangha and managing sponsorships, donations, and community funds.",
    //         contact: "treasurer@mks.org.au"
    //     },
    // ];

    // const committeeMembers = [
    //     {
    //         id: 5,
    //         name: "Anita Arun",
    //         designation: "Committee Member",
    //         photo: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-7.png",
    //         bio: "Actively contributes to event coordination and community engagement programs.",
    //         contact: "info@mks.org.au"
    //     },
    //     {
    //         id: 6,
    //         name: "Arun Kumar V",
    //         designation: "Committee Member",
    //         photo: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-8.png",
    //         bio: "Supports logistics and venue management for Sangha's cultural festivals and gatherings.",
    //         contact: "info@mks.org.au"
    //     },
    //     {
    //         id: 7,
    //         name: "Avinash Adhyapak",
    //         designation: "Committee Member",
    //         photo: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-9.png",
    //         bio: "Helps organize educational workshops and youth engagement activities for the community.",
    //         contact: "info@mks.org.au"
    //     },
    //     {
    //         id: 8,
    //         name: "Dileep Ramdas",
    //         designation: "Committee Member",
    //         photo: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-7.png",
    //         bio: "Contributes to community outreach initiatives and membership development efforts.",
    //         contact: "info@mks.org.au"
    //     },
    //     {
    //         id: 9,
    //         name: "Ganesh Paradi",
    //         designation: "Committee Member",
    //         photo: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-10.png",
    //         bio: "Involved in planning and executing major cultural events and Kannada Rajyotsava celebrations.",
    //         contact: "info@mks.org.au"
    //     },
    //     {
    //         id: 10,
    //         name: "KB Math",
    //         designation: "Committee Member",
    //         photo: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-11.png",
    //         bio: "Brings experience in community leadership and helps with strategic planning for the Sangha.",
    //         contact: "info@mks.org.au"
    //     },
    //     {
    //         id: 11,
    //         name: "Meghana Vasudev",
    //         designation: "Committee Member",
    //         photo: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-7.png",
    //         bio: "Assists in coordinating women-led community programs and cultural workshops.",
    //         contact: "info@mks.org.au"
    //     },
    //     {
    //         id: 12,
    //         name: "Narayan Swamy",
    //         designation: "Committee Member",
    //         photo: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-7.png",
    //         bio: "Supports festival planning and volunteer coordination for the Sangha's events.",
    //         contact: "info@mks.org.au"
    //     },
    //     {
    //         id: 13,
    //         name: "Neethu Kushalappa",
    //         designation: "Committee Member",
    //         photo: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-12.png",
    //         bio: "Contributes to social media outreach and helps promote community events across Melbourne.",
    //         contact: "info@mks.org.au"
    //     },
    //     {
    //         id: 14,
    //         name: "Sanmath Shetty",
    //         designation: "Committee Member",
    //         photo: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-7.png",
    //         bio: "Assists with sponsorship relations and event management for the Sangha.",
    //         contact: "info@mks.org.au"
    //     },
    //     {
    //         id: 15,
    //         name: "Sreenivas Sharma",
    //         designation: "Committee Member",
    //         photo: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-7.png",
    //         bio: "Plays a key role in cultural programming and traditional event coordination.",
    //         contact: "info@mks.org.au"
    //     },
    //     {
    //         id: 16,
    //         name: "Srinivas Chinnareddy",
    //         designation: "Committee Member",
    //         photo: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-7.png",
    //         bio: "Helps organize community sports events and family-oriented social activities.",
    //         contact: "info@mks.org.au"
    //     },
    //     {
    //         id: 17,
    //         name: "Sudyesh Kumar",
    //         designation: "Committee Member",
    //         photo: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-13.png",
    //         bio: "Supports technology and digital initiatives to improve the Sangha's online presence.",
    //         contact: "info@mks.org.au"
    //     },
    //     {
    //         id: 18,
    //         name: "Vikas Reddy",
    //         designation: "Committee Member",
    //         photo: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-7.png",
    //         bio: "Assists with venue coordination and logistics for community gatherings.",
    //         contact: "info@mks.org.au"
    //     },
    //     {
    //         id: 19,
    //         name: "Vikas Sudheendra",
    //         designation: "Committee Member",
    //         photo: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-7.png",
    //         bio: "Contributes to volunteer management and helps drive community participation.",
    //         contact: "info@mks.org.au"
    //     }
    // ];

    // const bhavanaTeam = [
    //     {
    //         id: 20,
    //         name: "Srinivasa Sharma",
    //         designation: "Committee Member",
    //         photo: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-7.png",
    //         bio: "Supports cultural preservation initiatives and mentors younger community members.",
    //         contact: "info@mks.org.au"
    //     },
    //     {
    //         id: 21,
    //         name: "Hemanth Rangaramaiah",
    //         designation: "Committee Member",
    //         photo: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-14.png",
    //         bio: "Involved in planning major Sangha events and fostering intercommunity relations.",
    //         contact: "info@mks.org.au"
    //     },
    //     {
    //         id: 22,
    //         name: "Satish Savanur",
    //         designation: "Library",
    //         photo: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-7.png",
    //         bio: "Selflessly managing the Kannada library for over 20 years, growing it to 2000+ books.",
    //         contact: "info@mks.org.au"
    //     },
    // ];

    // const studentWing = [
    //     {
    //         id: 23,
    //         name: "Pramath Joshi",
    //         designation: "Committee Member",
    //         photo: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-15.png",
    //         bio: "Assists in organizing educational and cultural programs for the community.",
    //         contact: "info@mks.org.au"
    //     },
    // ];

    // const pastCommittee = [
    //     { id: 101, name: "Arunkumar V", photo: "/Arunkumar v.png" },
    //     { id: 102, name: "Bhavya Vinay", photo: "/Bhavya vinay - Treasurer.png" },
    //     { id: 103, name: "Ganesh Paradi", photo: "/Ganesh paradi.png" },
    //     { id: 104, name: "Gautham H N", photo: "/Gautham H N.png" },
    //     { id: 105, name: "Hemanth Kumar", photo: "/Hemanth kumar.png" },
    //     { id: 106, name: "Hemanth", photo: "/Hemanth.png" },
    //     { id: 107, name: "K B Math", photo: "/K.B.Math.png" },
    //     { id: 108, name: "Manjula Krishanan", photo: "/Manjula Krishanan.png" },
    //     { id: 109, name: "Mary Bhagyam", photo: "/Mary bhagyam.png" },
    //     { id: 110, name: "Narendra", photo: "/Narendra.png" },
    //     { id: 111, name: "Pramanth Joshi", photo: "/Pramanth joshi.png" },
    //     { id: 112, name: "Sanath Billandlahalli", photo: "/Sanath Billandlahalli.png" },
    //     { id: 113, name: "Shwetha Gowda", photo: "/Shwetha Gowda.png" },
    //     { id: 114, name: "Srinivas Sharma", photo: "/Srinivas Sharma - President.png" },
    //     { id: 115, name: "Srinivasa Chinnareddy", photo: "/Srinivasa chinnareddy - secretary.png" },
    //     { id: 116, name: "Sudeysh Kumar", photo: "/Sudeysh kumar.png" },
    //     { id: 117, name: "Sunyana Gadgoli", photo: "/Sunyana Gadgoli - vice president.png" },
    //     { id: 118, name: "", photo: "/Unknown.png" },
    //     { id: 119, name: "Vanishree Kulkarni", photo: "/Vanishree kulkarni.png" },
    //     { id: 120, name: "Vikas Sudheendra", photo: "/Vikas sudheendra.png" },
    //     { id: 121, name: "Avinash Adhyapak", photo: "/avinash adhyapak.png" },
    //     { id: 122, name: "Dileep Ramadas", photo: "/dileep ramadas.png" }
    // ];

    return (
        <>
            {/* ================= COMMITTEE HERO SECTION ================= */}
            <section
                className="committee-hero-section"
                style={{
                    backgroundImage: "url('/Comittee.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className="committee-hero-overlay"></div>
                <div className="committee-hero-content">
                    <h1 className="committee-hero-title">Committee Members</h1>
                </div>
            </section>

            {/* ================= COMMITTEE GROUP PHOTO SECTION ================= */}
            <section className="committee-group-photo-section">
                <div className="committee-list-container">
                    <div className="committee-list-header">
                        <h2>Melbourne Kannada Sangha Inc Executive Committee  2025 - 2027</h2>
                        <div className="committee-list-divider"></div>
                    </div>
                    <div className="committee-group-img-wrapper">
                        <img 
                            src="/List.jpeg" 
                            alt="MKS Executive Committee 2023-25" 
                            className="committee-group-img"
                        />
                    </div>
                </div>
            </section>

             {/* ================= PRESENT COMMITTEE 2025-2027 ================= */}
            <section className="committee-list-section" style={{ paddingTop: '0' }}>
                <div className="committee-list-container">
                    <div className="committee-list-header">
                        <h2>PRESENT COMMITTEE: 2023-27</h2>
                        <div className="committee-list-divider"></div>
                    </div>

                    {/* Officers Grid - 4 Columns */}
                    <div className="committee-grid-4">
                        {[
                            { id: 1, name: "Srinivasa Sharma", designation: "President", photo: "/Srinivas Sharma - President.png" },
                            { id: 2, name: "Sunyana Gadgoli", designation: "Vice President", photo: "/Sunyana Gadgoli - vice president.png" },
                            { id: 3, name: "Srinivasa Chinnareddy", designation: "Secretary", photo: "/Srinivasa chinnareddy - secretary.png" },
                            { id: 4, name: "Bhavya Vinay", designation: "Treasurer", photo: "/Bhavya vinay - Treasurer.png" },
                        ].map((member) => (
                            <div className="committee-card" key={member.id}>
                                <div className="committee-card-img-wrapper">
                                    <img src={member.photo} alt={member.name} className="committee-card-img" />
                                </div>
                                <div className="committee-card-content">
                                    <h3 className="committee-member-name">{member.name}</h3>
                                    <h4 className="committee-member-designation">{member.designation}</h4>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Executive Members Grid - 5 Columns */}
                    <div className="committee-section-header">
                        <h3>EXECUTIVE COMMITTEE MEMBERS</h3>
                    </div>
                    <div className="committee-grid-5">
                        {[
                            { id: 5, name: "Arunkumar V", designation: "executive committe members", photo: "/Arunkumar v.png" },
                            { id: 6, name: "Avinash Adhyapak", designation: "executive committe members", photo: "/avinash adhyapak.png" },
                            { id: 7, name: "Dileep Ramadas", designation: "executive committe members", photo: "/dileep ramadas.png" },
                            { id: 8, name: "Ganesh Paradi", designation: "executive committe members", photo: "/Ganesh paradi.png" },
                            { id: 9, name: "Gautham H N", designation: "executive committe members", photo: "/Gautham H N.png" },
                            { id: 10, name: "Hemanth Kumar", designation: "executive committe members", photo: "/Hemanth kumar.png" },
                            { id: 11, name: "Manjula Krishanan", designation: "executive committe members", photo: "/Manjula Krishanan.png" },
                            { id: 12, name: "Mary Bhagyam", designation: "executive committe members", photo: "/Mary bhagyam.png" },
                            { id: 13, name: "K.B.Math", designation: "executive committe members", photo: "/K.B.Math.png" },
                            { id: 14, name: "Pramath Joshi", designation: "executive committe members", photo: "/Pramanth joshi.png" },
                            { id: 15, name: "Sanath Billandlahalli", designation: "executive committe members", photo: "/Sanath Billandlahalli.png" },
                            { id: 16, name: "Shwetha Gowda", designation: "executive committe members", photo: "/Shwetha Gowda.png" },
                            { id: 17, name: "Sudeysh Kumar", designation: "executive committe members", photo: "/Sudeysh kumar.png" },
                            { id: 18, name: "Vanishree Kulkarni", designation: "executive committe members", photo: "/Vanishree kulkarni.png" },
                            { id: 19, name: "Vikas Sudheendra", designation: "executive committe members", photo: "/Vikas sudheendra.png" },
                        ].map((member) => (
                            <div className="committee-card" key={member.id}>
                                <div className="committee-card-img-wrapper">
                                    <img src={member.photo} alt={member.name} className="committee-card-img" />
                                </div>
                                <div className="committee-card-content">
                                    <h3 className="committee-member-name">{member.name}</h3>
                                    <h4 className="committee-member-designation">{member.designation}</h4>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Row - Core Committee and VSL Coordinator centered */}
                    <div className="committee-bottom-container">
                        <div className="committee-bottom-row">
                            {/* Core Committee Section */}
                            <div className="committee-group-section">
                                <div className="committee-section-header">
                                    <h3>CORE COMMITTEE MEMBERS</h3>
                                </div>
                                <div className="committee-group-cards">
                                    {[
                                        { id: 20, name: "Hemanth", designation: "Core Committe Members", photo: "/Hemanth.png" },
                                        { id: 21, name: "Krishnapriya", designation: "Core Committe Members", photo: "/Unknown.png" },
                                    ].map((member) => (
                                        <div className="committee-card" key={member.id}>
                                            <div className="committee-card-img-wrapper">
                                                <img src={member.photo} alt={member.name} className="committee-card-img" />
                                            </div>
                                            <div className="committee-card-content">
                                                <h3 className="committee-member-name">{member.name}</h3>
                                                <h4 className="committee-member-designation">{member.designation}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* VSL Coordinator Section */}
                            <div className="committee-group-section">
                                <div className="committee-section-header">
                                    <h3>VSL-COORDINATOR</h3>
                                </div>
                                <div className="committee-group-cards">
                                    {[
                                        { id: 22, name: "Narendra", designation: "VSL-coordinator", photo: "/Narendra.png" },
                                    ].map((member) => (
                                        <div className="committee-card" key={member.id}>
                                            <div className="committee-card-img-wrapper">
                                                <img src={member.photo} alt={member.name} className="committee-card-img" />
                                            </div>
                                            <div className="committee-card-content">
                                                <h3 className="committee-member-name">{member.name}</h3>
                                                <h4 className="committee-member-designation">{member.designation}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= OFFICE BEARERS SECTION ================= */}
            {/* <section className="committee-list-section">
                <div className="committee-list-container">

                    <div className="committee-list-header">
                        <h2>PAST COMMITTEE 2023–2025</h2>
                        <div className="committee-list-divider"></div>
                    </div>

                    <div className="committee-grid">
                        {officeBearers.map((member) => (
                            <div className="committee-card" key={member.id}>
                                <div className="committee-card-img-wrapper">
                                    <img src={member.photo} alt={member.name} className="committee-card-img" />
                                </div>
                                <div className="committee-card-content">
                                    <h3 className="committee-member-name">{member.name}</h3>
                                    <h4 className="committee-member-designation">{member.designation}</h4>
                                    {/* <p className="committee-member-bio">{member.bio}</p> */}
                                    {/* {member.contact && (
                                        <div className="committee-member-contact">
                                            <i className="fas fa-envelope"></i>
                                            <a href={`mailto:${member.contact}`}>{member.contact}</a>
                                        </div>
                                    )} */}
                                {/* </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section> */} 

            {/* ================= COMMITTEE MEMBERS SECTION ================= */}
            {/* <section className="committee-list-section" style={{ paddingTop: '0' }}>
                <div className="committee-list-container">

                    <div className="committee-list-header">
                        <h2>COMMITTEE MEMBERS</h2>
                        <div className="committee-list-divider"></div>
                    </div>

                    <div className="committee-grid">
                        {committeeMembers.map((member) => (
                            <div className="committee-card" key={member.id}>
                                <div className="committee-card-img-wrapper">
                                    <img src={member.photo} alt={member.name} className="committee-card-img" />
                                </div>
                                <div className="committee-card-content">
                                    <h3 className="committee-member-name">{member.name}</h3>
                                    <h4 className="committee-member-designation">{member.designation}</h4>
                                    {/* <p className="committee-member-bio">{member.bio}</p> */}
                                    {/* {member.contact && (
                                        <div className="committee-member-contact">
                                            <i className="fas fa-envelope"></i>
                                            <a href={`mailto:${member.contact}`}>{member.contact}</a>
                                        </div>
                                    )} */}
                                {/* </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section> */} 

            {/* ================= KANNADA BHAVANA MANAGEMENT TEAM ================= */}
            {/* <section className="committee-list-section" style={{ paddingTop: '0' }}>
                <div className="committee-list-container">

                    <div className="committee-list-header">
                        <h2>KANNADA BHAVANA MANAGEMENT TEAM</h2>
                        <div className="committee-list-divider"></div>
                    </div>

                    <div className="committee-grid">
                        {bhavanaTeam.map((member) => (
                            <div className="committee-card" key={member.id}>
                                <div className="committee-card-img-wrapper">
                                    <img src={member.photo} alt={member.name} className="committee-card-img" />
                                </div>
                                <div className="committee-card-content">
                                    <h3 className="committee-member-name">{member.name}</h3>
                                    <h4 className="committee-member-designation">{member.designation}</h4>
                                    {/* <p className="committee-member-bio">{member.bio}</p> */}
                                    {/* {member.contact && (
                                        <div className="committee-member-contact">
                                            <i className="fas fa-envelope"></i>
                                            <a href={`mailto:${member.contact}`}>{member.contact}</a>
                                        </div>
                                    )} */}
                                {/* </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section> */} 

            {/* ================= STUDENT WING ================= */}
            {/* <section className="committee-list-section" style={{ paddingTop: '0' }}>
                <div className="committee-list-container">

                    <div className="committee-list-header">
                        <h2>STUDENT WING</h2>
                        <div className="committee-list-divider"></div>
                    </div>

                    <div className="committee-grid">
                        {studentWing.map((member) => (
                            <div className="committee-card" key={member.id}>
                                <div className="committee-card-img-wrapper">
                                    <img src={member.photo} alt={member.name} className="committee-card-img" />
                                </div>
                                <div className="committee-card-content">
                                    <h3 className="committee-member-name">{member.name}</h3>
                                    <h4 className="committee-member-designation">{member.designation}</h4>
                                    {/* <p className="committee-member-bio">{member.bio}</p> */}
                                    {/* {member.contact && (
                                        <div className="committee-member-contact">
                                            <i className="fas fa-envelope"></i>
                                            <a href={`mailto:${member.contact}`}>{member.contact}</a>
                                        </div>
                                    )} */}
                                {/* </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section> */}

           
        </>
    );
};

export default Comittee;
