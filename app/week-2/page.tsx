import Link from "next/link";
import StudentInfo from "./student-info";
export default function Page() {
  return (
    <>
      <main>
        <div>
          <h1>Week 2 Assignment</h1>
          <h1>Shopping List </h1>
          <StudentInfo></StudentInfo>
          <br />
          <br />
          <br />
          <Link href="/" >Home page</Link>
        </div>
      </main >
    </>
  );
}
