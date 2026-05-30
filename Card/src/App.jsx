import React from 'react'
import Card from './components/Card.jsx'
import './App.css'
import ApplyForm from './components/ApplyForm.jsx';

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Karachi, Pakistan"
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hour",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "https://lh7-us.googleusercontent.com/zXpCeGylb_EqnsAz-W8WGOZRuKUDgay0CkrjURvYXi1FHIK1iCb11Lls9FAKrh49GsSm2kOZ27V7VxBU1BKdJ58pwLzEzuDlD_Oz1VMWurZjBYwiD-36iJa1WQA9BynYbjWGUnhlw1GE",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$85/hour",
      location: "Islamabad, Pakistan"
    },
    {
      brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$75/hour",
      location: "Redmond, USA"
    },
    {
      brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1967.jpg?width=672&height=454&name=ibm-logo-1967.jpg",
      companyName: "IBM",
      datePosted: "2 days ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "New York, USA"
    },
    {
      brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hour",
      location: "Austin, USA"
    },
    {
      brandLogo: "data:image/png;base64,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",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "GPU Programmer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hour",
      location: "Santa Clara, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
      companyName: "Oracle",
      datePosted: "8 days ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "RWP, Pakistan"
    }
  ];
  return (
    <div className='parent'>  
    {jobOpenings.map((elem,idx)=>{
      return <div key={idx}> <Card Logo = {elem.brandLogo} company = {elem.companyName} 
      date = {elem.datePosted}  post = {elem.post} tag1 = {elem.tag1} 
      tag2 = {elem.tag2} pay = {elem.pay} location = {elem.location}/></div>
    })}

    </div>
  )
} 

export default App