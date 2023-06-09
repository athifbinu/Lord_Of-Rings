import React, { useEffect, useState } from "react";
import "../Styles/Home.css";
import axios from "axios";
import { ENV } from "../utlits/Constants";

import AutoCard from "./AutoCard";

import { Link } from "react-router-dom";

const Home = () => {
  const [characters, setCharacters] = useState([]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSeachName] = useState("");
  const [filterarray, setFilterArray] = useState([]);
  const [gender, setGender] = useState(null);
  const [sort, setSort] = useState("asc");

  const [selectedRaces, setSelectedRaces] = useState([]);

  useEffect(() => {
    fetchCharecters();
  }, [limit, page]);

  useEffect(() => {
    let sortedcharecteres = characters.sort((a, b) => {
      if (sort === "asc") {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      } else if (sort === "dsc") {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      }
    });
    setCharacters(sortedcharecteres);
  }, [sort]);
  const fetchCharecters = async () => {
    axios
      .get(`${ENV.URL}/character`, {
        headers: {
          Authorization: `Bearer ${ENV.TOKEN}`,
        },
        params: {
          limit: limit,
          page: page,
          gender: gender !== "any" ? gender : null,
        },
      })
      .then((res) => {
        const data = res.data.docs;

        setCharacters(data);
        setFilterArray(data);
      })
      .catch((err) => {console.log(err)});
  };

  console.log();

  const handleSearch = (e) => {
    const SerachTerm = e.target.value;
    setSeachName(SerachTerm);
    const filtered = characters.filter((item) =>
      item.name.toLowerCase().includes(SerachTerm.toLowerCase())
    );
    setFilterArray(filtered);
  };

  const onpressSubmitbtn = () => {
    fetchCharecters();
  };

  const handleRaceSelect = (value) => {
    setSelectedRaces(value.map((option) => option.title));
    setFilterArray(
      characters.filter((character) =>
        value.map((option) => option.title).includes(character.race)
      ).length !== 0
        ? characters.filter((character) =>
            value.map((option) => option.title).includes(character.race)
          )
        : characters
    );
  };

  const renderCharecterItem = (item, index) => {
    return (
      <tbody>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td>{item.race}</td>
        <td>{item.gender}</td>
        <Link className="th-link" to={`/detailes/${item._id}`}>
          <td>
            Details <span>{`>`}</span>
          </td>
        </Link>
      </tbody>
    );
  };

  return (
    <div className="container">
      <div className="search-form">
        <div className="input-line">
          <label>Search</label>
          <input
            value={search}
            onChange={(e) => handleSearch(e)}
            type="text"
            className="input-box"
            placeholder="by name"
          />

          <div className="dropdown-container">
            <label>Sort By</label>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
            >
              <option value="asc">asc</option>
              <option value="dsc">dsc</option>
            </select>
          </div>
        </div>

        <div className="input-line">
          <AutoCard handle={(v) => handleRaceSelect(v)} />

          <div className="dropdown-container">
            <label>Gender</label>
            <select
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <option value="any">any</option>
              <option value="Male">male</option>
              <option value="Female">female</option>
            </select>
          </div>

          <button onClick={onpressSubmitbtn} className="search-btn">
            Submit
          </button>
        </div>
      </div>

      <hr />

      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Race</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>

        {filterarray.map((item, index) => {
          return renderCharecterItem(item, index);
        })}
      </table>

      <hr />
      <div className="footer-section">
        <div className="footer-btn" style={{ display: "flex" }}>
          <button
            onClick={() => setPage(page !== 1 ? page - 1 : 1)}
          >{`<`}</button>
          <div>{page}</div>
          <button onClick={() => setPage(page + 1)}>{`>`}</button>
        </div>

        <div className="limit-dropdown">
          <label>Limit</label>
          <select
            value={limit}
            onChange={(event) => setLimit(event.target.value)}
          >
            <option value="10">10</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Home;
