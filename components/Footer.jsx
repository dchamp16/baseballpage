import React from "react";

const Footer = () => {
  const copyrightDate = new Date();

  return (
    <div>
      <footer>
        <h1>Footer title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, distinctio iste! Ea, ipsum! Nulla labore ea sapiente
          veniam necessitatibus inventore pariatur nam nobis esse eaque ab natus
          neque at beatae harum impedit quidem nostrum totam est officiis nihil,
          voluptatem ratione, quam quisquam! Earum labore maxime fugit omnis
          reprehenderit aut nobis?
        </p>
        <p>Copyright &copy; {copyrightDate.getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Footer;
