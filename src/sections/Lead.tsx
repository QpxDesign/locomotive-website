import React, { useRef, useEffect, useState } from "react";
import { FaLongArrowAltDown } from "react-icons/fa";

export default function Lead() {
  const logo_links = [
    "https://web.stanford.edu/group/magiclab/images/index_footer_logo.png",
    "https://1000logos.net/wp-content/uploads/2022/07/University-of-Maryland-Logo-1920.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/1608px-Princeton_seal.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Yale_University_logo.svg/2560px-Yale_University_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png",
    "https://www.hillrag.com/wp-content/uploads/2020/02/dc-gov-vector-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/United_States_Department_of_Transportation_seal.svg/1200px-United_States_Department_of_Transportation_seal.svg.png",
    "https://www.ms.gov/sites/default/files/inline-images/01_state-seal.png",
    "https://1000logos.net/wp-content/uploads/2018/08/University-of-Michigan-Symbol.jpg",
    "https://cdn.govshare.site/332764c512a160cc598311295321d52196c562c3/media/img/logo.png",
    "https://marketing.illinois.edu/wp-content/uploads/2021/09/logo-internal-collaboration-1024x423.png",
    "https://communicationsguide.ucdavis.edu/sites/g/files/dgvnsk6246/files/inline-images/UCDavisUnofficialSeal_2Color_0.png",
    "https://www.bc.edu/content/bc-web/offices/office-of-university-communications/policies-guidelines/graphic-identity-system/_jcr_content/par/responsive_columns/col1/bc_image_content/image.img.png/1550507443010.png",
    "https://ucm.calpoly.edu/sites/ucm.calpoly.edu/files/inline-images/logo_page_graphics-07%20%281%29.png",
    "https://seeklogo.com/images/U/university-of-british-columbia-logo-F4496C20CA-seeklogo.com.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/WMATA_Metro_Logo.svg/1601px-WMATA_Metro_Logo.svg.png",
  ];
  const showcaseRef = useRef<any>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  useEffect(() => {
    var index = 0;
    const interval = setInterval(() => {
      if (showcaseRef.current !== null) {
        const div = showcaseRef.current;
        if (div) {
          console.log(index);
          div.scrollTo({
            left: (div.scrollWidth / logo_links.length) * index,
            behavior: "smooth",
          });
          if (index > logo_links.length) {
            index = 0;
            div.scrollTo({
              left: 0,
              behavior: "smooth",
            });
          } else {
            index += 1;
          }
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="blur-image full-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1549496620-037fca760261?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="vstack vcenter">
        <h1
          style={{
            padding: 0,
            zIndex: 999,
            fontFamily: "montserrat, inter",
            fontSize: "5.25em",
            fontWeight: "900",
            color: "white",
            margin: 0,
          }}
        >
          Locomotive
        </h1>
        <h2
          style={{
            fontFamily: "montserrat, inter",
            fontSize: "2em",
            color: "white",
            zIndex: 99,
            margin: 0,
            maxWidth: "min(30em,90%)",
            textAlign: "center",
          }}
        >
          Revolutionizing Rail Travel at the Intersection of Technology and
          Transportation{" "}
        </h2>
        <h3 style={{ marginTop: "15em", color: "white", zIndex: 999 }}>
          Our Solutions Are Used At:
        </h3>
        <div
          className="hstack vcenter hide-scrollbar"
          ref={showcaseRef}
          style={{
            zIndex: 999,
            background: "rgba(255,255,255,.3)",
            padding: "1em 2em",
            gap: "2em",
            borderRadius: "1em",
            maxWidth: "90vw",
            overflowX: "scroll",
          }}
        >
          {logo_links.map((link: any) => {
            return (
              <img
                src={link}
                draggable={false}
                style={{ height: "6em", zIndex: 9999, userSelect: "none" }}
              />
            );
          })}
        </div>
        <button
          className="full-center"
          style={{
            zIndex: 999,
            marginTop: "7.5rem",
            border: "none",
            fontFamily: "montserrat",
            fontSize: "1.5em",
            padding: ".25em 1.5em",
            borderRadius: "1em",
            gap: ".25em",
          }}
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        >
          Our Work <FaLongArrowAltDown />
        </button>
      </div>
    </section>
  );
}
