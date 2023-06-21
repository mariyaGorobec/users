import React from "react";
import "./index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";

function App() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValuse, setSearchValue] = React.useState("");
  const [invites, setInvites] = React.useState([]);
  const [success, setSuccess] = React.useState(false);

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

  const onClickSendInvites = () =>{
    setSuccess(!success);
  }

  const onClickInvite = (id)=>{
    if(invites.includes(id)){
      setInvites(prev=>prev.filter(_id=>_id!==id));
    }
    else{
      setInvites(prev=>[...prev,id]);
    }
  }

  return (
    <div className="App">
      {success ? <Success count = {invites.length} setInvites = {setInvites} onClickSendInvites = {onClickSendInvites}/> : <Users
        invites={invites}
        onClickInvite= {onClickInvite}
        onSearchValue={onSearchValue}
        items={users}
        searchValuse={searchValuse}
        isLoading={isLoading}
        onClickSendInvites={onClickSendInvites}
      />}
    </div>
  );
}

export default App;
