import axios from 'axios';
import {Employee} from '../models/Employee';

const API_URL= "http://localhost:3001/employees";

export const getEmployees=() => 
    axios.get<Employee[]>(API_URL);

export const getEmployeeById = (id:string) =>
    axios.get<Employee>(`${API_URL}/${id}`).then(res=> res.data);

export const createEmployee =async (data:Omit<Employee,"id">): Promise<Employee> =>
    axios.post<Employee>(API_URL,data).then(res => res.data);

export const updateEmployee = (id:string,data:Omit<Employee,"id">) => 
    axios.put(`${API_URL}/${id}`, data).then(res => res.data);

export const deleteEmployee = (id:string): Promise<void> => 
    axios.delete(`${API_URL}/${id}`).then(()=>{});