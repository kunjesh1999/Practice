import Axios from "axios";
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import  {useEffect} from "react";
function Home() {
    const [data,setdata]=useState()
    const [name, setname] = useState([])
    const [email, setemail] = useState([])
    const [password, setpassword] = useState()
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    // useEffect(()=>{
    //     console.log("Type of data:" , typeof data)
    // },[data])
    const getdata=()=>{
           
        Axios.get("https://65cfaadabdb50d5e5f5bb55b.mockapi.io/Add")
            .then((response) => {
                console.log(response.data)
                setdata(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }
    useEffect(()=>{
        getdata()
    },[])
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(name,
        //     email,password);
        setModal(false)
        
        // Axios.get("https://65cfaadabdb50d5e5f5bb55b.mockapi.io/Add")
        //     .then((response) => {
        //         console.log(response.data)
        //         setdata(response.data)
        //     }).catch((error) => {
        //         console.log(error)
        //     })
        Axios.post("https://65cfaadabdb50d5e5f5bb55b.mockapi.io/Add", {
            name,
            email,
            password


        })
            .then((response) => {
                // console.log(response.data)
                // setdata(response.data)
        getdata();
            }).catch((error) => {
                console.log(error)
            })
        setname("")
        setemail("")
        setpassword("")
    }




    return (
        <div>
            <Button color="danger" onClick={toggle}>
                Click Me
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <form onSubmit={handleSubmit}>
                    <ModalBody>

                        <label>Enter name</label>
                        <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
                        <br />
                        <br />
                        <label>Enter email</label>
                        <input type="text" value={email} onChange={(e) => setemail(e.target.value)} />
                        <br />
                        <br />
                        <label>Enter password</label>
                        <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" type="submit">
                            Save
                        </Button>{' '}
                        <Button color="secondary" onClick={toggle}>
                            Cancel
                        </Button>

                    </ModalFooter>
                </form>
            </Modal>
            {console.log("daa",data)}
            <table className="table table-bordered table-striped table-dark space between"> 
             <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
             </thead>
             <tbody>

            {data && data.map((item)=>(
                <tr key={item.id}>

                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>


                </tr>


            ))}
             </tbody>
            </table>
            
        </div>
    );
}



export default Home