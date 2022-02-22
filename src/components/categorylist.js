import React, { Component } from 'react'
import axios from 'axios'
import FormData from 'form-data'
export default class CategoryList extends Component {

    constructor(){  
        super();
        this.state = {
            categoryList:[]
        }
    }
    componentDidMount(){
       
        axios.get("http://localhost:5050/category/getall")
        .then((response) => {
           
            this.setState({categoryList: response.data});
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render() {
        const {categoryList} = this.state;
        return (
            <div>
                <table className='table table-bodered'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {categoryList.map((category) => {
                        return (
                            <tr key={category.id}>
                                <td>{category.name}</td>
                                <td>{category.description}</td>
                                <td><img src={ 'http://localhost:5050/'+ category.imageUrl}/></td>
                                <td>
                                <button className='btn btn-sm btn-danger'>Delete</button>
                                <button className='btn btn-sm btn-warning'>Edit </button> </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>

            </div>
        );
    }
}