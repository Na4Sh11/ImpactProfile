import { useState } from "react";
import "./search.css";
// import { FaSearch } from "react-icons/fa";

function Search() {
  const [results, setResults] = useState([]);

  function handleChange(event) {
    const impactors = [
      { name: "Sindhu Subramanian", link: "sindhu.com" },
      { name: "Janani Rajaganapathi", link: "janani.com" },
      { name: "Priyadharshan Senguttuvan", link: "priyadharshan.com" },
      { name: "Dhanus Subramaniyan", link: "dhanus.com" },
      { name: "Nivedhashalini Velayutham", link: "nivedhashalini.com" },
      { name: "Kannan Annamalai", link: "kannan.com" },
      { name: "Harshan Baskar", link: "harshan.com" },
      { name: "Brijesh Manikandan", link: "brijesh.com" },
      { name: "Shruti Balaji", link: "shruti.com" },
      { name: "Vijayabharathi Sundarraj", link: "vijayabarathi.com" },
      { name: "Ashwath Kumaran", link: "ashwath.com" },
      { name: "Rithika Sasikumar", link: "rithika.com" },
      { name: "Janaki Raman", link: "janaki.com" },
      { name: "Mohammad Faazil", link: "mohammad.com" },
      { name: "Prabhath Remella", link: "prabhath.com" },
      { name: "Raguraman Ponnusamy", link: "raguraman.com" },
      { name: "Meenaksi Venkatachalam", link: "meenaksi.com" },
      { name: "Aarathy Sundaresan", link: "aarathy.com" },
      { name: "Laksha Gayathri", link: "laksha.com" },
      { name: "Dharmabala Paramanantham", link: "dharmabala.com" },
      { name: "Harikaran Malayaperumal", link: "harikaran.com" },
    ];
    var userinput = event.target.value.toLowerCase();
    const results = impactors.filter((impactor) => {
      return (
        userinput &&
        (impactor.name.split(" ")[0].toLowerCase().startsWith(userinput) ||
          impactor.name.split(" ")[1].toLowerCase().startsWith(userinput))
      );
    });
    //console.log(results);
    setResults(results);
  }

  function enterKeyPressed(event) {
    if (event.keyCode === 13) {
      alert("You have clicked " + results[0].link);
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="App">
      <div className="searchbar">
        {/* <FaSearch id="search-icon" /> */}
        <input
          type="text"
          placeholder="Impactor's Name..."
          onChange={handleChange}
          setResults={setResults}
          onKeyUp={enterKeyPressed}
        />
      </div>
      <div className="suggestlist">
        {results.map((result, id) => {
          return (
            <label
              className="searchresult"
              key={id}
              onClick={(e) => alert("You clicked on " + result.link)}
            >
              {result.name}
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
