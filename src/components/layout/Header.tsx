import type { FC, FormEvent } from "react";
import { Bell, ChevronDown, Search } from "lucide-react";
import avatar from "../../assets/avatar.svg";
import "../../styles/components/header.scss";

const Header: FC = () => {
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <header className="header">
      <div className="header__search">
        <form className="header__search-form" onSubmit={handleSearch}>
          <input
            type="search"
            className="header__search-input"
            placeholder="Search for anything"
          />
          <button
            type="submit"
            className="header__search-button"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
        </form>
      </div>

      <div className="header__meta">
        <a href="#" className="header__link">
          Docs
        </a>
        <button
          type="button"
          className="header__icon-button"
          aria-label="Notifications"
        >
          <Bell size={20} />
        </button>
        <button type="button" className="header__profile">
          <img className="header__avatar" src={avatar} alt="Adedeji" />
          <span className="header__profile-name">Adedeji</span>
          <span className="header__chevron">
            <ChevronDown size={16} />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
