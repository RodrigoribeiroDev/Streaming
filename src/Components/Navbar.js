import React from 'react'
import './Navbar.css'
import { FaTrophy } from "react-icons/fa6";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaAward } from "react-icons/fa6";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { TbMovie } from "react-icons/tb";
import { SiThemoviedatabase } from "react-icons/si";
import { BiSolidMoviePlay } from "react-icons/bi";
import Cabecalho from './Cabecalho';
import { IoSearchCircle } from "react-icons/io5";


const Navbar = () => {
  return (
    <div className='Nav'>
        <div>
            <input 
            className='input-nav'
            type='text'
            placeholder='Procurar:' />
            <IoSearchCircle size={30} className='icon-search'/>

            </div>
            <div className='menu'>
                <ul>
                    <span>Indicados ao oscar <FaTrophy size={30} />
                    </span> <br />
                    <span>No cinema <BiSolidCameraMovie size={30} />
                    </span><br />
                    <span>Top 10 <FaAward size={30}/>
                    </span><br />
                    <span>2024 <IoCalendarNumberOutline size={30}/>
                    </span><br />
                    <span>Séries <TbMovie size={30}/>
                    </span><br />
                    <span>Filmes <SiThemoviedatabase size={30}/>
                    </span><br />
                    <span>Por gênero <BiSolidMoviePlay size={30}/>
                    </span><br />
                </ul>
            </div>
          <Cabecalho />
    </div>
  )
}

export default Navbar