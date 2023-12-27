"use client";

import React from "react";
import { Button, Hero } from "react-daisyui";

const HeroView = () => {
  return (
    <Hero className="min-h-screen">
      <Hero.Content className="text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          <Button color="primary">Get Started</Button>
        </div>
      </Hero.Content>
    </Hero>
  );
};

export default HeroView;
