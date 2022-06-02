import navBarStyles from "../../styles/Navbar.module.css";
import toggleHamAnimation from "./hamAnimationController";
import makeItActive from "./makeItActive";
import { useState, useEffect, useRef } from "react";
import Link from "next/dist/client/link";
import Image from "next/image";

export default function NavBar() {
  const [showMobileNavigationList, setShowMobileNavigationList] =
    useState(false);
  const [navAcitveClass, setNavActiveClass] = useState(" navigationActive");
  const hamContainerRef = useRef();

  function toggleHamAndShowHam() {
    toggleHamAnimation(hamContainerRef.current);
    setShowMobileNavigationList(!showMobileNavigationList);
  }

  useEffect(() => {
    if (parseInt(screen.width) <= 650) {
      setNavActiveClass(" ");
    }
  }, []);

  return (
    <nav className={navBarStyles.navbar}>
      <div className={navBarStyles.logoBox}>
        <Image src="/university.webp" alt="Logo" width={50} height={50} />
        <p>كلية الأمام الكاظم/قسم هندسة تقنيات الحاسوب</p>
      </div>
      <ul
        onClick={(e) => {
          makeItActive(e.target);
        }}
        className={navBarStyles.navigationList}
      >
        <Link href="/AboutUs">
          <li>
            <p className={navBarStyles.navigationListParagraph}>من نحن</p>
          </li>
        </Link>
        <Link href="/">
          <li>
            <p
              className={navBarStyles.navigationListParagraph + navAcitveClass}
            >
              الصفحة الرئيسية
            </p>
          </li>
        </Link>
      </ul>
      <div
        ref={hamContainerRef}
        className="ham_Container"
        onClick={toggleHamAndShowHam}
      >
        <div className="circle"></div>
        <div className="ham_4">
          <div className="middleBar"></div>
        </div>
        <div className="hide"></div>
      </div>
      {showMobileNavigationList && (
        <nav className={navBarStyles.mobileNavigationList}>
          <ul className={navBarStyles.mobileNavigationListUl}>
            <Link href="/">
              <li onClick={toggleHamAndShowHam}>
                <p
                  className={
                    navBarStyles.navigationListParagraph + navAcitveClass
                  }
                >
                  الصفحة الرئيسية
                </p>
              </li>
            </Link>
            <Link href="/AboutUs">
              <li onClick={toggleHamAndShowHam}>
                <p className={navBarStyles.navigationListParagraph}>من نحن</p>
              </li>
            </Link>
          </ul>
        </nav>
      )}
    </nav>
  );
}
