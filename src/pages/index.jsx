import { PageLayout } from "../common/layouts/PageLayout";
import ReactTypingEffect from "react-typing-effect";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <PageLayout title="Bionary Club" className="flex flex-col">
      <div className="flex flex-col items-center justify-center flex-1 gap-5">
        <div className="grid place-content-center text-center gap-5">
          <ReactTypingEffect
            text={"Welcome to Bionary club"}
            cursorRenderer={(cursor) => (
              <h1 className="hidden md:block text-purple-600">{cursor}</h1>
            )}
            displayTextRenderer={(text, x) => (
              <h1 key={x} className="tracking-widest">
                {text
                  .toUpperCase()
                  .split("")
                  .map((e, i) => (
                    <span
                      key={e + i}
                      className={
                        i % 2 === 0 ? "text-purple-300" : "text-purple-600"
                      }
                    >
                      {e}
                    </span>
                  ))}
              </h1>
            )}
            speed={100}
            eraseSpeed={100}
            eraseDelay={99999999999999}
            typingDelay={100}
            className="font-bold tracking-widest"
          />

          <motion.h4
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3 }}
            className="tracking-widest"
          >
            {"REVELATION OF A TECH AMALGATION".split("").map((e, i) => (
              <span
                key={e + i}
                className={i % 2 === 0 ? "text-[26px]" : "text-[32px]"}
              >
                {e}
              </span>
            ))}
          </motion.h4>
        </div>

        <motion.h6
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
          className="text-center w-[650px] max-w-full"
        >
          Bionary club is a TECH club focused on the field of industry 4.0 and
          Human robot interaction. As a club we will host hackathons, workshops
          in these field to make everyone aware of the oppurtunities in the
          field and excel in them.
        </motion.h6>
      </div>
    </PageLayout>
  );
}
