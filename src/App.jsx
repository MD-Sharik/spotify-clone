import "./App.css";
import Card from "./assets/component/Card";
import Title from "./assets/Titlename";
import PlayListCard from "./assets/component/playlistCard";
import Button from "./assets/component/Buttons/Index";
import PlayScreen from "./assets/component/playScreen/Index";

function App() {
  return (
    <>
      <div className="main">
        <div className="left">
          <div className="upper-left">
            <div className="homesearch">
              <div className="logo">
                <img
                  src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                  alt=""
                />
              </div>
              <div id="home">
                <div id="homeL">
                  <img
                    width="25"
                    height="25"
                    src="https://img.icons8.com/fluency-systems-filled/48/EEEEEE/home.png"
                    alt="home"
                  />
                </div>
                <div id="homeT">Home</div>
              </div>
              <div id="Search">
                <div id="searchL">
                  {" "}
                  <img
                    width="25"
                    height="25"
                    src="https://img.icons8.com/ios-filled/150/727272/search--v1.png"
                    alt="search--v1"
                  />
                </div>
                <div id="searchT">Search</div>
              </div>
            </div>
          </div>
          <div className="lower-left">
            <div className="addPlayList">
              <div className="leftPlaylist">
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/fluency-systems-filled/48/727272/bursts.png"
                  alt="bursts"
                />
                <h2>Your Library</h2>
              </div>
              <div className="rightPlaylist">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-glyphs/30/727272/plus-math.png"
                  alt="plus-math"
                />
              </div>
            </div>
            <div className="playlistcards">
              <PlayListCard
                title="Create your first playlist"
                sub="It's easy, we'll help you"
                button="Create playlist"
              />
              <PlayListCard
                title="Let's find some podcasts to follow"
                sub="We'll keep you updated on new episodes"
                button="Browse podcasts"
              />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="login">
            <div className="Navbutton">
              <div className="leftbut">
                <div
                  style={{
                    backgroundColor: "#090909",
                    borderRadius: "50%",
                    width: "35px",
                    height: "35px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    width="25"
                    height="25"
                    style={{ rotate: "90deg" }}
                    src="https://img.icons8.com/ios-glyphs/30/8d8d8d/expand-arrow--v1.png"
                    alt="expand-arrow--v1"
                  />
                </div>
              </div>
              <div className="rightbut">
                <div
                  style={{
                    backgroundColor: "#090909",
                    borderRadius: "50%",
                    width: "35px",
                    height: "35px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    width="25"
                    height="25"
                    style={{ rotate: "-90deg" }}
                    src="https://img.icons8.com/ios-glyphs/30/8d8d8d/expand-arrow--v1.png"
                    alt="expand-arrow--v1"
                  />
                </div>
              </div>
            </div>
            <div className="register">
              <div id="register">
                <h2>Sign up</h2>
              </div>
              <div id="login">
                <Button title="Log in" />
              </div>
            </div>
          </div>
          <Title titleName="Spotify Popular" />
          <div className="firstrow">
            <Card
              imgurl="https://c.saavncdn.com/092/ANIMAL-Hindi-2023-20231124191036-500x500.jpg"
              name="Pehle Bhi Main"
              description="Vishal Mishra"
              link="https://pagalnew.com/download128/44540"
            />
            <Card
              imgurl="https://www.moviesmedia.net/wp-content/uploads/2023/10/tu-hai-kahan-song.jpg"
              name="Tu Hain Kahan"
              description="Ahad Khan, Usama Ali, Raffey Anwar"
              link="https://pagalnew.com/download128/44225"
            />
            <Card
              imgurl="https://c.saavncdn.com/415/Satranga-From-ANIMAL-Hindi-2023-20231027131032-500x500.jpg"
              name="Satranga"
              description="Arijit Singh, Shreyas Puranik"
              link="https://pagalnew.com/download128/44104"
            />
            <Card
              imgurl="https://i.ytimg.com/vi/zqGW6x_5N0k/maxresdefault.jpg"
              name="Arjan Vaily"
              description="Bhupinder Babbal | animal"
              link="https://pagalnew.com/download128/44477"
            />
            <Card
              imgurl="https://i.scdn.co/image/ab67616d0000b2730d3449f333a83a25feb423f8"
              name="Husn"
              link="https://pagalnew.com/download128/44724"
              description="Anuv Jain"
            />
            <Card
              imgurl="https://c.saavncdn.com/026/Chaleya-From-Jawan-Hindi-2023-20230814014337-500x500.jpg"
              name="Chaleya"
              description="Arijit Singh, Shilpa Rao"
              link="https://pagalnew.com/download128/43094"
            />
            <Card
              imgurl="https://c.saavncdn.com/424/Zihaal-e-Miskin-Hindi-2023-20230523053359-500x500.jpg"
              name="Zihaal e Miskin"
              description="Vishal Mishra - Shreya Ghoshal"
              link="https://pagalnew.com/download128/42136"
            />
            <Card
              imgurl="https://i.scdn.co/image/ab67616d0000b2734a60872ae145776164540a7f"
              name="Heeriye"
              description="lorem ipsuim aoskdna,smd;lk aks;as"
            />
          </div>
          <Title titleName="For You" />
          <div className="firstrow">
            <Card
              imgurl="https://i.scdn.co/image/ab67616d0000b2734a60872ae145776164540a7f"
              name="Heeriye"
              description="lorem ipsuim aoskdna,smd;lk aks;as"
            />
            <Card
              imgurl="https://c.saavncdn.com/424/Zihaal-e-Miskin-Hindi-2023-20230523053359-500x500.jpg"
              name="Zihaal e Miskin"
              description="Vishal Mishra - Shreya Ghoshal"
              link="https://pagalnew.com/download128/42136"
            />
            <Card
              imgurl="https://c.saavncdn.com/026/Chaleya-From-Jawan-Hindi-2023-20230814014337-500x500.jpg"
              name="jingle bell"
              description="bell"
            />
            <Card
              imgurl="https://c.saavncdn.com/092/ANIMAL-Hindi-2023-20231124191036-500x500.jpg"
              name="Pehle Bhi Main"
              description="lorem ipsuim aoskdna,smd;lk aks;as"
            />
            <Card
              imgurl="https://www.moviesmedia.net/wp-content/uploads/2023/10/tu-hai-kahan-song.jpg"
              name="Tu Hain Kahan"
              description="bell"
            />
            <Card
              imgurl="https://i.ytimg.com/vi/zqGW6x_5N0k/maxresdefault.jpg"
              name="Arjan Vaily"
              description="bell"
            />
            <Card
              imgurl="https://c.saavncdn.com/415/Satranga-From-ANIMAL-Hindi-2023-20231027131032-500x500.jpg"
              name="Satranga"
              description="bell"
            />

            <Card
              imgurl="https://i.scdn.co/image/ab67616d0000b2730d3449f333a83a25feb423f8"
              name="Husn"
              description="bell"
            />
          </div>
        </div>
      </div>
      <div className="loginBanner">
        <div className="left-down">
          <h5>PREVIEW OF SPOTIFY</h5>
          <p>
            Signup to get unlimited songs and podcasts with ocassional ads. NO
            credit card needed.
          </p>
        </div>
        <div className="right-down">
          <Button title="Sign up free" />
        </div>
      </div>
    </>
  );
}

export default App;
