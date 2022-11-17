import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function CountryDetails() {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxheight: '90vh', overflow: 'scroll' }}
        >
          <div className="list-group">
            <Link
              className="list-group-item list-group-item-action"
              href="/ABW"
            >
              🇦🇼 Aruba
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              href="/AFG"
            >
              🇦🇫 Afghanistan
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              href="/AGO"
            >
              🇦🇴 Angola
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              href="/AIA"
            >
              🇦🇮 Anguilla
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              href="/ALA"
            >
              🇦🇽 Åland Islands
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              href="/ALB"
            >
              🇦🇱 Albania
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              href="/AND"
            >
              🇦🇩 Andorra
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              href="/ARE"
            >
              🇦🇪 United Arab Emirates
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              href="/ARG"
            >
              🇦🇷 Argentina
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              href="/ARM"
            >
              🇦🇲 Armenia
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              href="/ASM"
            >
              🇦🇸 American Samoa
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              href="/FLK"
            >
              🇫🇰 Falkland Islands
            </Link>
            <Link
              className="list-group-item list-group-item-action active"
              href="/FRA"
            >
              🇫🇷 France
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              href="/ZWE"
            >
              🇿🇼 Zimbabwe
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              href="/ZWE"
            >
              🇻🇳 Vietnam
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              href="/ZWE"
            >
              🇰🇮 Kiribati
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
