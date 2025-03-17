import NavBarStart from "./NavBarStart";
import NavBarCenter from "./NavBarCenter";
import NavBarEnd from "./NavBarEnd";

export default function Header() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <NavBarStart />
            <NavBarCenter />
            <NavBarEnd />
        </div>
    )
}