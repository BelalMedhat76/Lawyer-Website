import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import family from "../../assets/family.png";
import family2 from "../../assets/family2.png";
import worker from "../../assets/worker.png";
import chart from "../../assets/chart.png";
import chart2 from "../../assets/chart2.png";
import chart3 from "../../assets/chart3.png";
import { Rotate } from "react-reveal";
const ServCard = () => {
  return (
    <>
      <div className="cardsContainer  " id="servContainer">
        <div className="serviceHead">
          <h1>خدماتنا</h1>
          <h6>
            {" "}
            بقيادة مجموعة من المحامين والمستشارين على درجة عالية من الخبرة
          </h6>
        </div>
        <div className=" servicesCard">
          <Rotate bottom right>
            <div className="cardContent">
              <img src={family} alt="" />
              <h2>محاكم الاسره والاحوال الشخصية</h2>
              <p>
                يحتل قانون الاسرة والأحوال الشخصية علي الصعيد الدولي وفي مصر
                مساحة من الأهمية عن باقي القوانين, وهذا بالأساس يرجع إلي فحواه
                المتعلق بالأسرة
              </p>
              <a href="">اقرأ المزيد</a>
            </div>
          </Rotate>
          <Rotate bottom right>
            <div className="cardContent">
              <img src={family2} alt="" />
              <h2>المعاملات المصرفية والاوراق التجارية</h2>
              <p>
                هتمام المؤسسة بعملائها فى جميع القطاعات، أمر ضروري، وذلك حتى يتم
                تجنيب العميل من مخاطر التغيرات الفجائية فى القوانين المنظمة
              </p>
              <a href="">اقرأ المزيد</a>
            </div>
          </Rotate>
          <Rotate bottom right>
            <div className="cardContent">
              <img src={worker} alt="" />
              <h2>استشارات </h2>
              <p>
                الاستشارات القانونية والاقتصادية تعتبر من أهم الخدمات التى
                تقدمها مؤسسة سليم الناظر للمحاماة الاستشارات القانونية والتحكيم
                الدولى وتكون الاستشارة القانونية والاقتصادرة الناجحة
              </p>
              <a href="">اقرأ المزيد</a>
            </div>
          </Rotate>
          <div className="card2">
            <Rotate bottom right>
              <div className="cardContent">
                <img src={chart3} alt="" />
                <h2>محاكم الجنايات </h2>
                <p>
                  تتولى المؤسسة كافة القضايا المقامة ضد أو لصالح عملائه فى أفرع
                  القانون الجنائي والمدني والتجاري والبحري والتأمين والقضاء
                  الإداري بمجلس الدولة.
                </p>
                <a href="">اقرأ المزيد</a>
              </div>
            </Rotate>
            <Rotate bottom right>
              <div className="cardContent">
                <img src={chart3} alt="" />
                <h2>محاكم الجنايات </h2>
                <p>
                  تتولى المؤسسة كافة القضايا المقامة ضد أو لصالح عملائه فى أفرع
                  القانون الجنائي والمدني والتجاري والبحري والتأمين والقضاء
                  الإداري بمجلس الدولة.
                </p>
                <a href="">اقرأ المزيد</a>
              </div>
            </Rotate>
            <Rotate bottom right>
              <div className="cardContent">
                <img src={chart3} alt="" />
                <h2>محاكم الجنايات </h2>
                <p>
                  تتولى المؤسسة كافة القضايا المقامة ضد أو لصالح عملائه فى أفرع
                  القانون الجنائي والمدني والتجاري والبحري والتأمين والقضاء
                  الإداري بمجلس الدولة.
                </p>
                <a href="">اقرأ المزيد</a>
              </div>
            </Rotate>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServCard;
