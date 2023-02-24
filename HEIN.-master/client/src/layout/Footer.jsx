import React from "react";

import { Place, MailOutline, LocalPhone } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="p-8 grid gap-x-16 gap-y-4 md:grid-cols-3">
      <div>
        <h1 className="font-bold text-3xl uppercase mb-4 tracking-wider">
          <a href="">Leads 2JA</a>
        </h1>
        <p className="text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          recusandae nobis sunt aliquid tempore vitae sapiente ea voluptatibus
          ab repellat asperiores eius cum laboriosam facilis eos, maiores
          deleniti nemo consequuntur assumenda sed consectetur culpa voluptatum
          quisquam quibusdam? Saepe, soluta quibusdam.
        </p>
      </div>
      <div>
        <h2 className="font-bold text-2xl mb-4 tracking-wider">Links Úteis</h2>
        <div className="grid grid-cols-2">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Roupas Masculinas</a>
            </li>
            <li>
              <a href="">Accessórios</a>
            </li>
            <li>
              <a href="">Pedidos</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Carrinho</a>
            </li>
            <li>
              <a href="">Minha Conta</a>
            </li>
            <li>
              <a href="">Lista de Desejos</a>
            </li>
            <li>
              <a href="">Termos</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-2xl mb-4 tracking-wider">Contato</h2>
        <ul>
          <li>
            <Place className="mr-4" />
            <span>Capela de Santana - RS, Brazil</span>
          </li>
          <li>
            <LocalPhone className="mr-4" />
            <span>+5551996313679</span>
          </li>
          <li>
            <MailOutline className="mr-4" />
            <span>anderson_felipetavares@hotmail.com</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
