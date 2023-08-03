import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import HeaderPage from "../../components/layout/header/HeaderPage";
import FooterPage from "../../components/layout/footer/FooterPage";
import Button from "../../components/button/Button";

const TicketSingle = () => {

    const navigate = useNavigate();

    const {id} = useParams();

    const [ticket, setTicket] = useState();

    // Comportement
    useEffect(() => {

        // fetchData('url', 'get', setTickets);
        //axios.get(`http://localhost:8080/tickets/${id}`)
        axios.get(`${process.env.REACT_APP_API_URL || "http://localhost:8080"}/tickets/${id}`)
            .then(response => {
                setTicket(response.data.content);
            })
            .catch(error => {
                console.log('Erreur lors de la récupération des données:', error);
            });

    }, []);

    return (
        <div>
            <HeaderPage/>
        <table>
        <caption><h2>Ticket {id}</h2></caption>
        {ticket && <div>
            <div>{ticket.id}</div>
            <div>{ticket.description}</div>
            <div>{ticket.name}</div>
            <div>{ticket.priority}</div>
        </div>}
        </table>
            <FooterPage/>
        </div>

    )

}

export default TicketSingle;