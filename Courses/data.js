const courses = [
  {
    id: 1,
    title: "ILETS Preparation",
    description: "Prepare for the IELTS test with focused practice in Listening, Reading, Writing, and Speaking.Get expert tips and strategies to boost your score.",
    intro: "https://www.youtube.com/embed/uO4zQl_1Luk",
    instructor: "Sarah Ahmed",
    info: "Sarah Ahmed is a certified IELTS instructor with over 8 years of experience helping students achieve their desired band scores. She specializes in all four sections of the IELTS exam — Listening, Reading, Writing, and Speaking — and has guided hundreds of learners from beginner to advanced levels. Known for her clear explanations and practical strategies, Sarah combines academic rigor with a student-centered approach to make IELTS preparation effective and engaging. She also provides personalized feedback and mock tests to build confidence and improve performance.",
    playlist: "https://www.youtube.com/playlist?list=PLfSUFKdFlttn1MWrG5Q0-a9Cbm9y3uulX",
    cdetails: `<h3>📝 Description: Prepare for the IELTS test with focused practice in Listening, Reading, Writing, and Speaking. Learn tips, techniques, and strategies to boost your score.</h3><br><br>
    📅 Sessions: 20 sessions<br>
    ⏱️ Duration: 8 weeks (2 sessions/week) – 90 mins each<br>
    👩‍🏫 Instructor: Sarah Ahmed<br>
    🎁 Extras: Mock tests, speaking feedback, and writing corrections<br><br>`,
  },

  {
    id: 2,
    title: "Say It Right",
    description: "Master a clear and confident English speaking.SayIt Right helps you improve pronunciation, fluency, and speaking skills for real-life conversations, interviews,and exams.",
    intro: "https://www.youtube.com/embed/Wn-SL1a85Ic",
    instructor: "Youssif Mohamed",
    info: "Youssif Mohamed is a passionate and skilled English Speaking Instructor with over 7 years of experience helping learners improve their spoken communication. He specializes in building fluency, expanding vocabulary, correcting pronunciation, and boosting students’ confidence in real-life conversations. Youssif creates a friendly and supportive classroom environment where students feel comfortable expressing themselves. Through interactive activities, discussions, and role-plays, he helps learners speak English naturally and effectively in both academic and everyday situations.",
    playlist: "https://www.youtube.com/playlist?list=PLTyvAtj9OYb00pBe-pnqIB18qXchcvLii",
    cdetails: `<h3>📝 Description: Improve your pronunciation, fluency, and confidence in speaking English through real-life conversations and speaking activities.</h3><br><br>
    📅 Sessions: 15 sessions<br>
    ⏱️ Duration: 6 weeks – 60 mins each<br>
    👨‍🏫 Instructor: Youssif Mohamed<br>
    🎁 Extras: Personalized speaking feedback and mock interviews<br><br>`
  },

  {
    id: 3,
    title: "TOFEL Preparation",
    description: 'Sharpen your English skills and <br>get ready for the TOEFL test. This course covers Reading,Listening, Speaking, and Writing with strategies, practice tests that help you reach your target score.',
    intro: "https://www.youtube.com/embed/r1Ahe9Bk1oI",
    instructor: "Eman Mahmoud",
    info: "Eman Mahmoud is a qualified TOEFL instructor with extensive experience helping students succeed in the TOEFL iBT exam. With over 6 years of teaching academic English, she focuses on all four TOEFL sections — Reading, Listening, Speaking, and Writing. Eman’s teaching style blends clear explanations, proven strategies, and personalized support to help learners build the language skills and test techniques needed to achieve high scores. She also offers detailed feedback on speaking and writing tasks, helping students improve coherence, structure, and vocabulary for academic success.",
    playlist: "https://www.youtube.com/...",
    cdetails: `<h3>📝 Description: Master the TOEFL iBT exam with intensive practice and skill-building. Includes reading, listening, writing, and speaking training.</h3><br><br>
    📅 Sessions: 18 sessions<br>
    ⏱️ Duration: 7 weeks – 90 mins each<br>
    👩‍🏫 Instructor: Eman Mahmoud<br>
    🎁 Extras: Academic vocabulary, practice tests, and tips<br><br>`
  },

  {
    id: 4,
    title: "Grammar Course",
    description: "Build a strong foundation in English grammar for clear and correct communication.This course helps you master essential grammar rules, sentence structure, and common mistakes.",
    intro: "https://www.youtube.com/embed/AVYfyTvc9KY",
    instructor: "Jody Mohamed",
    info: "Jody Mohamed is a dedicated English Grammar instructor with over 8 years of experience helping learners master the rules and patterns of the English language. She specializes in making grammar clear, practical, and easy to understand for students at all levels. Jody uses interactive lessons, real-life examples, and targeted exercises to strengthen students’ grammar skills in writing and speaking. Her patient and structured approach helps learners build a strong foundation in sentence structure, tenses, articles, prepositions, and more — making grammar not just understandable, but enjoyable.",
    playlist: "https://www.youtube.com/playlist?list=PL2IkMHFHWdEo-t2mIKmk_HwrJYOTwlT0i",
    cdetails: `📝 <strong>Description:</strong> Learn grammar rules in a simple, clear way through examples, exercises, and explanations — ideal for writing and speaking.<br><br>
    📅 Sessions: 12 sessions<br>
    ⏱️ Duration: 6 weeks – 75 mins each<br>
    👩‍🏫 Instructor: Jody Mohamed<br>
    🎁 Extras: Weekly quizzes and grammar worksheets<br><br>`
  },

  {
    id: 5,
    title: "Vocab Course",
    description: "Expand your English vocabulary for everyday use.This course helps you learn and remember essential words through themed lessons,context-based learning, and practical exercises.",
    intro: "https://www.youtube.com/embed/VBSbbgiXc9s",
    instructor: "Tarek Ahmed",
    info: "Tarek Ahmed is an experienced English Vocabulary instructor who specializes in helping learners expand their word knowledge and express themselves more clearly and confidently. With over 6 years of teaching experience, Tarek uses engaging methods such as context-based learning, word maps, and themed vocabulary lessons to make learning new words both effective and fun. His approach focuses on understanding word meanings, usage, collocations, and pronunciation — empowering students to speak and write with precision and variety in academic, professional, and everyday settings.",
    playlist: "https://www.youtube.com/playlist?list=PL5bLw9Uguvv3kSpd1tM79vb0DGAG67dab",
    cdetails: `📝 <strong>Description:</strong> Expand your vocabulary through themed lessons, word games, and real-world usage to improve expression and comprehension.<br><br>
    📅 Sessions: 10 sessions<br>
    ⏱️ Duration: 4 weeks – 60 mins each<br>
    👨‍🏫 Instructor: Tarek Ahmed<br>
    🎁 Extras: Downloadable word lists and memory tips<br><br>`
  },

  {
    id: 6,
    title: "Reading Course",
    description: "Improve your English reading skills for exams, study. This course builds your ability to read faster, understand better, and analyze texts through guided practice and strategies.",
    intro: "https://www.youtube.com/embed/mC0D_8L4DYA",
    instructor: "Mahmoud Mostafa",
    info: "Mahmoud Mostafa is a skilled English Reading instructor with over 7 years of experience helping learners develop strong reading comprehension skills. He specializes in teaching strategies for understanding main ideas, identifying details, making inferences, and analyzing texts across various genres. Mahmoud’s lessons focus on improving reading speed, vocabulary in context, and critical thinking — essential for academic success and standardized tests like TOEFL and IELTS. His interactive approach helps students become more confident, efficient, and thoughtful readers.",
    playlist: "https://www.youtube.com/playlist?list=PLB8Nx5XHhSwS0--eC0exptjztydVsjjUI",
    cdetails: `<h3>📝 Description: Strengthen reading comprehension, speed, and critical thinking through diverse texts and guided practice.</h3><br><br>
    📅 Sessions: 14 sessions<br>
    ⏱️ Duration: 5 weeks – 75 mins each<br>
    👨‍🏫 Instructor: Mahmoud Mostafa<br>
    🎁 Extras: Weekly readings, discussions, and vocabulary support<br><br>`
  }
];

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const course = courses.find(c => c.id === id);

if (course) {
  document.getElementById("course-title").textContent = course.title;
  document.getElementById("course-description").innerHTML = course.description;
  // document.getElementById("course-video").innerHTML = `
  //   <iframe width="100%" height="315" src="${course.intro}" 
  //    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  //    allowfullscreen></iframe>`;

  document.getElementById("course-video").innerHTML =
    `<iframe width="100%" height="315" src="${course.intro}" 
   frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
   allowfullscreen></iframe>`;

  document.getElementById("course-instructor-name").textContent = course.instructor;
  document.getElementById("course-instructor-bio").textContent = course.info;
  document.getElementById("course-details").innerHTML = course.cdetails;
  document.getElementById("course-details").innerHTML = course.cdetails + `
  <div style="text-align:center;">
    <a href="${course.playlist}" class="course-btn" target="_blank">
      Start Watching
    </a>
  </div>
`;


  //   document.getElementById("course-playlist-button").innerHTML = `
  //   <a href="${course.playlist}" class="course-btn" target="_blank">
  //     🎥 Watch Full Playlist on YouTube
  //   </a>
  // `;

  // if (course.playlist) {
  // document.getElementById("course-playlist-button").innerHTML = `
  //   <a href="${course.playlist}" class="course-btn" target="_blank">
  //     🎥 Watch Full Playlist on YouTube
  //   </a>
  // `;
  // }
}


// else {
//   document.querySelector(".details-container").innerHTML = "<h2>NOT FOUND!</h2>";
// }