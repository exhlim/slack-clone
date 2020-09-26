import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from '../../firebase.js'
function Sidebar() {
    const [channels, setChannels] = useState([])
    // ----console.log(db.collection('rooms').onSnapshot)
    // Run this code when the sidebar component loads. This will be runned once.
    useEffect(()=> {    
        // Acces the db AND go into the collection called 'rooms' AND take a snapshot of the database AND when the database changes it will give us a new Snap shot
        // So whenever something in the database changes, this useEffect function will be fired off
        // On snapshot and for each snapshot
        db.collection('rooms').onSnapshot(snapshot=> (
            // ---console.log(snapshot)
            // Take the snapshot and for the snapshot access the DOCUMENT in the database. Collection > Document > Field
            setChannels(
                // Now map the document(each Channel). Here we are accessing the channel
                snapshot.docs.map()
            )
        )
    }, [])
    // [] here is the dependencies, so when its an empty array, it will only run once when loaded
    // if you changed it to [name, age], it will run everytime when the name variable changes

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>General Assembly</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Eugene Lim
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions"/>
            <SidebarOption Icon={DraftsIcon} title="Saved items"/>
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browsers"/>
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups"/>
            <SidebarOption Icon={AppsIcon} title="Apps"/>
            <SidebarOption Icon={FileCopyIcon} title="File Browser"/>
            <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
            <hr />
            <SidebarOption Icon={AddIcon} title="Add Channel"/>
            {/* Connect to the DB and add in all the channels based on the firebase */}
        </div>
    )
}

export default Sidebar
