import { IndexSections } from "../components/IndexSections";
import { NavBar } from "../components/NavBar";
export function Index() {

  return (
    <>
      <div className="h-screen">
        <NavBar />
        <IndexSections />
      </div>
    </>
  );
}