import aboutUsStyles from "../styles/AboutUs.module.css";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className={aboutUsStyles.aboutUs}>
        <h1>من نحن؟</h1>
        <p>
          انا مصطفى غلام سيد طالب في جامعة الأمام الكاظم قسم هندسة تقنيات
          الحاسوب. هدفي من هذا الموقع هو تسهيل و تبسيط اللغة الأنكليزية على
          القارئ و ذلك بتوفير اجزاء مبسطة من الكتاب هيدوي بلص
          <br />
          (Headway plus)
        </p>
      </div>
      <footer>
        <a aria-label="Department image" href="/department_logo.png">
          <Image
            src="/department_logo.png"
            width="60"
            height="60"
            alt="department logo"
          />
        </a>
        <p>&copy; تم بمساعدة فريق بت</p>
      </footer>
    </>
  );
};

export default AboutUs;
