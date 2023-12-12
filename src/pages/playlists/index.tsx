import { Routes, Route } from "react-router-dom";

import List from "./List";
import AddEdit from "./AddEdit";
import Songs from "./Songs";
// import MenuCategories from "../menu-categories";

export default function Playlists() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="add" element={<AddEdit />} />
      <Route path="edit/:id" element={<AddEdit />} />
      <Route path="/:id" element={<Songs />} />
      {/* <Route path=":menuId/categories/*" element={<MenuCategories />} /> */}
    </Routes>
  );
}
