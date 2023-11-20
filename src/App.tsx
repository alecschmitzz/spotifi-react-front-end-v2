import { Route, Routes } from "react-router-dom";
import { Menu } from "./components/menu";
import { Sidebar } from "./components/sidebar";
import { playlists } from "./data/playlists";
import { Home } from "./pages/Home";
import LikedSongs from "./pages/LikedSongs";

// export const metadata: Metadata = {
//   title: "Music App",
//   description: "Example music app using the components.",
// }

export default function MusicPage() {
  return (
    <>
      <div className="md:hidden">
        <img
          src="/examples/music-light.png"
          width={1280}
          height={1114}
          alt="Music"
          className="block dark:hidden"
        />
        <img
          src="/examples/music-dark.png"
          width={1280}
          height={1114}
          alt="Music"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden md:block">
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar playlists={playlists} className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <Menu />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/likedsongs">
                    <Route index element={<LikedSongs />} />
                    {/* <Route path=":id/categories">
                      <Route index element={<MenuCategoriesPage />} />
                      <Route
                        path=":category_id/items"
                        element={<MenuItemsPage />}
                      />
                    </Route>
                    <Route /> */}
                  </Route>
                </Routes>
                {/* <Home /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
