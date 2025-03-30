import "./AdminPage.css"

import React, { useEffect, useState } from 'react'
//import { useNavigate } from 'react-router-dom';
import {useUser} from "@clerk/clerk-react"
import { addProduct } from "../services/api"
import { Link } from 'react-router-dom';
import { fetchAllKeychains } from "../services/api";
import NavbarComponent from "../components/NavbarComponent"
import FooterComponent from "../components/FooterComponent"
import AddFormComponent from "../components/forms/AddFormComponent"
import SearchFormComponent from "../components/forms/SearchFormComponent";


const AdminPage = () => {

    const [loading, setLoading] = useState(true)
    const { isSignedIn, user } = useUser()
    const [isAdmin, setIsAdmin] = useState(false)
    const [keyChains, setKeyChains] = useState()
    const [search, setSearch] = useState("")
    const [filteredData, setFilteredData] = useState([])
    const [response, setResponse] = useState("")
    const [newProduct, setNewProduct] = useState({
      name : "",
      price : 0,
      slug : "",
      image : "",
      reviews : []
    })

    const HandleChange = (e) =>{
      setNewProduct( prevData => ({...prevData, [e.target.name] : e.target.value}))
    }

    const HandleSearchChange = (e) =>{
      const value = e.target.value
      setSearch(value)

      if(value.trim() === ""){
        setFilteredData([])
      } else{
        setFilteredData(
          keyChains.filter((KeyChain) =>{
            return KeyChain.name.toLowerCase().includes(value.toLowerCase())
          })
        )
      }

    }

    const submitForm = async(e) =>{
      e.preventDefault()
      try{
        const res = await addProduct(newProduct)
        console.log(res);
        setResponse(res)
        
        setTimeout(() => setResponse(""), 2000)
      } catch(err){
        console.log(err);
      }
    }

    const checkRole = (role) => {
      if(isSignedIn){
        return user?.publicMetadata?.role === role
      }
    }

    useEffect(() =>{
      if(!user) return

      const admin = checkRole('admin')
      
      if(!admin){
        window.location = "/"
        return
      }

      setIsAdmin(admin)
      setLoading(false)
    }, [user, isSignedIn])

    useEffect(() =>{
      const fetchData = async() =>{
        try{
          const result = await fetchAllKeychains()   
          setKeyChains(result)
        }catch(err){
          console.log(err);
        }finally{
          setLoading(false)
        }
      }

      fetchData()
    }, [])

    if(loading) return(<p>loading page...</p>)
    if(!isAdmin) return(<p>unathorized access...</p>)
    
    return (
      <div className="admin-wrapper">
        <NavbarComponent/>
        <main>
          <div className="side-bar">
            <Link id="link">Add product</Link>
            <Link id="link">Search product</Link>
          </div>
          <div className="form-cont">
            <div className="name-link-cont">
              <h1>Admin Page</h1>
            </div>
            <AddFormComponent newProduct={newProduct} HandleChange={HandleChange} submitForm={submitForm}/>
            <p id="res-message">{response}</p>
          </div>
          <SearchFormComponent search={search} keyChains={filteredData} handleSearchChange={HandleSearchChange}/>
        </main>
        <FooterComponent/>
      </div>
    )
}

export default AdminPage