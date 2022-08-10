import React from "react";
import NssHeader from "./nssHeader";
import { Banner } from "./banner";
import { NssLayout } from "./layout";
import MainContent from "./mainContent";
import SocialContainer from "./socialContainer";
import Footer from "./footer";

function App() {
    return (<div>
        <NssLayout>
            <NssHeader />
            <Banner />
            <MainContent />
            <SocialContainer />
            <Footer />
        </NssLayout>
    </div>)
}

export default App