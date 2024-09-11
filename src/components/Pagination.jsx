import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {

    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    disabled={page === currentPage}
                >
                    {page}
                </button>
            ))}
        </div>
    );
}


const Search = () => {
    const [users, setUsers] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchUsers(currentPage);
    }, [currentPage]);

    const fetchUsers = async (page) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/items?page=${page}&limit=10`);
            setUsers(response.data.users);
            setTotalPages(response.data.totalPages);
        } catch (err) {
            console.log(err);
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => {
                    <li key={user._id}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </li>
                })}
            </ul>
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    )
};

export default Search;