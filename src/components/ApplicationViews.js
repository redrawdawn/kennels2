import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "../Home.js"
import { AnimalList } from "./animal/AnimalList.js"
import { CustomerList } from "./customer/CustomerList.js"
import { EmployeeList } from "./employee/EmployeeList.js"
import { LocationList } from "./location/LocationList.js"

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                //* Render the location list when http://localhost:3000/ */
                <Route path="/" element={<Home />} />

                //* Render the animal list when http://localhost:3000/animals */
                <Route path="/animals" element={<AnimalList />} />
                <Route path="/customers" element={<CustomerList />} />
                <Route path="/employees" element={<EmployeeList />} />
                <Route path="/locations" element={<LocationList />} />
            </Routes>
        </>
    )
}