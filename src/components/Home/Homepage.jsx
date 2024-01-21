import { DarkLink, LightLink } from "../../Style/ButtonStyles";
const Homepage = () => {
  return (
    <section>
      <div className="image-section">
        <img src="/src/assets/images/logo-bg-none.png" alt="Logo" />
      </div>
      <div className="title-section flex flex-col items-center mt-[3rem]">
        <h1 className="text-[48px] font-black">LunarFit</h1>
        <h2 className="text-[24px] font-medium ">Let's work out to the moon</h2>
      </div>
      <div className="link-section flex flex-col mt-[90px] gap-4">
        <LightLink to="signin">Sign in</LightLink>
        <DarkLink to="signup">
          Sign up
          <span>
            <img src="/src/assets/images/icon/sign-in.svg" alt="sign-in" />
          </span>
        </DarkLink>
      </div>
    </section>
  );
};

export default Homepage;
