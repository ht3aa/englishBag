import { useRouter } from "next/router";
import lectureStyles from "../styles/Lecture.module.css";

export default function Lecture() {
  const route = useRouter();
  const { file, video_link } = route.query;

  return (
    <div className={lectureStyles.container}>
      <button onClick={() => route.push("/")} className="backButton">
        <span className="sr-only">go back</span>
        <svg style={{ width: "33px", height: "33px" }} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M10.05 16.94V12.94H18.97L19 10.93H10.05V6.94L5.05 11.94Z"
          />
        </svg>
      </button>
      <iframe
        width="350"
        height="315"
        src={video_link}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <object data={file} type="application/pdf" width="100%" height="600px">
        <h5>
          لا يحتوي متصفح الويب الخاص بك على قابلية فتح ملف بتنسيق بي دي اف بدلا
          من ذلك يمكنك تحميل المحاضرة بالنقر على الأيقونة اسفل يسار الشاشة
        </h5>
      </object>
      <a href={file} download>
        <button className="downloadBtn">
          <span className="sr-only">Download the file</span>
          <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"
            />
          </svg>
        </button>
      </a>
    </div>
  );
}
