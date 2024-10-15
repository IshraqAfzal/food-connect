import React from "react";

const resources = [
    {
        name : "Dragon Centre Vending Machines",
        type : "vending machine",
        date : "",
        time : "",
        food : [
            "beef and potato",
            "chicken and rice"
        ],
        ngo : [
            "food angel",
        ],
        address : "Dragon Centre 8/F",
        district : "Sham Shui Po"
    },
    {
        name : "Lai Sun Commercial Centre Meal Distribution",
        type : "Meal Distribution",
        date : "22/10/2024",
        time : "7 pm",
        food : [
            "noodles",
            "chicken and rice"
        ],
        ngo : [
            "food angel",
        ],
        address : "Lai Sun Commercial Centre",
        district : "Sham Shui Po"
    },
]

function ResourceItem(props){
    return <li>
        <div>{props.name}</div>
        <div>{props.address}</div>
        <div>{props.district}</div>
    </li>
}

function ResourceList(props){

}

function UserResources(){
    <>
    <div id="button-container">
        <button>Find Food Resources For You</button>
        <button>Filter By</button>
    </div>
    <div id="resource-container">
        <ul>
            <
        </ul>
    </div>
    </>
}

function 