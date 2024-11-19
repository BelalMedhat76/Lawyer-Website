import React from "react";

export const Team = () => {
  return (
    <div>
      <section id="Team" className="our-team">
        <div>
          <h1 className="team-head">طاقم العمل</h1>
        </div>
        <div className="line  animate__animated animate__flipInX animate__infinite animate__slow"></div>
        <div className="container">
          <div className="box">
            <div className="imgBox">
              <img
                src="https://img.freepik.com/free-photo/portrait-handsome-young-man-makes-okay-gesture-demonstrates-agreement-likes-idea-smiles-happily-wears-optical-glasses-yellow-hat-t-shirt-models-indoor-its-fine-thank-you-hand-sign_273609-30676.jpg?size=626&ext=jpg"
                alt=""
              />
            </div>
            <div className="content1">
              <h2>
                Aakash Agrawal
                <br />
                <span>Manager</span>
              </h2>
            </div>
          </div>

          <div className="box">
            <div className="imgBox">
              <img
                src="https://image.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg"
                alt=""
              />
            </div>
            <div className="content1">
              <h2>
                Dolly Seth
                <br />
                <span>Digital Marketing</span>
              </h2>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img
                src="https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg"
                alt=""
              />
            </div>
            <div className="content1">
              <h2>
                Aakash Agrawal
                <br />
                <span>Manager</span>
              </h2>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img
                src="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="content1">
              <h2>
                Aakash Agrawal
                <br />
                <span>Manager</span>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
