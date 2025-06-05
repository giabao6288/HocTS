import axios from 'axios';
import {Employee} from '../models/Employee';

const API_URL= "http://localhost:3001/employees";

export const getEmployees=() => axios.get<Employee[]>(API_URL);
export const getEmployeeById = (id:number) =>axios.get<Employee>(`${API_URL}/${id}`);
export const createEmployee =(data:Omit<Employee, "id">) => axios.post(API_URL,data);
export const updateEmployee = (id:number,data:Omit<Employee,"id">) => axios.put(`${API_URL}/${id}`,data);
export const deleteEmployee = (id:number) => axios.delete(`${API_URL}/${id}`);