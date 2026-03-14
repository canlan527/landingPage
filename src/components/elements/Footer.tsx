import Container from "../shared/Container";
import logo from '../../assets/icon.svg';
import {navItems} from "./Navbar";

export default function Footer() {
  return <footer className="relative bg-box-bg pt-28 rounded-3xl">
    <Container className="pb-8">
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <img src={logo} className="w-7 h-7" alt="EdgeWeb Logo" />
          <h2 className="text-heading-1 text-lg font-semibold">EdgeWeb</h2>
        </div>
        <ul className="flex flex-1 justify-between sm:w-full md:max-w-lg">
          {
            navItems.map((nav, key) => (
              <li key={key} className="text-heading-1 font-bold px-4 py-3 text-lg">
                <a href={nav.href}>{nav.label}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </Container>
  </footer>
}