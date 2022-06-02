import homeStyles from "../styles/Home.module.css";
import Image from "next/image";
import { db } from "../data/db";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const parts = Object.keys(db);

  return (
    <>
      <header className={homeStyles.hero}>
        <Head>
          <meta
            name="description"
            content="Bag that contains files and videos about english language which will simplified and make it easy for you to understand the grammar of English language"
          />

          <title>English Bag</title>
        </Head>
        <div className={homeStyles.overlayer}>
          <div className={homeStyles.logo}>
            <Image
              src="/american_and_british_flags.png"
              width={450}
              height={225}
              alt="American and British flags"
              priority
            />
          </div>
          <div className={homeStyles.mainContent}>
            <h1>
              سنوفر لك ما تحتاجه لتعلم اللغة الأنكليزية بأسهل و أبسط الطرق
              الممكنة.
            </h1>
            <h4>
              تم الأعداد من قبل الطالب: مصطفى علام سيد
              <br />
              بأشراف: L. Naoara bnoan
            </h4>
            <a href="#files">
              <button>
                <h5>لنبدأ معا</h5>
              </button>
            </a>
          </div>
        </div>
        <svg style={{ width: "44px", height: "44px" }} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M7.03 13.92H11.03V5L13.04 4.97V13.92H17.03L12.03 18.92Z"
          />
        </svg>
      </header>
      <section className={homeStyles.whyEnglishContainer}>
        <Image
          src="/america_flag.png"
          width={500}
          height={281}
          alt="American and British flags"
        />
        <div className={homeStyles.whyEnglishContent}>
          <h2>لماذا اللغة الأنكليزية؟</h2>
          <p>
            تُعرف اللغة الإنجليزية بأنها لغة شبكة المعلومات الدولية. وفي سبيل
            فهم القطاع الأكبر من العالم وتيسير عملية التواصل بينك وبينهم تصبح
            اللغة الإنجليزية هي الأداة الأهم على الإطلاق في هذا الشأن. فهي
            تمنحنا القدرة على أن تكون القراءة والاستماع والكتابة بيننا وبين قطاع
            أكبر من الأشخاص. ولا عجب في أن تكون الكتب الأكثر مبيعاً في وقتنا
            الحديث مكتوبة جميعها باللغة الإنجليزية.
          </p>
        </div>
      </section>
      <main id="files" className={homeStyles.mainContainer}>
        {parts.map((part, index) => {
          return (
            <div key={index}>
              <div className={homeStyles.title}>
                <h3>{part}</h3>
              </div>
              <div className={homeStyles.cardContainer}>
                {db[part].map((card) => {
                  return (
                    <div key={card.id} className={homeStyles.card}>
                      <div className={homeStyles.cardImg}>
                        <div className={homeStyles.cardOverlay}>
                          <h4>{card.lesson_number}</h4>
                        </div>
                      </div>
                      <div className={homeStyles.cardContent}>
                        <h4>{card.lesson_name}</h4>
                        <p>{card.description}</p>
                        <Link
                          href={`/lecture?file=/files/${card.file_path}.pdf&video_link=${card.video_link}`}
                          passHref
                        >
                          <button>أبدأ الدرس</button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </main>
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
}
