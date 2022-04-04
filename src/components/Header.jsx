import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import GOClogoEn from "../images/sig-blk-en.svg";
import GOClogoFr from "../images/sig-blk-fr.svg";
import { useIntl } from "react-intl";
import LanguageSelect from "./LanguageSelect";

const Header = ({ layoutData, location }) => {
  const intl = useIntl();
  let homeLink = `/${intl.locale}/`;

  const locationObj = {
    "/en/": "GCPS Service Catalogue",
    "/fr/": "FR GCPS Service Catalogue",
    "/en/m365gcdocs-interop/": "M365-GCdocs Interoperability",
    "/fr/m365gcdocs-interop/": "FR M365-GCdocs Interoperability",
  };

  return (
    <header className="mb-0">
      <div className="container">
        <div className="row my-3 mx-2">
          <nav className="skiphold" id="header-skiplink">
            <a
              className="sr-only sr-only-focusable aurora-skip skiplink"
              aria-label="main skiplink"
              href="#main-content"
            >
              {layoutData.skip_link_text}
            </a>
          </nav>
          <div
            className="align-self-center"
            property="publisher"
            typeof="GovernmentOrganization"
          >
            <div
              className="align-self-center"
              property="publisher"
              typeof="GovernmentOrganization"
            >
              <img
                src={homeLink === "/fr/" ? GOClogoFr : GOClogoEn}
                className="goc-logo"
                alt={
                  homeLink === "/fr/"
                    ? "Public Services and Procurement Canada Logo FR"
                    : "Public Services and Procurement Canada Logo"
                }
                //TODO: Get alt text from CMS
              />
            </div>
          </div>
          <section className="text-right align-self-center ml-auto">
            <h2 className="sr-only sr-only-focusable aurora-skip">
              {layoutData.header_langauge_select}
            </h2>
            <LanguageSelect layoutData={layoutData} />
          </section>
        </div>
      </div>
      <Breadcrumbs
        layoutData={layoutData}
        location={location}
        locationObj={locationObj}
      />
      <div className="py-4 header-background mb-3">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="text-light">{locationObj[location]}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
