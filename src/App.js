import React, { Fragment } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainContentWrapper from "./components/wrapper/MainContentWrapper";
import MemoryCardWrapper from "./components/wrapper/MemoryCardWrapper";

const cards = [
  {
    id: 1,
    name: 'Card one'
  },
  {
    id: 2,
    name: 'Card two'
  },
  {
    id: 3,
    name: 'Card three'
  },
  {
    id: 4,
    name: 'Card four'
  },
  {
    id: 5,
    name: 'Card five'
  },
  {
    id: 6,
    name: 'Card six'
  },
  {
    id: 7,
    name: 'Card seven'
  },
  {
    id: 8,
    name: 'Card eight'
  },
  {
    id: 9,
    name: 'Card nine'
  },
  {
    id: 10,
    name: 'Card ten'
  },
  {
    id: 11,
    name: 'Card eleven'
  },
  {
    id: 12,
    name: 'Card twelve'
  },
];

const selectedCards = [
 
];

function App() {
  return (
    <Fragment>
      <Header />
      <MainContentWrapper>
        <MemoryCardWrapper cards={cards} selectedCards={selectedCards}/>
      </MainContentWrapper>
      <Footer />
    </Fragment>
  );
}

export default App;
