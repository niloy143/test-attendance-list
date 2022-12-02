import { Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { SpinnerCircularSplit } from 'spinners-react';
import logo from '../assets/logo.png';

const AttendanceList = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [employees, setEmployees] = useState(null);

    useEffect(() => {
        try {
            const tokens = localStorage.getItem('user-tokens');
            const accessToken = tokens && JSON.parse(tokens).access_token;

            if (accessToken) {
                fetch(`https://test.nexisltd.com/test`, {
                    headers: {
                        authorization: `Bearer ${accessToken}`
                    }
                })
                    .then(res => res.json())
                    .then(data => setEmployees(data))
                    .catch(() => setError(true))
                    .finally(() => setLoading(false))
            }
            else {
                setLoading(false);
                navigate('/user/login');
            }
        }
        catch (err) {
            navigate('/user/login');
            setLoading(false);
        }
    }, [navigate])

    return (
        <div className='max-w-7xl mx-auto sm:my-16 my-5'>
            <img className='pl-5 w-[160px] sm:w-auto' src={logo} alt="" />
            <h2 className='bg-[#1678CB] w-11/12 sm:max-w-lg mx-auto mt-5 mb-10 rounded-md text-white text-center font-semibold p-3 text-2xl sm:text-4xl'>Attendance Information</h2>
            <div className='max-w-4xl px-3 mx-auto'>
                {
                    loading ? <div className='flex justify-center my-12'>
                        <SpinnerCircularSplit size={50} thickness={120} speed={180} color="#1678CB" secondaryColor="rgba(0, 0, 0, 0.15)" />
                    </div> : error ? <h2 className='text-xl font-semibold my-5 text-center text-gray-500'>Something went wrong!</h2> :
                        employees.error ? <Navigate to="/user/login" /> :
                            <div className='grid gap-5'>
                                {
                                    Object.keys(employees).map(id => employees[id]).map(({ id, name, position, attendance }) => <div key={id}>
                                        <div className='text-center font-semibold py-5'>
                                            <h2 className='text-2xl text-gray-700'>{name}</h2>
                                            <h4 className='text-gray-500'>{position}</h4>
                                        </div>
                                        <Table>
                                            <Table.Head>
                                                <Table.HeadCell> Date </Table.HeadCell>
                                                <Table.HeadCell> Times </Table.HeadCell>
                                                <Table.HeadCell> Status </Table.HeadCell>
                                            </Table.Head>
                                            <Table.Body className="divide-y">
                                                {
                                                    Object.keys(attendance).map((date, i) => <Table.Row className="bg-white" key={i}>
                                                        <Table.Cell> {date} </Table.Cell>
                                                        <Table.Cell className="whitespace-nowrap">
                                                            <span className='inline-grid sm:grid-cols-4 gap-x-5 gap-y-3'>
                                                                {
                                                                    attendance[date].times.map((time, i) => <span key={i}>{time}</span>)
                                                                }
                                                            </span>
                                                        </Table.Cell>
                                                        <Table.Cell> {attendance[date].status.toUpperCase()} </Table.Cell>
                                                    </Table.Row>)
                                                }
                                            </Table.Body>
                                        </Table>
                                    </div>)
                                }
                            </div>
                }
            </div>
        </div>
    );
};

export default AttendanceList;