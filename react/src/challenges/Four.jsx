import React, { useState, useEffect } from "react";

// Den här komponenten har ett par stycken problem och
// saknar några delar. Mer exakt: 5 stycken.
// Det är din uppgift att identifiera och lösa dessa.
//
// Men komponentens syfte är att hämta en användare
// från dummyjson-apiet och skriva ut dennes namn.

/*
1. Importera useState,
2. Kalla på getUser,
3. Returnera data i getData,
4. Importera/använd useEffect (för att kalla på getUser 1 gång när komponenten renderas),
5. Använd await i getUser då det är en async function. 

När jag testar koden så säger den att den här komponenten failar. Men den renderar ut "My name is: Terry".
Den renderar ut dock först "No user found" så vet inte om det är drf den failar.
*/

const Four = () => {
  const [user, setUser] = useState(null);

  const getData = async (url) => {
    const response = await fetch(url);
    const data = response.json();
    return data;
  };

  async function getUser() {
    const user = await getData("https://dummyjson.com/users/1");
    setUser(user);
  }

  useEffect(() => {
    getUser();
  }, []);

  // Rör inte koden under denna kommentaren
  if (!user) {
    return <div data-testid="four-name">No user found</div>;
  }

  return <div data-testid="four-name">My name is: {user.firstName}</div>;
};

export default Four;
