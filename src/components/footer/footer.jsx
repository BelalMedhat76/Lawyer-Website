import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { BiTimeFive } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import logo from "../../assets/NavLogo.png";
export const Footer = () => {
  return (
    <>
      <CDBFooter className="shadow">
        <CDBBox display="flex" flex="column">
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
              <a href="/" className="d-flex align-items-center p-0 text-dark">
                <img alt="logo" src={logo} width="100px" />
              </a>
              <p className="my-3" style={{ width: "250px" }}>
                إننا نوفر لكم كافة الخدمات ونجاحها في الحصول على فرصة تقدم لك
                فرصة الحصول على أفضل فرصة للحصول على فرصة الحصول على فرصة الحصول
                على فرصة جيدة
              </p>
              <CDBBox display="flex" className="mt-4">
                <CDBBtn flat color="dark">
                  <CDBIcon fab icon="facebook-f" />
                </CDBBtn>
                <CDBBtn flat color="dark" className="mx-3">
                  <CDBIcon fab icon="twitter" />
                </CDBBtn>
                <CDBBtn flat color="dark" className="p-2">
                  <CDBIcon fab icon="instagram" />
                </CDBBtn>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p
                className="h5 mb-4"
                style={{ fontWeight: "600", color: "#F2BE22" }}
              >
                روابط مفيدة
              </p>
              <CDBBox flex="column">
                <CDBFooterLink>الرئيسية</CDBFooterLink>
                <CDBFooterLink> الخدمات</CDBFooterLink>
                <CDBFooterLink>أخبار قضائية</CDBFooterLink>
                <CDBFooterLink>تواصل معنا</CDBFooterLink>
                <CDBFooterLink> من نحن</CDBFooterLink>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ color: "#F2BE22" }}>
                خدماتنا
              </p>
              <CDBBox flex="column">
                <CDBFooterLink className="z">الرئيسية</CDBFooterLink>
                <CDBFooterLink> الخدمات</CDBFooterLink>
                <CDBFooterLink>أخبار قضائية</CDBFooterLink>
                <CDBFooterLink>تواصل معنا</CDBFooterLink>
                <CDBFooterLink> من نحن</CDBFooterLink>
              </CDBBox>
            </CDBBox>
            <CDBBox className="xx">
              <p
                className="h5 mb-4"
                style={{ fontWeight: "600", color: "#F2BE22" }}
              >
                اسأل مستشارك القانوني
              </p>
              <CDBBox flex="column">
                <CDBFooterLink>
                  <h5>
                    {" "}
                    <IoCallSharp
                      style={{
                        fontSize: "30px",
                        marginLeft: "10px",
                        color: "#F2BE22",
                      }}
                    />
                    +025653888
                  </h5>
                  <h5>
                    <CiLocationOn
                      style={{
                        fontSize: "30px",
                        marginLeft: "10px",
                        color: "#F2BE22",
                      }}
                    />
                    التجمع الخامس – الحي الاول – خلف ماركت سعود – المبنى الاداري
                    القطامية مول – الدور الثاني وحده{" "}
                  </h5>
                </CDBFooterLink>
                <CDBFooterLink>
                  <h5>
                    <BiTimeFive
                      style={{
                        fontSize: "30px",
                        marginLeft: "10px",
                        color: "#F2BE22",
                      }}
                    />
                    Mon-Fri 9am-6am
                  </h5>
                </CDBFooterLink>
                <CDBFooterLink>
                  <h5>
                    <MdEmail
                      style={{
                        fontSize: "30px",
                        marginLeft: "10px",
                        color: "#F2BE22",
                      }}
                    />
                    SalimAlNazer@gmail.com
                  </h5>
                </CDBFooterLink>
              </CDBBox>
            </CDBBox>
          </CDBBox>
          <small className="text-center mt-5">
            حقوق الطبع والنشر 2022 uninx. كل الحقوق محفوظة.
          </small>
        </CDBBox>
      </CDBFooter>
    </>
  );
};
