import React from "react"
import Navbarpage from "./Navbarpage"
import WorkStrategy from "./WorkStrategy"
import RoadmapPage from "./RoadmapPage"
import TeamPage from "./TeamPage"
import SubscriptionPage from "./SubscriptionPage"
import Footer from "./Footer"



function Container() {
    return (
        <>
            <Navbarpage />
            <WorkStrategy />
            <RoadmapPage />
            <TeamPage />
            <SubscriptionPage />
            <Footer />
        </>
        

    )
}

export default Container