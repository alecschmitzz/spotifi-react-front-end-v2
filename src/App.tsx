import { Route, Routes, useNavigate } from "react-router-dom";
import { Menu } from "./components/menu";
import { Sidebar } from "./components/sidebar";
import { Home } from "./pages/Home";
import Playlists from "./pages/playlists";
import AuthenticationPage from "./pages/AuthenticationPage";
import { useEffect, useState } from "react";
import { isLoggedIn } from "./_helpers";
import { PlaylistProvider } from "./context/PlaylistProvider";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const getCookie = (name: string) => {
      const cookies = document.cookie.split("; ");
      const cookie = cookies.find((row) => row.startsWith(`${name}=`));
      console.log(cookie);
      return cookie ? cookie.split("=")[1] : null;
    };

    const jwtToken = getCookie("jwt");

    if (!jwtToken) {
      navigate("/login");
    }
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    startLoading();
  }, []);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <PlaylistProvider>
        <Routes>
          <Route
            path="/login"
            element={<AuthenticationPage startLoading={startLoading} />}
          />

          <Route
            path="/*"
            element={
              loading ? (
                // <Loading />
                <></>
              ) : (
                <div className="hidden md:block">
                  <div className="border-t">
                    <div className="bg-background">
                      <div className="grid lg:grid-cols-5">
                        <Sidebar
                          className="hidden lg:block"
                        />
                        <div className="col-span-3 lg:col-span-4 lg:border-l">
                          <Menu />
                          <Routes>
                            <Route path="/" element={<Home />} />
                            {/* <Route path="/likedsongs">
                    <Route index element={<LikedSongs />} /> */}

                            <Route
                              path="/playlists/*"
                              element={<Playlists />}
                            />
                            {/* <Route
                          path="/playlists/*"
                          element={<Playlists />}
                        />
                        <Route path="/orders/*" element={<Orders />} />
                        <Route path="/allergies/*" element={<Allergies />} /> */}
                          </Routes>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          />
        </Routes>
      </PlaylistProvider>
    </>
  );
}
