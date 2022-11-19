import React, { useEffect, useState } from "react";
import { Container, Row } from "shards-react";
import Sidebar from "../Components/messages/Sidebar";
import Chat from "../Components/messages/Chat";
import PageTitle from "../Components/common/PageTitle";
import "../Components/messages/Messages.css";
import Pusher from 'pusher-js';
import axios from "../axios";
import { Route, BrowserRouter as Routes, Switch } from "react-router-dom";


const Messages = () => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync')
      .then(response => {
        setMessages(response.data);
      })
  }, [])


  useEffect(() => {
    const pusher = new Pusher('b985966bbe3d82cec18d', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);

  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="My Patients" subtitle="Threads" className="text-sm-left" />
      </Row>

      {/* Chat UI */}
      <div className="app">
        <div className="app__body">
            <Routes>
              <Route path="/messages/:patientId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Routes>

          {/* <Router>
            <Sidebar />
            <Switch>
              <Route path="/messages/:patientId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router> */}
        </div>
      </div>


    </Container>
  )
};

export default Messages;
