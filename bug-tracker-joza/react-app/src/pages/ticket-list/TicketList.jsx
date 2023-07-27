import React, {useEffect, useState} from "react";
import axios from "axios";
import HeaderTable from "../../components/table/header/Header";
import BodyTable from "../../components/table/body/Body";
import HeaderHomePage from "../../components/layout/header-home/HeaderHome";

const TicketList = () => {

    const [tickets, setTickets] = useState([]);

    // Comportement
    useEffect(() => {

        // fetchData('url', 'get', setTickets);
        axios.get(`${process.env.REACT_APP_API_URL || "http://localhost:8080"}/tickets/all`)
            //axios.get('http://localhost:8080/tickets/all')
            .then(response => {
                setTickets(response.data);
            })
            .catch(error => {
                console.log('Erreur lors de la récupération des données:', error);
            });

    }, []);

    return (
        <div>
            <HeaderHomePage/>
            <table>

                <caption><h2>All tickets</h2></caption>
                <HeaderTable/>
                <BodyTable data={tickets}/>

            </table>
        </div>
    );
}

export default TicketList;