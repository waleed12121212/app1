import style from './Navbar.module.css'
export default function Navbar() {
  return (
    <>
            <nav>
                <a href="#" className={`${style.aa}`}>Home</a>
                <a href="#" className='bg-danger'>About</a>
                <a href="#">Contact</a>
            </nav>
    </>
  )
}
