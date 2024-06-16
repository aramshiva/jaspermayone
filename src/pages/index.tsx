import { motion } from "framer-motion";
import Experience from "@/components/experience";
import Email from "@/components/email";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, filter: "blur(16px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ type: "spring", duration: 1.5 }}
        className="pb-9"
      >
        <div className="md:pl-48 md:pt-20 pl-9 pt-9 space-y-3 text-wrap md:w-[50rem]">
          <p className="font-medium text-2xl">
            Jasper Mayone{" "}
            <span className="text-gray-500 font-normal">
              is a 17-year-old high school student from Vermont. He is a circus
              performer, a <Link className="underline" href="https://github.com/jaspermayone">coder</Link>, and a <Link href="/photos" className="underline">photographer</Link>.{"  "}—{"  "}
              He currently works at Hack Club where he leads the welcoming team.
            </span>
          </p>
          {/* <p className="text-gray-400">
            Introduced to Hack Club through the circus, and a native vermonter,
            Jasper is currently a Junior in high school, on track for graduating
            a full year early! While in high school, Jasper led a Hack Club at
            his school. Jasper tries to live by the quote “We’ve all got both
            light and dark inside us. What matters is the part we choose to act
            on...that’s who we really are.” from one of his favorite books,
            Harry Potter. Jasper’s hobbies include reading, being in the great
            outdoors, photography, computer programming, cooking, and running
            away to join the circus.
          </p> */}
          <div className="py-5"/>
          <Experience />
          <div className="py-5"/>
          <Email />
        </div>
      </motion.div>
    </>
  );
}