import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "100px",
          marginBottom: "30px",
        }}
      >
        Welcome to Next JS
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dolores.
        Nemo dicta odit tempora illum sit ratione ex eveniet harum, optio, nobis
        quam id ullam in omnis eos aperiam. Voluptatem, suscipit consequatur
        veritatis velit magnam incidunt illum iste impedit cumque quod deserunt
        maiores vitae laborum, excepturi deleniti. Earum, ea numquam itaque
        mollitia iusto rerum? Reiciendis, repellat quasi. Corporis nemo illum
        similique alias rerum eum perferendis totam asperiores vel voluptatibus
        velit voluptate molestias, doloribus assumenda molestiae autem eveniet
        quod quos corrupti aperiam ut ipsa consectetur. Nostrum veritatis natus
        nam doloremque hic modi facilis fugiat fuga maxime cupiditate,
        provident, veniam deserunt asperiores delectus debitis culpa recusandae
        magnam aut a ipsam porro! Quidem odit ducimus vero reprehenderit
        quibusdam quod aliquid delectus. Consequuntur consectetur ipsa ratione
        nam tenetur. Vero natus totam veritatis suscipit perspiciatis tempora
        voluptatibus saepe incidunt cupiditate doloribus! Corrupti amet est,
        sequi repellendus animi voluptatem. Quibusdam sequi consequatur pariatur
        hic excepturi quasi labore nam illum laudantium quidem. Quas non
        assumenda aliquam voluptate deserunt praesentium ipsam minima libero,
        harum repellat voluptatem ut eligendi, illo error vitae optio facere qui
        culpa commodi ex? Dolores quod tempore illum odit quo omnis sequi saepe
        iusto nemo, amet at atque, modi adipisci earum possimus illo eligendi
        itaque voluptas? Repellat tenetur magnam consectetur quibusdam neque
        recusandae unde harum vel corrupti quam obcaecati laudantium suscipit
        quod omnis earum, minus ducimus, dolores quisquam, hic perferendis
        eaque? Officia nulla quam error ipsa, eius odit nisi at provident
        eveniet optio tempore quae ipsum in praesentium sit. Voluptatum officiis
        repudiandae eum mollitia soluta consequatur ipsam ducimus consectetur
        labore expedita libero, et esse totam similique, nisi consequuntur
        inventore. Voluptas numquam quae magnam odit ipsum earum pariatur
        deleniti harum animi omnis nulla labore nam consequatur accusamus
        possimus reiciendis placeat explicabo rem assumenda quisquam aspernatur
        inventore illo, et saepe. Rerum repellat iusto repudiandae commodi,
        perspiciatis libero!
      </p>
      <Link href="/Todo/todo">Navigate to Users Page</Link>
    </>
  );
}
