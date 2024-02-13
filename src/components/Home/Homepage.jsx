import { DarkLink, LightLink } from "../../Style/ButtonStyles";
const Homepage = () => {
  return (
    <section className="flex flex-col">
      <div className="image-section inline-block self-center">
        <img src="/assets/images/logo-bg-none.png" alt="Logo" />
      </div>
      <div className="title-section flex flex-col md:gap-6 items-center mt-[3rem]">
        <h1 className="text-5xl md:text-6xl font-black">LunarFit</h1>
        <h2 className="text-2xl md:text-4xl font-medium ">
          Let's work out to the moon
        </h2>
      </div>
      <div className="link-section flex flex-col mt-[90px] gap-4 items-center">
        <LightLink to="signin">Sign in</LightLink>
        <DarkLink to="signup">
          Sign up
          <span>
            <img src="/assets/images/icon/sign-in.svg" alt="sign-in" />
          </span>
        </DarkLink>
      </div>
    </section>
  );
};

export default Homepage;
