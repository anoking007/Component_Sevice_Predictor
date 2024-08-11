import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { cn } from "../../lib/utils";

export const SectionHeading = ({
  title,
  className,
  underlineClassName,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative w-fit mx-auto my-6">
      <h2 className={cn("text-3xl md:text-4xl font-bold text-center text-white", className)}>
        {title}
      </h2>
      <motion.div
        className={cn(
          "absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700",
          underlineClassName
        )}
        initial={{ width: 0 }}
        animate={{ width: isInView ? "100%" : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </div>
  );
};

// Usage example
// import { SectionHeading } from './components/ui/SectionHeading';

// function HomePage() {
//   return (
//     <div>
//       <SectionHeading title="My Section Title" />
//     </div>
//   );
// }

export default SectionHeading;
