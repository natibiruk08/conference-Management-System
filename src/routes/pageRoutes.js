import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// UI Components
import Home from "../home/home";
import NavBar from "../home/navBar";
import Footer from "../home/footer";
import AboutUs from "../aboutUs/aboutUs";
import ContactUs from "../contactUs/contactUs";
import AdminHome from "../admin/home/adminHome"
import Register from "../register/register";
import ViewWorkShop from "../workShop/viewWorkShop";
import ViewApprovedWorkShops from "../workShop/viewApprovedWorkShops";
import CreateWorkShop from "../workShop/createWorkShop";
import AttendeeWorkshopRegistration from "../attendee/workshopRegistration/attendeeWorkshopRegistration";
import ViewAttendeeRegistration from "../attendee/workshopRegistration/viewAttendeeRegistration";
import ViewWorkShops from "../admin/workShop/viewWorkShops";
import ViewAttendee from "../admin/attendee/viewAttendee";
import Researcher from "../researcher/researcher";
import Reviewer from "../reviewer/reviewer";
import Editor from "../editor/editor";
import ViewResearchPaper from "../researcher/viewResearchPaper";
import View from "../editor/view";
import CreateConference from "../editor/addConference";
import ManageConference from "../editor/manageConference";
import UpdateConference from "../editor/updateConference";
import CreateSpeaker from "../editor/addSpeaker";
import ManageSpeakers from "../editor/manageSpeakers";
import UpdateSpeaker from "../editor/updateSpeaker";
import AdminConference from "../editor/admin/adminConference";
import CreateTopic from "../editor/createTitle";
import GetAllTopics from "../editor/manageTopics";
import UpdateTopic from "../editor/updateTopic";
import SingleTopic from "../editor/getOneTopic";
import ShowPdf from "../workShop/downloadTemplate/showPdf";
import DownloadPage from "../workShop/downloadTemplate/downloadPage";
import SignIn from "../register/SignIn";
import ReviewResearchPaper from '../reviewer/viewResearchPaper';
import ReviewWorkShop from '../reviewer/viewWorkShops';
import UserDetails from '../admin/user/viewUser';

function PageRoutes() {
    const user = window.localStorage.User ? JSON.parse(window.localStorage.User) : null;
    return (
        <div>
            <Router>
                <NavBar />
                <section className="content">
                    <Switch>
                        <Route path="/reviewer" component={Reviewer} />
                        <Route path="/review-research-paper" component={ReviewResearchPaper} />
                        <Route path="/review-Conference" component={ReviewWorkShop} />
                        <Route path="/researcher" component={Researcher} />

                        <Route path="/editor" component={Editor} />
                        {< Route path="/admin/attendee-Conference" component={ViewAttendee} />}
                        <Route path="/admin/Conference" component={ViewWorkShops} />
                        {user && user.type === 'Admin' && <Route path="/admin" component={AdminHome} />}
                        <Route path="/Conference-attendee/registration" component={AttendeeWorkshopRegistration} />
                        <Route path="/Conference-attendee" component={ViewAttendeeRegistration} />
                        <Route path="/Conference/registration" component={CreateWorkShop} />
                        <Route path="/Conference/my" component={ViewWorkShop} />
                        <Route path="/Conference-template-download" component={DownloadPage} />
                        <Route path="/Conference-template" component={ShowPdf} />
                        <Route path="/Conferences" component={ViewApprovedWorkShops} />
                        <Route path="/registration" component={Register} />
                        <Route path="/signin" component={SignIn} />
                        <Route path="/contact-us" component={ContactUs} />
                        <Route path="/about-us" component={AboutUs} />
                        <Route path="/" component={Home} exact />
                        <Route path="/view" component={View} />
                        <Route path="/views" component={View} />
                        <Route path="/create-conference" component={CreateConference} />
                        <Route path="/manage-conference" component={ManageConference} />
                        <Route path="/manage-conferences" component={ManageConference} />
                        <Route path="/conference/update/:conferenceId" component={UpdateConference} />
                        <Route path="/create-speaker" component={CreateSpeaker} />
                        <Route path="/manage-speaker" component={ManageSpeakers} />
                        <Route path="/manage-speakers" component={ManageSpeakers} />
                        <Route path="/speaker/update/:speakerId" component={UpdateSpeaker} />
                        <Route path="/admin-editor" component={AdminConference} />
                        <Route path="/create-topic" component={CreateTopic} />
                        <Route path="/manage-topics" component={GetAllTopics} />
                        <Route path="/manage-topic" component={GetAllTopics} />
                        <Route path="/user-details" component={UserDetails} />
                        <Route path="/post/update/:slug" component={UpdateTopic} />
                        <Route path="/post/:slug" exact component={SingleTopic} />
                    </Switch>
                </section>
                <Footer />
            </Router>
        </div>
    );
}

export default PageRoutes;

