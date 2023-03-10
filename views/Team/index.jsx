import React, { useEffect } from "react";
import { pageTitle } from "@/helper";
import Cta from "@/components/Cta";
import PageHeading from "@/components/PageHeading";
import Div from "@/components/Div";
import SectionHeading from "@/components/SectionHeading";
import Spacing from "@/components/Spacing";
import Team from "@/components/Team";
import { useTranslation } from "next-i18next";

export function TeamView() {
  const { t } = useTranslation("team");

  const teamData = [
    {
      memberImage: "/images/member_1.jpeg",
      memberName: "Melon Bulgery",
      memberDesignation: "Product Designer",
      memberSocial: {
        linkedin: "/",
        twitter: "/",
        youtube: "/",
        facebook: "/",
      },
    },
    {
      memberImage: "/images/member_2.jpeg",
      memberName: "Olinaz Fushi",
      memberDesignation: "Product Designer",
      memberSocial: {
        linkedin: "/",
        twitter: "/",
        youtube: "/",
        facebook: "/",
      },
    },
    {
      memberImage: "/images/member_3.jpeg",
      memberName: "David Elone",
      memberDesignation: "React Developer",
      memberSocial: {
        linkedin: "/",
        twitter: "/",
        youtube: "/",
        facebook: "/",
      },
    },
    {
      memberImage: "/images/member_4.jpeg",
      memberName: "Melina Opole",
      memberDesignation: "WP Developer",
      memberSocial: {
        linkedin: "/",
        twitter: "/",
        youtube: "/",
        facebook: "/",
      },
    },
    {
      memberImage: "/images/member_3.jpeg",
      memberName: "David Elone",
      memberDesignation: "React Developer",
      memberSocial: {
        linkedin: "/",
        twitter: "/",
        youtube: "/",
        facebook: "/",
      },
    },
    {
      memberImage: "/images/member_4.jpeg",
      memberName: "Melina Opole",
      memberDesignation: "WP Developer",
      memberSocial: {
        linkedin: "/",
        twitter: "/",
        youtube: "/",
        facebook: "/",
      },
    },
    {
      memberImage: "/images/member_1.jpeg",
      memberName: "Melon Bulgery",
      memberDesignation: "Product Designer",
      memberSocial: {
        linkedin: "/",
        twitter: "/",
        youtube: "/",
        facebook: "/",
      },
    },
    {
      memberImage: "/images/member_2.jpeg",
      memberName: "Olinaz Fushi",
      memberDesignation: "Product Designer",
      memberSocial: {
        linkedin: "/",
        twitter: "/",
        youtube: "/",
        facebook: "/",
      },
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title={t("heading.titlePrincipal.title")}
        bgSrc="images/team_hero_bg.jpeg"
        pageLinkText={t("heading.titlePrincipal.pageLinkText")}
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title={t("heading.container")}
          subtitle={t("heading.subtitle")}
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          {teamData.map((item, index) => (
            <Div key={index} className="col-lg-3 col-sm-6">
              <Team
                memberImage={item.memberImage}
                memberName={item.memberName}
                memberDesignation={item.memberDesignation}
                memberSocial={item.memberSocial}
              />
              <Spacing lg="80" md="30" />
            </Div>
          ))}
        </Div>
        <Spacing lg="70" md="50" />
        <Div className="container">
          <Cta
            title={t("heading.cta.title")}
            btnText= {t("heading.cta.btnText")}
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Div>
    </>
  );
}
