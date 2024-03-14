export default function consoleMessage() {
  const url = "https://www.matheuspass.dev/workwithme";

  console.clear();
  console.log(
    "%c Cuidado!",
    "color: #ff0000; font-size: 2.5rem; text-shadow: 2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000"
  );
  console.log(
    "%cTudo que você fizer poderá ser utilizado contra você!\n",
    "color: #fff; font-size: 2rem;"
  );
  console.log(
    `%cVenha trabalhar comigo: \n${url}`,
    "color: #fff; font-size: 1.5rem;"
  );
  console.log("\n\n\n");
  console.log(
    "%c Be Careful!",
    "color: #ff0000; font-size: 2.5rem; text-shadow: 2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000"
  );
  console.log(
    "%cEverything you do can be used against you!\n",
    "color: #fff; font-size: 2rem;"
  );
  console.log(`%cWork with me: \n${url}`, "color: #fff; font-size: 1.5rem;");
}
