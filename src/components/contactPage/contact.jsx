import React from "react";
import { BiHomeCircle } from "react-icons/bi";
import { AiFillMail } from "react-icons/ai";
import { IoCallSharp } from "react-icons/io5";
import { Slide } from "react-reveal";
export const ContactUs = () => {
  return (
    <>
      <div className="contactHome"></div>
      <div className="contactContainer ">
        <div className="contactDetails">
          <Slide right>
            <h1>تواصل مع فريق الدعم لدينا أو حدد موعدًا مع مستشارنا </h1>
            <p>
              يرجى الاتصال بنا باستخدام المعلومات أدناه. للحصول على معلومات
              إضافية حول خدمات الاستشارات الإدارية لدينا ، يرجى زيارة الصفحة
              المناسبة على موقعنا.
            </p>
            <h5>
              <BiHomeCircle />
              عنوان المكتب
            </h5>
            <p>
              التجمع الخامس – الحي الاول – خلف ماركت سعود – المبنى الاداري
              القطامية مول – الدور الثاني وحده{" "}
            </p>
            <h5>
              <AiFillMail />
              عنوان البريد
            </h5>
            <p> selimalnazer@gmail.com</p>
            <h5>
              <IoCallSharp />
              أتصل بنا علي
            </h5>
            <p>01122772277</p>
            <p>025653888</p>
          </Slide>
        </div>
        <div className="contactForm">
          <form action="">
            <Slide left>
              <input type="text" placeholder="الاسم" />
              <input type="text" placeholder="البريد الاكتروني" />
              <input type="text" placeholder="رقم التيليفون" />
              <input type="text" placeholder="الموضوع" />
              <textarea
                name=""
                placeholder="رسالتك"
                id=""
                cols="10"
                rows="2"
              ></textarea>
              <button className="contactBtn">
                <a href="">ارسال</a>
              </button>
            </Slide>
          </form>
        </div>
      </div>
    </>
  );
};
