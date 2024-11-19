import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Head } from "./components/head/Head";

import { Home } from "./components/homePage/Home";

import { ServicesPage } from "./components/servicesPage/ServicesPage";
import { Location } from "./components/Map/location";
import { NewsPage } from "./components/newsPage/newsPage";
import { ContactUs } from "./components/contactPage/contact";
import { Aboutus } from "./components/aboutusPage/aboutus";
import { Footer } from "./components/footer/footer";
import { ReadMore1 } from "./components/newsPage/readMore[1]";
import { ReadMore2 } from "./components/newsPage/readMore[2]";
import { ReadMore3 } from "./components/newsPage/readMore[3]";
import { ReadMore4 } from "./components/newsPage/readMore[4]";
import { ReadMore5 } from "./components/newsPage/readMore[5]";
import { ReadMore6 } from "./components/newsPage/readMore[6]";
import { ReadMore7 } from "./components/newsPage/readMore[7]";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Head />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/الخدمات" element={<ServicesPage />} />
          <Route path="/أخبار قضائيه" element={<NewsPage />} />
          <Route path="/تواصل معنا" element={<ContactUs />} />
          <Route path="/من نحن" element={<Aboutus />} />
          <Route path="/read1" element={<ReadMore1 />} />
          <Route path="/read2" element={<ReadMore2 />} />
          <Route path="/read3" element={<ReadMore3 />} />
          <Route path="/read4" element={<ReadMore4 />} />
          <Route path="/read5" element={<ReadMore5 />} />
          <Route path="/read6" element={<ReadMore6 />} />
          <Route path="/read7" element={<ReadMore7 />} />
        </Routes>

        <Location />
        <Footer />
      </BrowserRouter>
      {/* <Head />
      <Home />
      <ServicesPage />
      <Location />
      <Footer />
      <NewsPage />
      <ContactUs />
      <Aboutus />
      <ReadMore1 /> */}
    </div>
  );
}

export default App;
