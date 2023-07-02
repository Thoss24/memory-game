import React, { Fragment } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainContentWrapper from "./components/wrapper/MainContentWrapper";
import MemoryCardWrapper from "./components/wrapper/MemoryCardWrapper";

const cards = [
  {
    id: 1,
    name: 'Pajarito The Pirate',
    image: '/Pajarito-Pirate.svg'
  },
  {
    id: 2,
    name: 'Lenny The Goat',
    image: '/lemmling-Cartoon-goat.svg'
  },
  {
    id: 3,
    name: 'Lightheaded Len',
    image: '/Cartoon-Zebra.svg'
  },
  {
    id: 4,
    name: 'Cinema Cedric',
    image: '/cinema-penguin.svg'
  },
  {
    id: 5,
    name: 'Conjuring Coleen',
    image: '/Frog-Wearing-Witchs-Hat.svg'
  },
  {
    id: 6,
    name: 'Clean Bean Machine',
    image: '/black_cat_black_and_white.svg'
  },
  {
    id: 7,
    name: 'Goodest Boy Gary',
    image: '/lemmling_Cartoon_dog.svg'
  },
  {
    id: 8,
    name: 'Big Hug Barry',
    image: '/lemmling-Cartoon-bear.svg'
  },
  {
    id: 9,
    name: 'Bookworm Ben',
    image: '/owl_ebook.svg'
  },
  {
    id: 10,
    name: 'Red blob bob',
    image: '/SmilingCat.svg'
  },
  {
    id: 11,
    name: 'Dino Danielle',
    image: '/StudioFibonacci-Cartoon-triceratops.svg'
  },
  {
    id: 12,
    name: 'Shaggy Hair Henry',
    image: '/lemmling-yak.svg'
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
