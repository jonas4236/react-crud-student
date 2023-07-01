import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import StudentTableRow from "./StudentTableRow";

export default class StudentList extends Component {
   constructor(props) {
      super(props);

      this.state = {
         students: [],
      };
   }

   componentDidMount() {
      axios
         .get("http://localhost:4000/students")
         .then((res) => {
            this.setState({
               students: res.data,
            });
         })
         .catch((error) => {
            console.log(error);
         });
   }

   render() {
      return (
         <div className="table-wrapper mt-5">
            <h1 className="mb-3">Student List</h1>
            <Table striped bordered hover>
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Rollno</th>
                     <th>Option</th>
                  </tr>
               </thead>
               <tbody>
                  {this.state.students.map((res, i) => (
                     <StudentTableRow obj={res} key={i} />
                  ))}
               </tbody>
            </Table>
         </div>
      );
   }
}
