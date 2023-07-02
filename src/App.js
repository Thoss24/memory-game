import React, { Fragment } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainContentWrapper from "./components/wrapper/MainContentWrapper";
import MemoryCardWrapper from "./components/wrapper/MemoryCardWrapper";

const cards = [
  {
    id: 1,
    name: 'Pajarito The Pirate',
    image: './memory-game/Pajarito-Pirate.svg'
  },
  {
    id: 2,
    name: 'Lenny The Goat',
    image: './memory-game/lemmling-Cartoon-goat.svg'
  },
  {
    id: 3,
    name: 'Lightheaded Len',
    image: './memory-game/Cartoon-Zebra.svg'
  },
  {
    id: 4,
    name: 'Cinema Cedric',
    image: './memory-game/cinema-penguin.svg'
  },
  {
    id: 5,
    name: 'Conjuring Coleen',
    image: './memory-game/Frog-Wearing-Witchs-Hat.svg'
  },
  {
    id: 6,
    name: 'Clean Bean Machine',
    image: './memory-game/black_cat_black_and_white.svg'
  },
  {
    id: 7,
    name: 'Goodest Boy Gary',
    image: './memory-game/lemmling_Cartoon_dog.svg'
  },
  {
    id: 8,
    name: 'Big Hug Barry',
    image: './memory-game/lemmling-Cartoon-bear.svg'
  },
  {
    id: 9,
    name: 'Bookworm Ben',
    image: './memory-game/owl_ebook.svg'
  },
  {
    id: 10,
    name: 'Red blob bob',
    image: './memory-game/SmilingCat.svg'
  },
  {
    id: 11,
    name: 'Dino Danielle',
    image: './memory-game/StudioFibonacci-Cartoon-triceratops.svg'
  },
  {
    id: 12,
    name: 'Shaggy Hair Henry',
    image: './memory-game/lemmling-yak.svg'
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
