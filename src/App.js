import React from "react";
import "./index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValuse, setSearchValue] = React.useState("");

  React.useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => setUsers(json.data))
      .catch((err) => {
        console.warn(err);
        alert("An error occurred while getting users.");
      })
      .finally(() => setIsLoading(false));
  }, []);

  const onSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="App">
      <Users
        onSearchValue={onSearchValue}
        items={users}
        searchValuse={searchValuse}
        isLoading={isLoading}
      />
      {/* <Success /> */}
    </div>
  );
}

export default App;
