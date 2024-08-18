import React from "react";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non id
              rerum iste perferendis culpa! Ipsum ipsa aliquam a modi iure, eum
              aspernatur vero voluptate consectetur consequatur exercitationem
              dolor doloremque doloribus sed alias, tempora impedit! Nulla
              repudiandae, nobis fugiat harum nesciunt totam laborum
              consequuntur repellendus, fuga quam ipsam obcaecati ea illum ullam
              provident suscipit nihil voluptatum blanditiis error. Adipisci
              voluptatum, nemo laudantium optio odit animi, ipsa vero
              dignissimos assumenda porro, dolores sint qui fugit alias
              quibusdam. Mollitia earum quisquam eum, provident eaque nihil
              magni deserunt id accusantium, unde itaque architecto facere
              tempore maiores temporibus rem voluptatibus atque rerum aspernatur
              exercitationem. Temporibus!
            </p>
          </div>
        </div>
        <img
          src={aboutImg}
          width={300}
          height={300}
          alt="about-img"
          className="mx-auto rounded-3xl py-8 md:py-0"
        />
      </div>
    </div>
  );
};

export default About;
