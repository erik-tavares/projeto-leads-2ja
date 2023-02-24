import React from "react";

import Categorie from "./Categorie";

const Categories = () => {
  return (
    <section className="p-8" id="categories">
      <div className="grid gap-2 md:grid-cols-4 mb-2">
        <Categorie
          name="Como Funciona?"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi_AgQq93V1lQ0vY5W5XTTKzMPNQLT9UkqCg&usqp=CAU"
        />
        <Categorie
          name="Camisetas"
          image="https://api.lorem.space/image/fashion?w=640&h=480&r=3529"
        />
        <Categorie
          name="Sapatos"
          image="https://api.lorem.space/image/shoes?w=640&h=480&r=3452"
        />
        <Categorie
          name="Eletrônicos"
          image="https://api.lorem.space/image/watch?w=640&h=480&r=6182"
        />
      </div>
      <div className="grid gap-2 md:grid-cols-2">
        <Categorie
          name="Mobília"
          image="https://api.lorem.space/image/furniture?w=640&h=480&r=1235"
        />
        <Categorie
          name="Outros"
          image="https://api.lorem.space/image?w=640&h=480&r=1848"
        />
      </div>
    </section>
  );
};

export default Categories;
