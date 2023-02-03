import { PageLayout } from "../common/layouts/PageLayout";
import ReactTypingEffect from "react-typing-effect";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <PageLayout title="Bionary Club" className="flex flex-col">
      <div className="flex flex-col items-center flex-1 gap-5">
        <div className="grid place-content-center text-center gap-2">
          <ReactTypingEffect
            text={"Welcome to Bionary club"}
            cursorRenderer={(cursor) => (
              <h2 className="hidden md:block">{cursor}</h2>
            )}
            displayTextRenderer={(text, i) => <h2>{text.toUpperCase()}</h2>}
            speed={100}
            eraseSpeed={100}
            eraseDelay={99999999999999}
            typingDelay={100}
          />

          <motion.h5
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3 }}
          >
            REVELATION OF A TECH AMALGATION
          </motion.h5>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3 }}
          className="text-center w-[600px] max-w-full"
        >
          Bionary club is a TECH club focused on the field of industry 4.0 and
          Human robot interaction. As a club we will host hackathons, workshops
          in these field to make everyone aware of the oppurtunities in the
          field and excel in them
        </motion.p>
      </div>
    </PageLayout>
  );
}
