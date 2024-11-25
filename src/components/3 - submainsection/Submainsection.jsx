import "./submainsections.css";

const Submainsection = () => {
  return (
    <main className="flex">
      <section className="left-section flex">
        <button className="active">All Projects</button>
        <button>HTML & CSS</button>
        <button>React Native</button>
        <button>Mern Stck</button>
        <button>Node & Express</button>
      </section>
      <section className="right-section flex ">
        {["aa", "bb", "cc", 1, 1, 1, 1].map((item) => {
          return (
            <article className="card" key={item}>
              <img src="./Aqarati.png" alt="" width={266} />

              <div style={{ width: "266px" }} className="box ">
                <h1 className="title">Aqarati Application</h1>

                <p className="sub-title">
                  Aqarati application is a simple application
                </p>

                <div className="flex icons">
                  <div className="flex" style={{ gap: "11px" }}>
                    <button className="icon-link"></button>
                    <button className="icon-github"></button>
                  </div>

                  <a href="#" className="link flex">
                    More{" "}
                    <span
                      className="icon-arrow-right"
                      style={{ alignSelf: "end" }}
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Submainsection;
