import Link from 'next/link';
import Logo from '../public/residence_store.gif'
import Image from 'next/image'
import Line from "../components/Line";




// Top navbar
export default function Navbar() {
  const  user = null;
  const username = null;


  return (
    <nav className="navbar">
      <div className="line"></div>
      <ul>
        <li>
          <Link href="/">
            {/* <button className="btn-logo">store</button>
             */}
            <Image className='logo' src={Logo} />
          </Link>
        </li>

        {/* user is signed-in and has username */}
        {username && (
          <>
            <li className="push-left">
              <button onClick={signOut}>Logout</button>
            </li>
            <li>
              <Link href="/admin">
                <button className="btn-blue">Write Post</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL || '/hacker.png'} />
              </Link>
            </li>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!username && (
          <li>
            <Link href="/enter">
              <button className="btn-red">Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}