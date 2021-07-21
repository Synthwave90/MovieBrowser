import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="Our Story" />
      <div className="container">
          <div className="row">
              <div className="col-lg-8 offset-lg-2 my-5">
                  <p className="graph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam illo ea, ipsum molestias ex, fugit mollitia nam repellendus fuga reiciendis doloribus ab voluptatum? Adipisci veniam, non distinctio eos recusandae inventore?
                      
                  </p>
              </div>
          </div>
      </div>
    </>
  );
};

export default AboutView;
