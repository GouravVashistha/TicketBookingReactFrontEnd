import React from 'react'
import AdminNav from './AdminNav'

export default function AdminHome() {
    var ui = (
        <div>
            <AdminNav />
            <div className='app'>
                <center>
                    <h1 class='header'>Welcome Back Admin</h1>
                    <br /><br />

                </center>
            </div>

        </div>
    )
    var loggedUi = (
        <h1>You have logged out</h1>
    );
    if (localStorage.getItem('email') == null) {
        return loggedUi;
    }

    else {

        return ui;

    }

}
