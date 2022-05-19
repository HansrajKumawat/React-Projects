import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    // <!-- Navbar Start -->
    <div class="container-fluid bg-light position-relative shadow">
        <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
            <a href="" class="navbar-brand font-weight-bold text-secondary" style={{fontSize: "50px"}}>
                <i class="flaticon-043-teddy-bear"></i>
                <span class="text-primary">KidKinder</span>
            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div class="navbar-nav font-weight-bold mx-auto py-0">
                    <Link to="/">
                    <a  class="nav-item nav-link active">Home</a>
                    </Link>
                    <Link to="/about">
                    <a class="nav-item nav-link">About</a>
                    </Link>
                    <Link to="/class">            
                    <a href="class.html" class="nav-item nav-link">Classes</a>
                    </Link> 
                    <Link to="/teachers">
                    <a href="team.html" class="nav-item nav-link">Teachers</a>
                    </Link>
                    <Link to="/gallery">
                    <a href="gallery.html" class="nav-item nav-link">Gallery</a>
                    </Link>
                    
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                        <div class="dropdown-menu rounded-0 m-0">
                        <Link to="/pagess">
                            <a href="blog.html" class="dropdown-item">Blog Grid</a>
                            </Link>
                            <Link to="/pages">
                            <a href="single.html" class="dropdown-item">Blog Detail</a>
                            </Link>
                        </div>
                    </div>
                  <Link to="/contact">
                    <a href="contact.html" class="nav-item nav-link">Contact</a>
                    </Link>
                </div>
                <a href="" class="btn btn-primary px-4">Join Class</a>
            </div>
        </nav>
    </div>
    // <!-- Navbar End -->
  )
}
