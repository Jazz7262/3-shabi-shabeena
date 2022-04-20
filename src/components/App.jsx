import React from "react";
import DeveloperInfo from "./DeveloperInfo";
import Navbar from "./Navbar";
import PraisingContent from "./PraisingContent";
import Slide from "./Slide";
import BabyInfo from "./ImaamInfo";
import InvitationQuote from "./InvitationQuote";
import Timeline from "./Timeline";
import DevQuote from "./DevQuote";
import CountDown from "./CountDown";
import InviteNote from "./InviteNote";
import Audio from "./Audio";
import CustomModal from "./CustomModal";
import Note from "./Note";

function App() {
    return (
        <>
            <Navbar />
            <PraisingContent />
            <Slide />
            <BabyInfo />
            <InvitationQuote />
            <Timeline />
            <Note />
            <DevQuote />
            <CountDown />
            <InviteNote />
            <Audio />
            <DeveloperInfo />
            <CustomModal />
        </>
    );
}

export default App;
