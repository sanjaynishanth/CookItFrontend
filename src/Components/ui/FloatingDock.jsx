import { cn } from "../../lib/utils"; 
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { Link } from 'react-scroll';
// import { Link} from 'react-router-dom';

const navItems = [
  { title: "Home", icon: "🏠", href: "home" },
  { title: "About ", icon: "ℹ️", href: "about" },
  { title: "Services", icon: "🛠️", href: "services" },
  //  { title: "Contact", icon: "☎️", href: "/contact" },
];

export const FloatingDock = () => {
  return (
    <>
      <FloatingDockDesktop items={navItems} />
      {/* <FloatingDockMobile items={navItems} /> */}
    </>
  );
};

const FloatingDockDesktop = ({ items }) => {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto hidden md:flex h-20 gap-6 items-end rounded-3xl bg-gray-50 dark:bg-neutral-900 px-6 pb-4 shadow-lg"
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({ mouseX, title, icon, href }) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let size = useSpring(useTransform(distance, [-150, 0, 150], [50, 100, 50]), { mass: 0.1, stiffness: 150, damping: 12 });
  let iconSize = useSpring(useTransform(distance, [-150, 0, 150], [24, 50, 24]), { mass: 0.1, stiffness: 150, damping: 12 });

  const [hovered, setHovered] = useState(false);

  return (
    <Link to={href}>
      <motion.div
        ref={ref}
        style={{ width: size, height: size }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative transition-transform duration-200 "
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 2 }}
              className="text-sm text-gray-900 dark:text-white absolute top-0 left-1/2 transform -translate-x-1/2 -mt-8 z-10 "
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div style={{ width: iconSize, height: iconSize }} className="flex items-center justify-center text-xl cursor-pointer">
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}

export default FloatingDock;
