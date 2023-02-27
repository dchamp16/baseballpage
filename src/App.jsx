import "./App.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <div className="head">
          <NavBar />
        </div>
        {/* main content */}
        <div className="body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium cumque sunt, animi ipsum mollitia vero nobis optio
            voluptatem, sed dignissimos sint consequatur explicabo sit assumenda
            non laudantium iste odit perspiciatis possimus eum odio ea. Modi
            illo voluptatibus fuga eius rerum unde, animi placeat possimus
            voluptatum aliquam enim ipsam molestiae accusamus repudiandae velit
            laborum pariatur nam ratione cumque neque dicta. Quod iure dolorem
            tenetur alias laudantium, architecto, voluptatum pariatur voluptate
            in modi sit molestias dolorum perferendis iste, maiores atque
            incidunt cumque aliquid unde. Et consequatur facilis doloremque sed
            ducimus asperiores accusantium facere perspiciatis ab! Assumenda
            nam, vero cumque iure aliquid, eos nulla porro ut ratione quos in
            expedita! Accusantium in alias aspernatur saepe dolorem eaque fugiat
            voluptas veritatis autem consequuntur quod illo, id, temporibus ab
            voluptatibus odit dolor laboriosam! Sint quam adipisci unde sunt
            corporis amet vitae maxime culpa atque saepe vero dolor, praesentium
            quasi aperiam nulla delectus quidem modi cumque nostrum iste
            repellendus commodi neque. Vero, fugiat. Eligendi corporis iure
            ipsam vitae assumenda voluptatum doloremque repellendus unde? Minima
            mollitia error nihil odit quod quia ad iste nemo. Libero temporibus
            quaerat quidem nobis alias velit sit ipsam a delectus doloribus non
            iure placeat, tempora aliquid minima blanditiis reprehenderit
            excepturi maxime!
          </p>
        </div>
        {/* sidebar top */}
        <div className="sidebar-top">
          <h1>sidebar top</h1>
        </div>
        {/* sidebar bottom */}
        <div className="sidebar-bottom">
          <h1>sidebar bottom</h1>
        </div>

        {/* footer */}
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
