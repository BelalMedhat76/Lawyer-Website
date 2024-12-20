import React from "react";
import { Slide } from "react-reveal";
export const News = () => {
  return (
    <div className="NewsHero">
      <div className="NewsHead">
        <h1>خدماتنا</h1>
        <p> بقيادة مجموعة من المحامين والمستشارين على درجة عالية من الخبرة</p>
      </div>
      <div className=" newsCard">
        <Slide right>
          <div className="cardContentNews">
            <h4>
              العقود التي تبرمها الدوله عقود اداريه باستثناء التي تتعلق بتسيير
              مرفق عام{" "}
            </h4>
            <p>سبتمبر 23, 2022 </p>
            <p>
              “أن لم يعرف القانون العقود الإدارية ولم يبين الخصائص التى تميزها
              والتى يهتدى بها فى القول بتوفير الشروط اللازمة لها ولحصانتها
              وصيانتها من تعرض السلطة
            </p>

            <a href="">Read More</a>
          </div>
        </Slide>

        <Slide bottom>
          <div className="cardContentNews">
            <h4>اختصاص المحكمة الاقتصاديه بحماية حقوق الملكية الفكريه </h4>
            <p>سبتمبر 23, 2022 </p>
            <p>
              ذلك انه من المقرر بقضاء النقض ” أن المشرع من خلال نصوص القانون رقم
              120 لسنة 2008 بإنشاء المحاكم الاقتصادية وضع منظومة أراد من خلالها
            </p>
            <a href="">Read More</a>
          </div>
        </Slide>
        <Slide left>
          <div className="cardContentNews">
            <h4>
              الاتفاق الجديد بين البنك وعميله يعتبر ناسخا ومعدلا للاتفاق الاصلي
              وفقا لمبدا العقد شريعة المتعاقدين{" "}
            </h4>
            <p> سبتمبر 23, 2022</p>
            <p>
              وانه “ومن المقرر إعمالاً لمبدأ سلطان الإرادة ــ أن العقد – وعلى ما
              أفصحت عنه المذكرة الإيضاحية للقانون المدني – شريعة المتعاقدين،
              لكنها شريعة
            </p>
            <a href="">Read More</a>
          </div>
        </Slide>
      </div>
    </div>
  );
};
