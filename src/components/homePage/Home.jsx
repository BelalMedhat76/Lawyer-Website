import React from "react";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSliderStyles from "react-awesome-slider";
import back1 from "../../assets/back1.jpg";
import back2 from "../../assets/back2.jpg";
import back3 from "../../assets/back3.jpg";
import { Team } from "../Team/Team";
import { Slide } from "react-reveal";
import ServCard from "../servicesCard/Services_Card";
import { News } from "../news/News";
import { useNavigate } from "react-router-dom";
import { Head } from "../head/Head";

export const Home = (props) => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const navigate = useNavigate();

  const navigateToAboutUs = () => {
    // 👇️ navigate to /contacts
    navigate("/من نحن");
  };

  return (
    <>
      <AutoplaySlider
        cssModule={AwesomeSliderStyles}
        play={true}
        cancelOnInteraction={true} // should stop playing on user interaction
        interval={3000}
        className="sliderHome"
      >
        <div id="back1">
          <div className="back1Content">
            <Slide right>
              {" "}
              <div className="backparaContainer">
                <p
                  style={{
                    color: "#184C78",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  محامون و مستشارون
                </p>
                <h1>مؤسسة سليم الناظر للمحاماة والأستشارات القانونية</h1>
                <h1>سليم الناظر</h1>
              </div>
            </Slide>
            <Slide left>
              <div className="backpara2Container">
                <button
                  className="hvr-sweep-to-left "
                  onClick={navigateToAboutUs}
                >
                  {" "}
                  معلومات عنا
                </button>
              </div>
            </Slide>
          </div>
        </div>
        <div id="back2">
          <div className="back1Content">
            <Slide right>
              {" "}
              <div className="backparaContainer">
                <p
                  style={{
                    color: "#184C78",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  محامون و مستشارون
                </p>
                <h1>مؤسسة سليم الناظر للمحاماة والأستشارات القانونية</h1>
                <h1>سليم الناظر</h1>
              </div>
            </Slide>
            <Slide left>
              <div className="backpara2Container">
                <button
                  className="hvr-sweep-to-left "
                  onClick={navigateToAboutUs}
                >
                  {" "}
                  معلومات عنا
                </button>
              </div>
            </Slide>
          </div>
        </div>
        <div id="back3">
          <div className="back1Content">
            <Slide right>
              {" "}
              <div className="backparaContainer">
                <p
                  style={{
                    color: "#184C78",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  محامون و مستشارون
                </p>
                <h1>مؤسسة سليم الناظر للمحاماة والأستشارات القانونية</h1>
                <h1>سليم الناظر</h1>
              </div>
            </Slide>
            <Slide left>
              <div className="backpara2Container">
                <button
                  className="hvr-sweep-to-left "
                  onClick={navigateToAboutUs}
                >
                  {" "}
                  معلومات عنا
                </button>
              </div>
            </Slide>
          </div>
        </div>
      </AutoplaySlider>
      <div className="summary container">
        <Slide bottom>
          <div className="summryContent">
            <h2 style={{ color: "#184C78" }}>نبذة عنا</h2>
            <h1>مؤسسة سليم الناظر</h1>
            <p>
              انطلقت مؤسسة سليم الناظر بجمهورية مصر العربية وتم تأسيسها بمقر
              المؤسسة الكائن مصر الجديدة – القاهرة ، وكذلك المقر الكائن طريق
              الحرية – الإبراهيمية – الإسكندرية ,ومع ازدياد أعداد العملاء
              بالمكتب وترسيخاً لقواعد الثقة المتبادلة بيننا وبين عملائنا تم فتح
              مقر المؤسسة الجديد بالمهندسين – الجيزة ، لتستمر المؤسسة في تقديم
              أقصى حماية قانونية بكافة فروع القانون لعملائها فضلاً عن أن المؤسسة
              تساند المستثمرين المصريين والأجانب من خلال تقديم الدعم القانوني
              الازم للوصول بهم الى تحقيق الأهداف المرجوة على أسس وقواعد صحيحة
              وتضم مؤسسة فريق عمل من الأساتذة المحامين على درجة عالية من الخبرة
              والاحتراف بكا فروع القانون بقيادة مجموعة من المحامين والمستشارين
              على درجة عالية من الخبرة، وتقدم المؤسسة لعملائها كافة الاستشارات
              بكافة فروع القانون وتتولى المؤسسة كافة الدعاوى بشكل احترافي وخبرة
              تمكنها من بذل العناية المطلوبة لتحقيق أهدافها.
            </p>
            <a id="summBtn" onClick={navigateToAboutUs}>
              معلومات عنا{" "}
            </a>
          </div>
        </Slide>
        <Slide left>
          <div className="summaryImage"></div>
        </Slide>
      </div>
      <ServCard />
      <News />
      {/*اطلب استشارة  start */}
      <div className="trusted">
        <div className="ordering container">
          <div className=" OrderContain">
            <div className="orderRight">
              <h1>إذا كان لديك أي -</h1>
              <h1>مشاكل قانونية في حياتك ...</h1>
              <h1>نحن جاهزون</h1>
              <p>
                من أولويات اهتمامنا تقديم خدمة فائقة الدقة، فلذلك وضعنا بين يديك
                خبرات سنوات عديدة لكي نرضي العميل ونوفر له مناخ وعلاقة عمل تشعر
                العميل بالراحة حين مناقشة ودراسة القضايا القانونية وإيجاد الحلول
                المتوائمة معها للوصول للثقة المنشودة والنتائج المرضية
              </p>
              <p>
                حرصنا على توظيف طاقم مهني مختص مشهود له بالخبرة العلمية والعملية
                في مجال المحاماة والاستشارات القانونية، بحيث يسعى جاهدًا لكسب
                ثقة العملاء من خلال اتخاذ أفضل القرارات وأنسبها وفي الأوقات
                المناسبة لتصب في مصلحة موكلينا وحماية أعمالهم وتأمين مواقفهم
                وتأكيد مراكزهم القانونية.
              </p>
            </div>
            <div className="orderLeft">
              <h1>اطلب استشارة</h1>

              <form action="/action_page.php">
                <div className="row">
                  <div className="col-90">
                    <input
                      type="text"
                      id="fname"
                      name="firstname"
                      placeholder="الاسم"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-90">
                    <input
                      type="text"
                      id="lname"
                      name=" "
                      placeholder=" البريدالالكتروني "
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-90">
                    <select id="country" name="country">
                      <option value="australia">
                        {" "}
                        محاكم الاسره والاحوال الشخصيه
                      </option>
                      <option value="canada">الدعايا المدنيه</option>
                      <option value="usa">محاكم الاقتصاد</option>
                      <option value="usa">المعاملات الماليه</option>
                      <option value="usa">استشارات</option>
                      <option value="usa">محاكم الجنايات</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-90">
                    <textarea
                      id="subject"
                      name="subject"
                      placeholder="Write something.."
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <input type="submit" value="ارسال" id="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="trustdContent">
          <h1>الثقة والأمانة </h1>
          <p>
            نحن نلزم أنفسنا بأعلى متطلبات المسؤولية المهنية من خلال تطبيق سياسة
            حفظ المعلومات، فهنا نستمع إلى عملائنا مع الاهتمام بأدق التفاصيل من
            خلال وسائل اتصال حديثة وتواصل آمنة هي ضمن إجراءات السرية المتبعة
            لدينا لكسب ثقتهم بلا حدود.
          </p>
          <button id="contactusBtn">
            {" "}
            <a href="">تواصل معنا</a>
          </button>
        </div>
      </div>
      <Team />
      {/* اطلب استشارة end */}
    </>
  );
};
