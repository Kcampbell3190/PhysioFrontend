import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const AuthButton = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`


function SubmitButton() {

  const navigate = useNavigate()

  return <AuthButton onClick={()=> navigate('/DashBoard')}>Submit</AuthButton>
}




export default SubmitButton