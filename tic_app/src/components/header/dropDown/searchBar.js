import React from "react";

const SearchBar = () => {
  return (
    <div className="search">
      <div className="container2">
        <table className="elementsContainer">
          <tbody>
            <tr>
              <td>
                <input type="text" placeholder="search" className="search" />
              </td>
              <td>
                <a className="material-icons" href="/#">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchBar;
