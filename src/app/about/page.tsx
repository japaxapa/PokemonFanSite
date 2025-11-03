export default function AboutPage() {
  return (
    <div
      id="about__content"
      className="flex"
    >
      <div
        id="header"
        className="px-10 flex flex-col w-screen"
      >
        <h1 className="font-semibold text-3xl text-zinc-600 my-3 text-center">
          THIS IS A POKEMON FAN SITE
        </h1>
        <p className="pl-4 my-2">
          The site is made possible by using the PokemonAPI. <br />
          The objective of this site is to learn front-end application and
          integrating it with an existing API.
          <br />
          The site will be made using NextJS, Tailwind and Shadcn.
        </p>
        <p className="text-right pr-4 my-2">
          The idea for this site comes from an easy to access API and a
          familiarity with the pokemon theme.
          <br />
          By using this site I can improve my developer skills while also being
          able to create a tool that I can use in a custom way.
          <br/>
          The main objective is to create a design from zero and be able to use it to track some functionalities that I wish to use on a pokemon based game.
        </p>
      </div>
    </div>
  );
}
