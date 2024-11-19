import React from "react";
import { Rotate } from "react-reveal";
import { useNavigate } from "react-router-dom";

export const NewsPage = () => {
  const navigate = useNavigate();

  const navigateToRead1 = () => {
    // 👇️ navigate to /contacts
    navigate("/read1");
  };
  const navigateToRead2 = () => {
    // 👇️ navigate to /contacts
    navigate("/read2");
  };

  const navigateToRead3 = () => {
    // 👇️ navigate to /contacts
    navigate("/read3");
  };

  const navigateToRead4 = () => {
    // 👇️ navigate to /contacts
    navigate("/read4");
  };

  const navigateToRead5 = () => {
    // 👇️ navigate to /contacts
    navigate("/read5");
  };

  const navigateToRead6 = () => {
    // 👇️ navigate to /contacts
    navigate("/read6");
  };
  const navigateToRead7 = () => {
    // 👇️ navigate to /contacts
    navigate("/read7");
  };
  return (
    <>
      <div className="NewsHome" style={{ marginBottom: "100px" }}>
        <p>أخبار قضائية</p>
      </div>
      <div className="cardsContainer  " id="servContainer">
        <div className=" servicesCard">
          <Rotate bottom right>
            <div className="cardContent" id="اختصاص">
              <h5 style={{ color: "#093e57", fontWeight: "bold" }}>
                اختصاص المحكمة الاقتصاديه بحماية حقوق الملكية الفكريه{" "}
              </h5>
              <p style={{ marginBottom: "30px" }}>
                ذلك انه من المقرر بقضاء النقض ” أن المشرع من خلال نصوص القانون
                رقم 120 لسنة 2008 بإنشاء المحاكم الاقتصادية وضع منظومة أراد من
                خلالها إنجاز القضايا التى أطلق عليها بعض الدعاوى التى لها تأثير
                على المناخ الاقتصادى فى البلاد ، ومن ثم أنشأ بدائرة اختصاص كل
                محكمة استئناف محكمة تسمى ” المحكمة الاقتصادية ” […]
              </p>
              <button id="readmoreBtn" onClick={navigateToRead1}>
                {" "}
                <a href="">اقرأ المزيد</a>
              </button>
            </div>
          </Rotate>
          <Rotate bottom right>
            <div className="cardContent" id="العقود">
              <h5 style={{ color: "#093e57", fontWeight: "bold" }}>
                العقود التي تبرمها الدوله عقود اداريه باستثناء التي تتعلق بتسيير
                مرفق عام{" "}
              </h5>
              <p style={{ marginBottom: "30px" }}>
                “أن لم يعرف القانون العقود الإدارية ولم يبين الخصائص التى تميزها
                والتى يهتدى بها فى القول بتوفير الشروط اللازمة لها ولحصانتها
                وصيانتها من تعرض السلطة القضائية لها بالتعطيل أو بالتأويل ، إلا
                أن إعطاء العقود التى تبرمها جهات الإدارة وصفها القانونى الصحيح
                باعتبارها عقودا إدارية أو مدنية يتم على هدى ما يجرى تحصيله منها
                ويكون […]
              </p>
              <button id="readmoreBtn" onClick={navigateToRead2}>
                {" "}
                <a href="">اقرأ المزيد</a>
              </button>
            </div>
          </Rotate>
          <Rotate bottom right>
            <div className="cardContent" id="الاختصاص">
              <h5 style={{ color: "#093e57", fontWeight: "bold" }}>
                الاختصاص بالتنفيذ لقاضي الاقتصادية
              </h5>
              <p style={{ marginBottom: "30px" }}>
                ” ولئن كان مؤدى النص في المادة 11 من القانون رقم 120 لسنة 2008
                الخاص بإنشاء المحاكم الاقتصادية أن الأحكام الصادرة من المحاكم
                الاقتصادية القابلة للطعن بالنقض هي التي تصدر ابتداءً من الدوائر
                الاستئنافية أما الدعاوى التي تنظر أمام المحكمة الاقتصادية بهيئة
                ابتدائية ويكون الفصل في الطعن عليها أمام المحكمة – بهيئة
                استئنافية – فلا […]
              </p>
              <button id="readmoreBtn" onClick={navigateToRead3}>
                {" "}
                <a href="">اقرأ المزيد</a>
              </button>
            </div>
          </Rotate>
          <div className="card2">
            <Rotate bottom right>
              <div className="cardContent" id="الاتفاق">
                <h5 style={{ color: "#093e57", fontWeight: "bold" }}>
                  {" "}
                  الاتفاق الجديد بين البنك وعميله يعتبر ناسخا ومعدلا للاتفاق
                  الاصلي وفقا لمبدا العقد شريعة المتعاقدين{" "}
                </h5>
                <p style={{ marginBottom: "30px" }}>
                  وانه “ومن المقرر إعمالاً لمبدأ سلطان الإرادة ــ أن العقد –
                  وعلى ما أفصحت عنه المذكرة الإيضاحية للقانون المدني – شريعة
                  المتعاقدين، لكنها شريعة اتفاقية، فهو يلزم طرفيه بما يرد
                  الاتفاق عليه متى وقع صحيحاً غير مخالف للنظام العام والآداب –
                  وهو ما ينطبق على العلاقة التعاقدية بين البنوك وعملائها. والأصل
                  أنه لا يجوز […]
                </p>
                <button id="readmoreBtn" onClick={navigateToRead4}>
                  {" "}
                  <a href="">اقرأ المزيد</a>
                </button>
              </div>
            </Rotate>
            <Rotate bottom right>
              <div className="cardContent" id="المصنفات">
                <h5 style={{ color: "#093e57", fontWeight: "bold" }}>
                  المصنفات الغير مسبوقه بحماية حقوق الملكية الفكريه “الملك العام
                  “{" "}
                </h5>
                <p style={{ marginBottom: "30px" }}>
                  انه من المقرر قانونا وفقا لنص المادة 138/ 6من قانون حمايه
                  الملكيه الفكريه “عرفت المصنفات المشتقه علي انها هي المصنفات
                  التي تستمد اصلها من مصنف سابق الوجود كالترجمات والتوزيعات
                  الموسيقية وتجميعات المصنفات بما في ذلك قواعد البيانات سواء من
                  الحاسب او غيره , ومجموعات التعبير الفلكوري مادامت مبتكرة من
                  حيث ترتيب أو اختيار محتواها وعليه […]
                </p>
                <button id="readmoreBtn" onClick={navigateToRead5}>
                  {" "}
                  <a href="">اقرأ المزيد</a>
                </button>
              </div>
            </Rotate>
            <Rotate bottom right>
              <div className="cardContent" id="كيفية">
                <h5 style={{ color: "#093e57", fontWeight: "bold" }}>
                  {" "}
                  كيفية احتساب التقادم في الجرائم الوقتيه والمستمرة ومتتابعة
                  الافعال{" "}
                </h5>
                <p style={{ marginBottom: "30px" }}>
                  و أنه يختلف حساب مدة التقادم باختلاف نوع الجريمة ذلك لأنه هناك
                  جرائم وقتية وجرائم مستمرة وجرائم متكررة أو متتابعة الأفعال
                  وجرائم العادة ومناط البحث في هذه الدعوى هو نوع الجريمة المقدم
                  بها المتهم للمحاكمة وقد استقر فقهاء القانون على أنه تعتبر
                  الجريمة مستمرة طالما كان الاعتداء على المصلحة التي يحميها
                  القانون بالتجريم مستمرة وهو […]
                </p>
                <button id="readmoreBtn" onClick={navigateToRead6}>
                  {" "}
                  <a href="">اقرأ المزيد</a>
                </button>
              </div>
              <div
                className="cardContent"
                style={{ marginTop: "50px" }}
                id="رفع"
              >
                <h5 style={{ color: "#093e57", fontWeight: "bold" }}>
                  رفع دعوي جنائية عن ذات موضوع الدعوي المدنية
                </h5>
                <p style={{ marginBottom: "30px" }}>
                  رفع دعوي جنائية عن ذات موضوع الدعوي المدنية يوجب علي المحكمة
                  القضاء بوقف الدعوي المدنيه وان ” النص في المادة 265/1 من قانون
                  الإجراءات الجنائية علي أن “إذا رفعت الدعوى المدنية أمام
                  المحكمة المدنية يجب وقف الفصل فيها حتى يحكم نهائيا في الدعوى
                  الجنائية المقامة قبل رفعها أو أثناء السير فيها…”يدل علي أن
                  المشرع ارتأى […]
                </p>
                <button id="readmoreBtn" onClick={navigateToRead7}>
                  {" "}
                  <a href="">اقرأ المزيد</a>
                </button>
              </div>
            </Rotate>
          </div>
        </div>
      </div>
    </>
  );
};
