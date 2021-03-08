const load_home_page = function (element) {
  const home = document.createElement("div");
  home.id = "home";

  const home_div = document.createElement("div");
  home_div.id = "home-div";
  home.appendChild(home_div);

  const arr = {
    "Together with you is my favorite place to be.":
      "あなたのそばが、私のお気に入りの場所です。",
    "When I look at you, I see the rest of my life in front of my eyes.":
      "私があなたを見るとき、目の前に私の残りの人生が見えます。",
  };
  for (let key in arr) {
    const description = document.createElement("p");
    description.className = "description";
    description.innerHTML = `${key}<br />${arr[key]}`;
    home_div.appendChild(description);
  }

  const menu_btn = document.createElement("button");
  menu_btn.id = "menu-btn";
  menu_btn.innerHTML = "Menu";
  home_div.appendChild(menu_btn);

  element.appendChild(home);
};

export default load_home_page;

/*
<div id="home">
        <div id="home-div">
          <p class="description">
            Together with you is my favorite place to be.
            <br />
            あなたのそばが、私のお気に入りの場所です。
          </p>
          <p class="description">
            When I look at you, I see the rest of my life in front of my eyes.
            <br />
            私があなたを見るとき、目の前に私の残りの人生が見えます。
          </p>
          <button id="menu-btn">Menu</button>
        </div>
      </div>
*/
